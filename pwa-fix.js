// PWA Install Modal Fix
// Add this script to index.html to ensure modal appears after 5 seconds

// Universal fallback - always show modal after 5 seconds
setTimeout(() => {
    const modal = document.getElementById("installModal");
    if (modal) {
        modal.style.display = "flex";
        console.log("Install modal shown via fallback");
    }
}, 5000);

// Enhanced install button handler
document.getElementById("installBtn")?.addEventListener("click", async () => {
    if (deferredPrompt) {
        // PWA supported
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === "accepted") {
            console.log("PWA installed");
        }
        deferredPrompt = null;
        closeInstallModal();
    } else {
        // Fallback - open app in new tab
        window.open("https://naipunya.vercel.app", "_blank");
        closeInstallModal();
    }
});

function closeInstallModal() {
    const modal = document.getElementById("installModal");
    if (modal) {
        modal.style.display = "none";
    }
}
