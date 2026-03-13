// Mobile PWA Install Fix
// Add this script at the END of index.html before </body>

document.addEventListener('DOMContentLoaded', () => {
    
    // Check if mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Show install modal after 5 seconds for ALL devices
    setTimeout(() => {
        const modal = document.getElementById("installModal");
        if (modal) {
            modal.style.display = "flex";
            console.log("Install modal shown on", isMobile ? "mobile" : "desktop");
        }
    }, 5000);
    
    // Enhanced install button for mobile
    const installBtn = document.getElementById("installBtn");
    if (installBtn) {
        installBtn.addEventListener("click", () => {
            if (isMobile) {
                // Mobile specific instructions
                if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                    // iOS - Share button > Add to Home Screen
                    alert("To install: Tap Share button → 'Add to Home Screen'");
                } else {
                    // Android - Chrome menu > Add to Home Screen
                    alert("To install: Tap Chrome menu → 'Add to Home Screen'");
                }
            } else {
                // Desktop - open in new tab
                window.open("https://naipunya.vercel.app", "_blank");
            }
            closeInstallModal();
        });
    }
    
    // Also show install button after scrolling
    let scrollCount = 0;
    window.addEventListener('scroll', () => {
        scrollCount++;
        if (scrollCount === 3) { // After some scrolling
            const modal = document.getElementById("installModal");
            if (modal && modal.style.display !== "flex") {
                modal.style.display = "flex";
            }
        }
    });
});

function closeInstallModal() {
    const modal = document.getElementById("installModal");
    if (modal) {
        modal.style.display = "none";
    }
}
