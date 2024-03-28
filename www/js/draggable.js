

document.addEventListener('DOMContentLoaded', function () {

    const draggable = document.getElementById("draggable");
    const droppable = document.getElementById("droppable");
    let longPressTimer;


    if (droppable) {

        draggable.addEventListener("touchstart", function (e) {


            longPressTimer = setTimeout(function () {
                e.preventDefault(); // Prevent default touch behavior
                draggable.style.position = "absolute";
                draggable.style.zIndex = "1000";
                console.log("LONG PRESSED!")
                // Calculate the initial position of the draggable element
                const initialX = e.touches[0].clientX - draggable.getBoundingClientRect().left;
                const initialY = e.touches[0].clientY - draggable.getBoundingClientRect().top;

                // Move the draggable element as the user drags
                document.addEventListener("touchmove", function (e) {
                    e.preventDefault(); // Prevent scrolling

                    const x = e.touches[0].clientX - initialX;
                    const y = e.touches[0].clientY - initialY;

                    draggable.style.left = x + "px";
                    draggable.style.top = y + "px";
                });

                // Drop the element when the touch ends
                document.addEventListener("touchend", function () {
                    droppable.appendChild(draggable);
                    draggable.style.position = "static";
                    draggable.style.left = "auto";
                    draggable.style.top = "auto";

                    // Clean up event listeners
                    document.removeEventListener("touchmove", null);
                    document.removeEventListener("touchend", null);
                });
            }, 500); // Adjust the time as needed for the long press duration
        });

        draggable.addEventListener("touchend", function () {
            clearTimeout(longPressTimer);
        });
    }
    //end of with longpress drag and drop



    // let draggingContainer;

    // const dragContainers = document.querySelectorAll('.drag-container');

    // dragContainers.forEach(container => {
    //     container.addEventListener('dragstart', function (e) {
    //         draggingContainer = this;
    //     });

    //     container.addEventListener('dragover', function (e) {
    //         e.preventDefault();
    //     });

    //     container.addEventListener('drop', function (e) {
    //         e.preventDefault();
    //         if (draggingContainer) {
    //             // Move the dragged container to the target tab content
    //             const targetTab = document.querySelector('#tabContent1');
    //             targetTab.appendChild(draggingContainer);

    //             draggingContainer = null;
    //         }
    //     });
    // });
});

// document.addEventListener("DOMContentLoaded", function () {
//     const table1 = document.getElementById("table1");
//     const table2 = document.getElementById("table2");

//     table1.addEventListener("dragstart", e => {
//         const rows = table1.querySelectorAll("tr");
//         let newRowHtml = "";

//         rows.forEach(row => {
//             newRowHtml += row.innerHTML;
//         });

//         e.dataTransfer.setData("text/plain", newRowHtml);
//     });

//     table2.addEventListener("dragover", e => {
//         e.preventDefault();
//     });

//     table2.addEventListener("drop", e => {
//         e.preventDefault();

//         const data = e.dataTransfer.getData("text/plain");
//         const newRow = document.createElement("tr");
//         newRow.innerHTML = data;

//         table2.appendChild(newRow);
//     });
// });


// document.addEventListener('DOMContentLoaded', function () {
//     let draggingTable;

//     const dragTables = document.querySelectorAll('.drag-table');

//     dragTables.forEach(table => {
//         table.addEventListener('dragstart', function (e) {
//             draggingTable = this;
//         });

//         table.addEventListener('dragover', function (e) {
//             e.preventDefault();
//         });

//         table.addEventListener('drop', function (e) {
//             e.preventDefault();
//             if (draggingTable) {
//                 // Clone the dragged table and append it to the target tab content
//                 const newTable = draggingTable.cloneNode(true);
//                 document.querySelector('#tabContent2').appendChild(newTable);

//                 draggingTable = null;
//             }
//         });
//     });
// });


// document.addEventListener('DOMContentLoaded', function () {
//     let draggingRow;

//     // Get the bottom tabs
//     const bottomTabs = document.querySelectorAll('.container-tab .tab');

//     // Get the tab contents
//     const tabContents = document.querySelectorAll('.tab-content');

//     // Get the rows that can be dragged
//     const dragRows = document.querySelectorAll('.drag-table tbody tr');

//     // Add click event listeners to the bottom tabs
//     bottomTabs.forEach(tab => {
//         tab.addEventListener('click', function () {
//             // Hide all tab contents
//             tabContents.forEach(content => {
//                 content.style.display = 'none';
//             });

//             // Show the selected tab content
//             const tabId = this.getAttribute('id');
//             document.querySelector('#' + tabId.replace('tab', 'tabContent')).style.display = 'block';
//         });
//     });

//     // Add drag-and-drop functionality
//     dragRows.forEach(row => {
//         row.addEventListener('dragstart', function (e) {
//             draggingRow = this;
//         });

//         row.addEventListener('dragover', function (e) {
//             e.preventDefault();
//         });

//         row.addEventListener('drop', function (e) {
//             e.preventDefault();
//             if (draggingRow) {
//                 const rowIndex = Array.from(draggingRow.parentElement.children).indexOf(draggingRow);
//                 const sourceTable = document.querySelector('#tabContent1 .drag-table tbody');
//                 const sourceRow = sourceTable.querySelector('tr:nth-child(' + (rowIndex + 1) + ')');

//                 // Clone the dragged row and append it to the target table
//                 const newRow = sourceRow.cloneNode(true);
//                 document.querySelector('#tabContent2 .drag-table tbody').appendChild(newRow);

//                 // Remove the original row from the source table
//                 sourceRow.parentNode.removeChild(sourceRow);

//                 draggingRow = null;
//             }
//         });
//     });
// });


// document.addEventListener('DOMContentLoaded', function () {
//     const tabContents = document.querySelectorAll('.tab-content');

//     tabContents.forEach(content => {
//         const dragTable = content.querySelector('.drag-table');
//         let draggingRow;

//         dragTable.addEventListener('dragstart', function (e) {
//             draggingRow = e.target.closest('tr');
//             e.dataTransfer.setData('text/plain', draggingRow.rowIndex);
//             draggingRow.classList.add('dragging');
//         });

//         dragTable.addEventListener('dragover', function (e) {
//             e.preventDefault();
//             const overRow = e.target.closest('tr');

//             if (draggingRow && overRow && draggingRow !== overRow) {
//                 if (e.clientY - overRow.getBoundingClientRect().top > overRow.offsetHeight / 2) {
//                     overRow.parentNode.insertBefore(draggingRow, overRow.nextSibling);
//                 } else {
//                     overRow.parentNode.insertBefore(draggingRow, overRow);
//                 }
//             }
//         });

//         dragTable.addEventListener('dragend', function () {
//             if (draggingRow) {
//                 draggingRow.classList.remove('dragging');
//                 draggingRow = null;
//             }
//         });
//     });
// });



// document.addEventListener('DOMContentLoaded', function () {
//     const tabContents = document.querySelectorAll('.tab-content');

//     tabContents.forEach(content => {
//         const dragTable = content.querySelector('.drag-table');
//         console.log("DRAGGING!!")
//         let draggingRow;

//         dragTable.addEventListener('dragstart', function (e) {
//             draggingRow = e.target.closest('tr');
//             e.dataTransfer.setData('text/plain', draggingRow.rowIndex);
//             draggingRow.classList.add('dragging');
//         });

//         dragTable.addEventListener('dragover', function (e) {
//             e.preventDefault();
//             const overRow = e.target.closest('tr');

//             if (draggingRow && overRow && draggingRow !== overRow) {
//                 if (e.clientY - overRow.getBoundingClientRect().top > overRow.offsetHeight / 2) {
//                     overRow.parentNode.insertBefore(draggingRow, overRow.nextSibling);
//                 } else {
//                     overRow.parentNode.insertBefore(draggingRow, overRow);
//                 }
//             }
//         });

//         dragTable.addEventListener('dragend', function () {
//             if (draggingRow) {
//                 draggingRow.classList.remove('dragging');
//                 draggingRow = null;
//             }
//         });
//     });
// });
