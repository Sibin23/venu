function createBokehDot() {
    const container = document.getElementById('bokeh-container');
    const dot = document.createElement('div');
    dot.classList.add('bokeh-dot');
    
    // Make them larger to be seen easily
    const size = Math.random() * 100 + 50; // 50px to 150px
    dot.style.width = size + 'px';
    dot.style.height = size + 'px';

    // Spread across the bottom
    dot.style.left = Math.random() * 100 + 'vw';
    dot.style.bottom = "-50px"; // Start slightly off-screen
    
    const duration = Math.random() * 2 + 3; 
    dot.style.animationDuration = duration + 's';

    container.appendChild(dot);

    setTimeout(() => {
        dot.remove();
    }, duration * 1000);
}

function revealMessage() {
    const msg = document.getElementById('surprise');
    const bokeh = document.getElementById('bokeh-container');
    
    msg.classList.remove('d-none');
    bokeh.style.display = 'block'; // Make container visible
    
    // Create a massive initial burst of 40 dots
    for(let i=0; i<40; i++) {
        setTimeout(createBokehDot, i * 50);
    }

    // Keep generating them for 10 seconds
    const bokehInterval = setInterval(createBokehDot, 150);
    setTimeout(() => clearInterval(bokehInterval), 10000);

    // Heart burst
    for(let i=0; i<30; i++) {
        setTimeout(createHeart, i * 30);
    }
}