// Finger Pinch
const tabContents = document.getElementsByClassName('tab-content');
let isInteractingWithTabs = false;

for (let i = 0; i < tabContents.length; i++) {
    const container = tabContents[i];
    container.currentZoom = 1.0; // Initial zoom level
    container.isInteractingWithTabs = false; // Flag to track tab interaction

    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchmove', handleTouchMove);
    container.addEventListener('touchend', handleTouchEnd);

    function handleTouchStart(event) {
        container.isInteractingWithTabs = true;
        handlePinchStart(event);
    }

    function handleTouchMove(event) {
        if (container.isInteractingWithTabs) {
            handlePinchMove(event);
        }
    }

    function handleTouchEnd() {
        container.isInteractingWithTabs = false;
    }

    function handlePinchStart(event) {
        if (event.touches.length >= 2) {
            const touch1 = event.touches[0];
            const touch2 = event.touches[1];
            initialDistance = Math.hypot(touch1.clientX - touch2.clientX, touch1.clientY - touch2.clientY);
        }
    }

    function handlePinchMove(event) {
        if (!isInteractingWithTabs && event.touches.length >= 2) {
            const touch1 = event.touches[0];
            const touch2 = event.touches[1];
            const currentDistance = Math.hypot(touch1.clientX - touch2.clientX, touch1.clientY - touch2.clientY);
            const delta = currentDistance - initialDistance;

            // Adjust the zoom based on the pinch gesture
            container.currentZoom = Math.max(0.5, container.currentZoom + delta * 0.01); // You can adjust the sensitivity here
            applyZoom();
        }
    }

    function applyZoom() {
        container.style.transform = `scale(${container.currentZoom})`;
    }

    // Function to handle tab interactions
    function showTab(tabId) {
        isInteractingWithTabs = true;

        // Hide all tab contents
        for (let i = 0; i < tabContents.length; i++) {
            tabContents[i].style.display = "none";
            tabContents[i].classList.remove('zoomable'); // Remove zoomable class to hide zoom and scroll
        }

        // Show the selected tab content
        const selectedTabContent = document.getElementById("tabContent" + tabId.slice(3));
        if (selectedTabContent) {
            selectedTabContent.style.display = "block";
            selectedTabContent.classList.add('zoomable'); // Apply zoomable class to show zoom and scroll
        }

        // After handling tab interactions, set the flag back to false
        isInteractingWithTabs = false;
    }

    // Make the showTab function globally accessible
    window.showTab = showTab;
}

// Optionally, you can show the first tab by default
document.getElementsByClassName('tablinks')[0].click();