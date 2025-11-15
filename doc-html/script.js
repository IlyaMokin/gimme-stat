// Initialize all functionality on page load
document.addEventListener('DOMContentLoaded', function() {
    // Setup collapse/expand functionality for individual buttons
    const collapseButtons = document.querySelectorAll('.collapse-btn');

    collapseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const isOpen = targetElement.classList.contains('open');

                if (isOpen) {
                    // Close
                    targetElement.classList.remove('open');
                    this.textContent = this.textContent.replace('Hide', 'Show');
                    this.classList.remove('active');
                } else {
                    // Open
                    targetElement.classList.add('open');
                    this.textContent = this.textContent.replace('Show', 'Hide');
                    this.classList.add('active');
                }
            }
        });
    });

    // Setup expand/collapse all functionality
    const expandAllBtn = document.getElementById('expand-all-btn');
    if (expandAllBtn) {
        expandAllBtn.addEventListener('click', function() {
            const isCollapseMode = this.classList.contains('collapse-mode');

            collapseButtons.forEach(button => {
                const targetId = button.getAttribute('data-target');
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    if (isCollapseMode) {
                        // Collapse all
                        targetElement.classList.remove('open');
                        button.textContent = button.textContent.replace('Hide', 'Show');
                        button.classList.remove('active');
                    } else {
                        // Expand all
                        targetElement.classList.add('open');
                        button.textContent = button.textContent.replace('Show', 'Hide');
                        button.classList.add('active');
                    }
                }
            });

            // Toggle button state
            if (isCollapseMode) {
                this.classList.remove('collapse-mode');
                this.textContent = 'Expand All Examples';
            } else {
                this.classList.add('collapse-mode');
                this.textContent = 'Collapse All Examples';
            }
        });
    }

    // Initialize Prism.js syntax highlighting if available
    if (typeof Prism !== 'undefined') {
        Prism.highlightAll();
    }
});
