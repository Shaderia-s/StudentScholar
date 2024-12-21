// JavaScript to handle the checklist behavior
document.addEventListener('DOMContentLoaded', () => {
    const checklistItems = document.querySelectorAll('#movein-checklist li');

    // Loop through each checklist item
    checklistItems.forEach(item => {
        const checkbox = item.querySelector('input[type="checkbox"]');

        // Add event listener for checkbox change
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                // If checked, apply the "checked" class to grey it out and strike through
                item.classList.add('checked');
            } else {
                // If unchecked, remove the "checked" class
                item.classList.remove('checked');
            }
        });
    });
});
