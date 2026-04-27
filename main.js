import { injectSpeedInsights } from '@vercel/speed-insights';

// Initialize Vercel Speed Insights
injectSpeedInsights();

// Existing application logic
// 1. DYNAMIC COUNTER LOGIC
// This makes the Round ID change every 5 seconds to look "Live"
setInterval(() => {
    let roundNum = parseInt(document.getElementById('round-val').innerText);
    document.getElementById('round-val').innerText = roundNum + 1;
    
    // Randomly update "accessible" matches to simulate analysis
    const randomCount = Math.floor(Math.random() * 4);
    document.getElementById('eng-count').innerText = randomCount + " accessible";
}, 10000);

// 2. TOGGLE ACCORDION LOGIC
// This makes the league bars open and close when clicked
window.toggleLeague = function(id) {
    const panel = document.getElementById('details-' + id);
    const isVisible = panel.style.display === 'block';
    
    // Close all first
    document.querySelectorAll('.details-panel').forEach(p => p.style.display = 'none');
    
    // Toggle the clicked one
    panel.style.display = isVisible ? 'none' : 'block';
};

// 3. MARKET SWITCHER
window.switchMarket = function(market) {
    alert("Switching analysis to: " + market);
    // In a real app, this would refresh the data for that specific market
};
