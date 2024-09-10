document.addEventListener('DOMContentLoaded', () => {
    const icons = [
        { id: 'icon1', icon: 'fa-car', name: 'Car' },
        { id: 'icon2', icon: 'fa-bicycle', name: 'Bicycle' },
        { id: 'icon3', icon: 'fa-bus', name: 'Bus' },
        { id: 'icon4', icon: 'fa-train', name: 'Train' },
        { id: 'icon5', icon: 'fa-plane', name: 'Plane' },
        { id: 'icon6', icon: 'fa-ship', name: 'Ship' },
        { id: 'icon7', icon: 'fa-motorcycle', name: 'Motorcycle' },
        { id: 'icon8', icon: 'fa-subway', name: 'Subway' }
    ];

    const leftSide = document.getElementById('left-side');
    const rightSide = document.getElementById('right-side');
    const resetButton = document.getElementById('reset-button');
    const clapSound = document.getElementById('clap-sound');

    // Drag and drop functions
    let dragged;

    document.querySelectorAll('.draggable').forEach(item => {
        item.addEventListener('dragstart', function (e) {
            dragged = e.target;
        });
    });

    document.querySelectorAll('.drop-target').forEach(target => {
        target.addEventListener('dragover', function (e) {
            e.preventDefault();
        });

        target.addEventListener('drop', function (e) {
            e.preventDefault();
            if (dragged.getAttribute('data-icon') === this.getAttribute('data-icon')) {
                this.appendChild(dragged);
                dragged.setAttribute('draggable', 'false');
                checkGameOver();
            } else {
                alert('Wrong selection! Try again.');
            }
        });
    });

    function shuffleIcons() {
        // Shuffle icons array and take only 5 random icons for the right side
        const shuffledIcons = icons.sort(() => Math.random() - 0.5).slice(0, 5);

        rightSide.innerHTML = ''; // Clear the right side
        shuffledIcons.forEach(icon => {
            const div = document.createElement('div');
            div.className = 'drop-target';
            div.setAttribute('data-icon', icon.icon);
            div.innerHTML = `<i class="fas ${icon.icon}"></i>`;
            rightSide.appendChild(div);
        });

        // Re-attach drop event listeners to new right side icons
        document.querySelectorAll('.drop-target').forEach(target => {
            target.addEventListener('dragover', function (e) {
                e.preventDefault();
            });

            target.addEventListener('drop', function (e) {
                e.preventDefault();
                if (dragged.getAttribute('data-icon') === this.getAttribute('data-icon')) {
                    this.appendChild(dragged);
                    dragged.setAttribute('draggable', 'false');
                    checkGameOver();
                } else {
                    alert('Wrong selection! Try again.');
                }
            });
        });
    }

    function checkGameOver() {
        const allDraggableItems = document.querySelectorAll('.draggable');
        const matchedItems = Array.from(allDraggableItems).filter(item => item.parentElement.classList.contains('drop-target'));

        if (matchedItems.length === 5) {
            clapSound.play();
            setTimeout(() => {
                alert('Congratulations! You matched all the icons!');
                window.location.reload(); // Automatically refresh the game
            }, 500);
        }
    }

    resetButton.addEventListener('click', () => {
        // Reset draggable items to their original positions
        leftSide.querySelectorAll('.draggable').forEach(item => {
            leftSide.appendChild(item);
            item.setAttribute('draggable', 'true');
        });

        shuffleIcons(); // Shuffle the right side icons again
    });

    // Initial shuffle on page load
    shuffleIcons();
});
