
// Aggressive custom script to override all Framer-injected branding
(function() {
    // Configuration
    const replacements = [
        {from: /Lander\s*Studio/gi, to: 'GetWebsite.today'},
        {from: /Lander/gi, to: 'GetWebsite.today'},
        {from: /The\s*Landing\s*Page\s*Experts/gi, to: 'Professional Sites, Delivered Quickly with Seamless Execution'},
        {from: /hello@lander\.studio/gi, to: 'hello@getwebsite.today'}
    ];
    
    // Function to replace text in all text nodes
    function replaceTextInNode(node) {
        if (node.nodeType === 3) { // Text node
            let newText = node.nodeValue;
            let changed = false;
            
            replacements.forEach(({from, to}) => {
                if (from.test(newText)) {
                    newText = newText.replace(from, to);
                    changed = true;
                }
            });
            
            if (changed) {
                node.nodeValue = newText;
            }
        } else if (node.nodeType === 1) { // Element node
            // Handle attributes that might contain text
            if (node.hasAttributes()) {
                const attrs = ['title', 'alt', 'placeholder', 'aria-label'];
                attrs.forEach(attr => {
                    if (node.hasAttribute(attr)) {
                        let attrValue = node.getAttribute(attr);
                        let changed = false;
                        
                        replacements.forEach(({from, to}) => {
                            if (from.test(attrValue)) {
                                attrValue = attrValue.replace(from, to);
                                changed = true;
                            }
                        });
                        
                        if (changed) {
                            node.setAttribute(attr, attrValue);
                        }
                    }
                });
            }
            
            // Replace logo src if it's the old one
            if (node.tagName === 'IMG' && node.src && node.src.includes('9Eh99vpaBV13pgsHc3AgCr5CG0g')) {
                node.src = './new-assets/getwebsite-logo.png';
            }
            
            // Process children recursively
            Array.from(node.childNodes).forEach(replaceTextInNode);
        }
    }
    
    // Function to process the entire document
    function processDocument() {
        // Process the document body
        replaceTextInNode(document.body);
        
        // Also process the head for title and meta tags
        if (document.head) {
            Array.from(document.head.childNodes).forEach(node => {
                if (node.tagName === 'TITLE' || 
                    (node.tagName === 'META' && 
                     (node.getAttribute('name') === 'description' || 
                      node.getAttribute('property') && node.getAttribute('property').includes('title') ||
                      node.getAttribute('property') && node.getAttribute('property').includes('description')))) {
                    replaceTextInNode(node);
                }
            });
        }
    }
    
    // Run immediately
    processDocument();
    
    // Run again after a delay to catch any dynamically loaded content
    setTimeout(processDocument, 500);
    setTimeout(processDocument, 1500);
    setTimeout(processDocument, 3000);
    
    // Set up a MutationObserver to watch for DOM changes
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            // Process added nodes
            mutation.addedNodes.forEach(replaceTextInNode);
            
            // Also check for text changes in the target
            if (mutation.type === 'characterData') {
                replaceTextInNode(mutation.target);
            }
        });
    });
    
    // Start observing the document with the configured parameters
    observer.observe(document.body, { 
        childList: true, 
        subtree: true, 
        characterData: true,
        attributes: true,
        attributeFilter: ['title', 'alt', 'placeholder', 'aria-label']
    });
    
    // Also inject CSS to force any hardcoded text via CSS content property
    const style = document.createElement('style');
    style.textContent = ;
    document.head.appendChild(style);
    
    console.log('Aggressive branding override active');
})();
