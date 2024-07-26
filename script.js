const checkboxes = document.querySelectorAll('.checkbox input');
const sidebar = document.querySelector('.sidebar');
const menuBtn = document.getElementById('menuToggle');
const filters = document.querySelectorAll('.filters .item .checkbox label'); // Select all filter labels

// Function to update checkbox label color based on night mode and checked state
function updateCheckboxLabelColor(checkbox) {
    const label = document.querySelector(`label[for="${checkbox.name}"]`);
    const isNightMode = document.body.classList.contains('night-mode');

    if (checkbox.checked) {
        label.style.color = isNightMode ? '#e0e0e0' : '#1A1E20'; // Contrasting color for night mode
    } else {
        label.style.color = isNightMode ? '#b0b0b0' : '#808487';
    }
}

// Add event listeners to checkboxes
checkboxes.forEach(c => {
    c.addEventListener("change", () => {
        updateCheckboxLabelColor(c);
    });

    // Initialize color based on current state
    updateCheckboxLabelColor(c);
});

// Sidebar toggle functionality
menuBtn.addEventListener('click', () => {
    sidebar.style.left = "0px";
});

document.addEventListener('click', (event) => {
    const isClickInside = sidebar.contains(event.target) || menuBtn.contains(event.target);

    if (!isClickInside) {
        sidebar.style.left = "-172px";
    }
});

// Night mode toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    const nightModeToggle = document.getElementById('nightModeToggle');
    
    // Check if night mode is enabled in local storage
    if (localStorage.getItem('nightMode') === 'enabled') {
        document.body.classList.add('night-mode');
    }
    
    nightModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('night-mode');
        
        // Save the night mode state in local storage
        if (document.body.classList.contains('night-mode')) {
            localStorage.setItem('nightMode', 'enabled');
        } else {
            localStorage.setItem('nightMode', 'disabled');
        }

        // Update the checkbox label colors according to the new mode
        checkboxes.forEach(c => updateCheckboxLabelColor(c));
    });
});
