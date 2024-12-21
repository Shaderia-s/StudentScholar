document.addEventListener('DOMContentLoaded', () => {
    const addEventButton = document.getElementById('addEventButton');
    const calendarGrid = document.querySelector('.calendar-grid');
    const toggleViewButton = document.getElementById('toggleViewButton'); // Use the existing button from HTML

    // Generate calendar for a 30-day month
    for (let day = 1; day <= 30; day++) {
        const dayCell = document.createElement('div');
        dayCell.className = 'day';
        dayCell.innerHTML = `<span class="date">${day}</span>`;
        calendarGrid.appendChild(dayCell);
    }

    // Set initial view to weekly
    calendarGrid.classList.add('weekly-view');
    toggleViewButton.textContent = 'Switch to Monthly View';

    const dayCells = calendarGrid.querySelectorAll('.day');
    dayCells.forEach((day, index) => {
        day.style.display = index < 7 ? 'block' : 'none'; // Show only the first 7 days by default
    });

    // Add Event Functionality
    addEventButton.addEventListener('click', () => {
        const eventDate = parseInt(document.getElementById('eventDate').value, 10);
        const eventName = document.getElementById('eventName').value.trim();
        const eventImageInput = document.getElementById('eventImage');

        if (eventDate && eventName) {
            // Find the dayCell based on the `span.date` text content
            const dayCell = Array.from(calendarGrid.children).find((cell) => {
                const dateSpan = cell.querySelector('.date');
                return dateSpan && parseInt(dateSpan.textContent, 10) === eventDate;
            });

            if (dayCell) {
                const eventDiv = document.createElement('div');
                eventDiv.className = 'event';

                // Handle Image Upload
                if (eventImageInput.files && eventImageInput.files[0]) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        const img = document.createElement('img');
                        img.src = e.target.result;
                        img.alt = eventName;
                        img.style.width = '50px'; // Adjust the size of the image
                        img.style.height = '50px';
                        img.style.marginRight = '10px';
                        eventDiv.appendChild(img);
                    };
                    reader.readAsDataURL(eventImageInput.files[0]);
                }

                // Add Event Name and Delete Button
                eventDiv.innerHTML += `
                    ${eventName} <button class="delete-event">x</button>
                `;
                dayCell.appendChild(eventDiv);

                // Add Delete Event Functionality
                eventDiv.querySelector('.delete-event').addEventListener('click', () => {
                    eventDiv.remove();
                });

                // Add Cross-Out Functionality
                eventDiv.addEventListener('click', (e) => {
                    if (!e.target.classList.contains('delete-event')) {
                        eventDiv.classList.toggle('crossed');
                    }
                });

                // Clear Inputs
                document.getElementById('eventDate').value = '';
                document.getElementById('eventName').value = '';
                document.getElementById('eventImage').value = '';
            } else {
                alert('Invalid date. Please enter a date that exists in the calendar.');
            }
        } else {
            alert('Please provide a valid date, event name, and optionally an image.');
        }
    });

    // Toggle View Functionality
    toggleViewButton.addEventListener('click', () => {
        const isWeeklyView = calendarGrid.classList.toggle('weekly-view');
        toggleViewButton.textContent = isWeeklyView ? 'Switch to Monthly View' : 'Switch to Weekly View';

        const dayCells = calendarGrid.querySelectorAll('.day');
        dayCells.forEach((day, index) => {
            if (isWeeklyView) {
                day.style.display = index < 7 ? 'block' : 'none'; // Show only the first 7 days
            } else {
                day.style.display = 'block'; // Show all days
            }
        });
    });
});
