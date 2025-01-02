const offlineStartTimes = {};
const failedAttempts = {};

async function loadHosts() {
    try {
        const response = await fetch('http://localhost:3838/hosts');
        const hosts = await response.json();

        const container = document.getElementById('hosts-container');
        container.innerHTML = '';

        for (const host of hosts) {
            const pingResponse = await fetch(`http://localhost:3030/ping/${host.host}`);
            const pingData = await pingResponse.json();

            if (!pingData.alive) {
                if (!offlineStartTimes[host.host]) {
                    offlineStartTimes[host.host] = new Date();  
                }
                failedAttempts[host.host] = (failedAttempts[host.host] || 0) + 1;
            } else {
                offlineStartTimes[host.host] = null;
                failedAttempts[host.host] = 0;
            }

            const card = createHostCard(host, pingData);
            container.appendChild(card);
        }
    } catch (error) {
        console.error('Erro ao carregar os hosts:', error);
    }
}

function createHostCard(host, pingData) {
    const card = document.createElement('div');
    card.className = `col-lg-2 col-md-4 col-sm-6`;

    const isOffline = !pingData.alive || failedAttempts[host.host] >= 4;
    const cardColorClass = isOffline ? 'bg-danger' : 'bg-success';
    const alertVisible = pingData.time && pingData.time > 50 ? '' : 'd-none';

    card.innerHTML = `
        <div class="card ${cardColorClass} text-white" style="border-radius: 12px;">
            <div class="card-body">
                <h5 class="card-title">${host.networkName}</h5>
                <h6 class="card-subtitle mb-3"> - ${host.host}</h6>
                <p class="card-text">
                    ${pingData.alive 
                        ? `ONLINE | ${pingData.time ? pingData.time + ' ms' 
                        : 'N/A'}` 
                        : `OFFLINE | <span id="offline-time-${host.host}">
                            ${formatOfflineTime(host.host)}
                        </span>`
                    } 
                </p>
                <span id="alert-host" class="${alertVisible} text-warning position-absolute top-0 end-0 translate-middle-x" style="font-size: 3.2rem;">
                    <i class='bx bxs-error-circle'></i>
                </span>
            </div>
        </div>
    `;

    return card;
}

function formatOfflineTime(ip) {
    const startTime = offlineStartTimes[ip];
    if (!startTime) return '00:00:00';

    const now = new Date();
    const diff = new Date(now - startTime);

    const hours = String(diff.getUTCHours()).padStart(2, '0');
    const minutes = String(diff.getUTCMinutes()).padStart(2, '0');
    const seconds = String(diff.getUTCSeconds()).padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
}

function updateOfflineTimes() {
    for (const ip in offlineStartTimes) {
        if (offlineStartTimes[ip]) {
            const timeElement = document.getElementById(`offline-time-${ip}`);
            if (timeElement) {
                timeElement.textContent = `${formatOfflineTime(ip)}`;
            }
        }
    }
}

window.onload = async function () {
    await loadHosts();
    setInterval(updateOfflineTimes, 1000); 
};

setInterval(loadHosts, 300000);
