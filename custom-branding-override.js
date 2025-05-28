
// Custom script to override Framer-injected logo
document.addEventListener('DOMContentLoaded', function() {
    // Function to replace logo
    function replaceLogoAndBranding() {
        // Replace all instances of the old logo
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            if (img.src.includes('9Eh99vpaBV13pgsHc3AgCr5CG0g')) {
                img.src = './new-assets/getwebsite-logo.png';
            }
        });
        
        // Replace any text containing 'Lander' with 'GetWebsite.today'
        const textNodes = document.createTreeWalker(
            document.body, 
            NodeFilter.SHOW_TEXT, 
            null, 
            false
        );
        
        let node;
        while (node = textNodes.nextNode()) {
            if (node.textContent.includes('Lander')) {
                node.textContent = node.textContent.replace(/Lander\s*Studio/g, 'GetWebsite.today');
                node.textContent = node.textContent.replace(/Lander/g, 'GetWebsite.today');
            }
        }
    }
    
    // Run immediately
    replaceLogoAndBranding();
    
    // Also run after a short delay to catch any dynamically loaded content
    setTimeout(replaceLogoAndBranding, 500);
    setTimeout(replaceLogoAndBranding, 1500);
    
    // Set up a MutationObserver to watch for DOM changes
    const observer = new MutationObserver(function(mutations) {
        replaceLogoAndBranding();
    });
    
    // Start observing the document with the configured parameters
    observer.observe(document.body, { childList: true, subtree: true });
});
