let punti = 150;

function nav(id) {
    console.log("Navigo verso: " + id);
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    
    document.querySelectorAll('.nav-item').forEach(i => i.style.color = "#D1D5DB");
    // Chiudi camera se cambi pagina
    if(id !== 'camera') stopCamera();
    window.scrollTo(0,0);
}

function openPop(tipo) {
    const content = tipo === 'barca' ? 
        "⚓<h3 class='text-xl font-bold mt-4'>TOUR IN BARCA</h3><p class='text-gray-400 mt-2'>Trova il QR al Porto!</p>" : 
        "🍝<h3 class='text-xl font-bold mt-4'>MANI IN PASTA</h3><p class='text-gray-400 mt-2'>Cucina con le nonne!</p>";
    document.getElementById('details-content').innerHTML = content;
    nav('details');
}

function buyReward(costo) {
    if(punti >= costo) {
        punti -= costo;
        document.getElementById('points-display').innerText = punti + " pt";
        alert("Riscattato! Codice: BEE-99");
    } else {
        alert("Punti insufficienti!");
    }
}

let stream;
async function startCamera() {
    try {
        stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
        document.getElementById('video').srcObject = stream;
        document.getElementById('camBtn').style.backgroundColor = "#22C55E";
    } catch (err) { alert("Attiva i permessi fotocamera!"); }
}

function stopCamera() {
    if (stream) stream.getTracks().forEach(t => t.stop());
}
