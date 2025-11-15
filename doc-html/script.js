// Terminal outputs data
const terminalOutputs = {
    install: `$ npm -g install gimme-stat
$ cd /home/your_git_project_name
$ gimme-stat`,

    example1: `SomeMan1            ███████████████░░░░░░░░░░░░░░░░░░░░░░░░░ 38.34%
├── cs              ███████████████████░░░░░░░░░░░░░░░░░░░░░ 47.51%
├── other           ██████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 26.64%
├── js              ██████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 16.88%
├── scss            ██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 6.41%
├── sql             ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 1.46%
└── json            ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 1.10%
SomeMan2            ██████████████░░░░░░░░░░░░░░░░░░░░░░░░░░ 35.91%
├── cs              ███████████████████████░░░░░░░░░░░░░░░░░ 57.25%
├── other           ██████████████░░░░░░░░░░░░░░░░░░░░░░░░░░ 36.08%
├── js              ██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 5.18%
├── scss            ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0.64%
├── json            ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0.50%
├── html            ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0.18%
└── sql             ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0.18%
SomeMan3            █████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 22.84%
├── cs              ██████████████████████░░░░░░░░░░░░░░░░░░ 54.38%
├── other           ██████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 25.49%
├── js              ██████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 15.45%
├── sql             █░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 2.40%
├── json            ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 1.73%
├── scss            ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0.45%
└── html            ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0.11%
Ilya Mokin          █░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 2.90%
├── cs              █████████████████████████████████████░░░ 92.11%
├── other           ██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 6.14%
└── js              ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 1.75%`,

    example2: `    Legend:
    + - insertions
    - - deletions

SomeMan1       [-----------------+++++++++++            ] 71.26%
SomeMan2       [-------++++                             ] 28.74%`,

    example3: `SomeMan1       ███████████████░░░░░░░░░░░░░░░░░░░░░░░░░ 38.34%
SomeMan2       ██████████████░░░░░░░░░░░░░░░░░░░░░░░░░░ 35.91%
SomeMan3       █████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 22.84%
Ilya Mokin     █░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 2.90%

                                                      commits|changes
Thu Nov 23 2017 ██████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 4   | 119
Fri Nov 24 2017 ████████████████░░░░░░░░░░░░░░░░░░░░░░░░ 7   | 290
Sat Nov 25 2017 ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0   | 0
Sun Nov 26 2017 ██████████████████░░░░░░░░░░░░░░░░░░░░░░ 6   | 330
Mon Nov 27 2017 ████████████████████████████░░░░░░░░░░░░ 8   | 517
Tue Nov 28 2017 ██████████████░░░░░░░░░░░░░░░░░░░░░░░░░░ 5   | 265
Wed Nov 29 2017 ████████████████████████████████████████ 20  | 741`,

    example4: `                                                      commits|changes
Thu Nov 23 2017 ██████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 4   | 119
Fri Nov 24 2017 ████████████████░░░░░░░░░░░░░░░░░░░░░░░░ 7   | 290
Sat Nov 25 2017 ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0   | 0
Sun Nov 26 2017 ██████████████████░░░░░░░░░░░░░░░░░░░░░░ 6   | 330
Mon Nov 27 2017 ████████████████████████████░░░░░░░░░░░░ 8   | 517
Tue Nov 28 2017 ██████████████░░░░░░░░░░░░░░░░░░░░░░░░░░ 5   | 265
Wed Nov 29 2017 ████████████████████████████████████████ 20  | 741`,

    example5: `┌──────────────┬─────────┬────────────┬───────────┬──────────────┐
│ Author       │ Commits │ Insertions │ Deletions │ % of changes │
├──────────────┼─────────┼────────────┼───────────┼──────────────┤
│ SomeMan      │ 69      │ 2237       │ 1110      │ 36           │
├──────────────┼─────────┼────────────┼───────────┼──────────────┤
│ SomeMan1     │ 92      │ 2335       │ 905       │ 35           │
├──────────────┼─────────┼────────────┼───────────┼──────────────┤
│ SomeMan2     │ 42      │ 1389       │ 801       │ 24           │
├──────────────┼─────────┼────────────┼───────────┼──────────────┤
│ SomeMan3     │ 5       │ 209        │ 127       │ 4            │
├──────────────┼─────────┼────────────┼───────────┼──────────────┤
│ Ilya Mokin   │ 4       │ 193        │ 35        │ 3            │
└──────────────┴─────────┴────────────┴───────────┴──────────────┘`,

    reportRepos: `Repositories:
home/rep/project1
home/rep/project2`,

    reportShort: `SomeMan1       ███████████████░░░░░░░░░░░░░░░░░░░░░░░░░ 38.34%
SomeMan2       ██████████████░░░░░░░░░░░░░░░░░░░░░░░░░░ 35.91%
SomeMan3       █████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 22.84%
Ilya Mokin     █░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 2.90%`,

    reportDetailed: `SomeMan1            ███████████████░░░░░░░░░░░░░░░░░░░░░░░░░ 38.34%
├── cs              ███████████████████░░░░░░░░░░░░░░░░░░░░░ 47.51%
├── other           ██████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 26.64%
├── js              ██████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 16.88%
├── scss            ██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 6.41%
├── sql             ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 1.46%
└── json            ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 1.10%
SomeMan2            ██████████████░░░░░░░░░░░░░░░░░░░░░░░░░░ 35.91%
├── cs              ███████████████████████░░░░░░░░░░░░░░░░░ 57.25%
├── other           ██████████████░░░░░░░░░░░░░░░░░░░░░░░░░░ 36.08%
├── js              ██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 5.18%
├── scss            ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0.64%
├── json            ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0.50%
├── html            ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0.18%
└── sql             ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0.18%
SomeMan3            █████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 22.84%
├── cs              ██████████████████████░░░░░░░░░░░░░░░░░░ 54.38%
├── other           ██████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 25.49%
├── js              ██████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 15.45%
├── sql             █░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 2.40%
├── json            ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 1.73%
├── scss            ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0.45%
└── html            ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0.11%
Ilya Mokin          █░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 2.90%
├── cs              █████████████████████████████████████░░░ 92.11%
├── other           ██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 6.14%
└── js              ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 1.75%`,

    reportTable: `┌──────────────┬─────────┬────────────┬───────────┬──────────────┐
│ Author       │ Commits │ Insertions │ Deletions │ % of changes │
├──────────────┼─────────┼────────────┼───────────┼──────────────┤
│ SomeMan      │ 69      │ 2237       │ 1110      │ 36           │
├──────────────┼─────────┼────────────┼───────────┼──────────────┤
│ SomeMan1     │ 92      │ 2335       │ 905       │ 35           │
├──────────────┼─────────┼────────────┼───────────┼──────────────┤
│ SomeMan2     │ 42      │ 1389       │ 801       │ 24           │
├──────────────┼─────────┼────────────┼───────────┼──────────────┤
│ SomeMan3     │ 5       │ 209        │ 127       │ 4            │
├──────────────┼─────────┼────────────┼───────────┼──────────────┤
│ Ilya Mokin   │ 4       │ 193        │ 35        │ 3            │
└──────────────┴─────────┴────────────┴───────────┴──────────────┘`,

    reportDaily: `                                                      commits|changes
Thu Nov 23 2017 ██████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 4   | 119
Fri Nov 24 2017 ████████████████░░░░░░░░░░░░░░░░░░░░░░░░ 7   | 290
Sat Nov 25 2017 ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0   | 0
Sun Nov 26 2017 ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0   | 0
Mon Nov 27 2017 ██████████████████░░░░░░░░░░░░░░░░░░░░░░ 6   | 330
Tue Nov 28 2017 ████████████████████████████░░░░░░░░░░░░ 8   | 517
Wed Nov 29 2017 ██████████████░░░░░░░░░░░░░░░░░░░░░░░░░░ 5   | 265
Thu Nov 30 2017 ████████████████████████████████████████ 20  | 741`
};

// Create a terminal instance
function createTerminal(elementId, content) {
    const container = document.getElementById(elementId);
    if (!container) return;

    const term = new Terminal({
        convertEol: true,
        fontFamily: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace',
        fontSize: 13,
        theme: {
            background: '#000000',
            foreground: '#ffffff',
            cursor: '#ffffff',
            cursorAccent: '#000000',
        },
        cursorBlink: false,
        disableStdin: true,
        rows: content.split('\n').length + 1
    });

    term.open(container);
    term.write(content);
}

// Create terminal for collapsible sections
function createCollapsibleTerminal(wrapperId, content) {
    const wrapper = document.querySelector(`#${wrapperId} .terminal-wrapper`);
    if (!wrapper) return;

    const term = new Terminal({
        convertEol: true,
        fontFamily: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace',
        fontSize: 13,
        theme: {
            background: '#000000',
            foreground: '#ffffff',
            cursor: '#ffffff',
            cursorAccent: '#000000',
        },
        cursorBlink: false,
        disableStdin: true,
        rows: content.split('\n').length + 1
    });

    term.open(wrapper);
    term.write(content);
}

// Initialize all terminals on page load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize installation terminal (always visible)
    createTerminal('terminal-install', terminalOutputs.install);

    // Setup collapse/expand functionality
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
                    this.textContent = 'Show Output';
                    this.classList.remove('active');
                } else {
                    // Open
                    targetElement.classList.add('open');
                    this.textContent = 'Hide Output';
                    this.classList.add('active');

                    // Initialize terminal if not already done
                    const wrapper = targetElement.querySelector('.terminal-wrapper');
                    if (wrapper && !wrapper.hasChildNodes()) {
                        const outputKey = targetId.replace('example', 'example')
                            .replace('report-repos', 'reportRepos')
                            .replace('report-short', 'reportShort')
                            .replace('report-detailed', 'reportDetailed')
                            .replace('report-table', 'reportTable')
                            .replace('report-daily', 'reportDaily');

                        if (terminalOutputs[outputKey]) {
                            createCollapsibleTerminal(targetId, terminalOutputs[outputKey]);
                        }
                    }
                }
            }
        });
    });

    // Initialize Prism.js syntax highlighting
    if (typeof Prism !== 'undefined') {
        Prism.highlightAll();
    }
});
