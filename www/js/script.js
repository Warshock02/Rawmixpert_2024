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
            currentZoom = Math.max(0.5, currentZoom + delta * 0.01); // You can adjust the sensitivity here
            applyZoom();
        }
    }

    function applyZoom() {
        container.style.transform = `scale(${container.currentZoom})`;
    }

    // Function to handle tab interactions
    function showTab(tabId) {
        for (let i = 0; i < tabContents.length; i++) {
            if (tabContents[i].id === `tabContent${tabId.slice(3)}`) {
                tabContents[i].style.display = "block";
                tabContents[i].classList.add('zoomable'); // Apply zoomable class to show zoom and scroll
            } else {
                tabContents[i].style.display = "none";
                tabContents[i].classList.remove('zoomable'); // Remove zoomable class to hide zoom and scroll
            }
        }
    }
    // function showTab(tabId) {
    //     isInteractingWithTabs = true;

    //     // Hide all tab contents
    //     var tabContents = document.getElementsByClassName("tab-content");
    //     for (var i = 0; i < tabContents.length; i++) {
    //         tabContents[i].style.display = "none";
    //     }

    //     // Show the selected tab content
    //     var selectedTabContent = document.getElementById("tabContent" + tabId.slice(3));
    //     if (selectedTabContent) {
    //         selectedTabContent.style.display = "block";
    //     }

    //     // After handling tab interactions, set the flag back to false
    //     isInteractingWithTabs = false;
    // }
}