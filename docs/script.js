// Initialize all functionality on page load
document.addEventListener('DOMContentLoaded', function() {
    // ===== Mobile Hamburger Menu =====
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            sidebar.classList.toggle('open');
        });
    }

    // Close sidebar when clicking a link on mobile
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('open');
                if (hamburger) {
                    hamburger.classList.remove('active');
                }
            }
        });
    });

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 768) {
            const isClickInsideSidebar = sidebar.contains(event.target);
            const isClickOnHamburger = hamburger && hamburger.contains(event.target);

            if (!isClickInsideSidebar && !isClickOnHamburger && sidebar.classList.contains('open')) {
                sidebar.classList.remove('open');
                if (hamburger) {
                    hamburger.classList.remove('active');
                }
            }
        }
    });

    // ===== Smooth Scrolling with Offset =====
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Only handle internal links
            if (href && href.startsWith('#')) {
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    e.preventDefault();

                    // Calculate offset (height of mobile header if visible)
                    const offset = window.innerWidth <= 768 ? 80 : 20;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });

                    // Update URL without jumping
                    history.pushState(null, null, href);
                }
            }
        });
    });

    // ===== Scroll Spy - Active Menu Item Highlighting =====
    const sections = document.querySelectorAll('.doc-section');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');

                    // Remove active class from all links
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                    });

                    // Add active class to current section link
                    const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
                    if (activeLink) {
                        activeLink.classList.add('active');
                    }
                }
            });
        },
        {
            rootMargin: '-100px 0px -66%',
            threshold: 0
        }
    );

    sections.forEach(section => {
        observer.observe(section);
    });

    // ===== Collapsible Example Sections =====
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

    // ===== Expand/Collapse All Examples =====
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

    // ===== Initialize Prism.js Syntax Highlighting =====
    if (typeof Prism !== 'undefined') {
        Prism.highlightAll();
    }

    // ===== Set Active Link on Page Load =====
    // Check if there's a hash in the URL on load
    if (window.location.hash) {
        const hash = window.location.hash;
        const activeLink = document.querySelector(`.nav-link[href="${hash}"]`);
        if (activeLink) {
            navLinks.forEach(link => link.classList.remove('active'));
            activeLink.classList.add('active');
        }
    } else {
        // Set first link as active by default
        const firstLink = document.querySelector('.nav-link');
        if (firstLink) {
            firstLink.classList.add('active');
        }
    }
});
