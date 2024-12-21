document.getElementById('getResultBtn').addEventListener('click', function() {
    // Collect answers
    const selectedColor = document.querySelector('input[name="color"]:checked');
    const selectedAccessory = document.querySelector('input[name="accessory"]:checked');
    const selectedFeel = document.querySelector('input[name="feel"]:checked');
    const selectedLighting = document.querySelector('input[name="lighting"]:checked');
    const selectedFurniture = document.querySelector('input[name="furniture"]:checked');

    // Check if all questions are answered
    if (!selectedColor || !selectedAccessory || !selectedFeel || !selectedLighting || !selectedFurniture) {
        alert('Please answer all questions to get your dorm style result.');
        return;
    }

    // Count the number of selected styles
    const answers = [
        selectedColor.value,
        selectedAccessory.value,
        selectedFeel.value,
        selectedLighting.value,
        selectedFurniture.value
    ];

    const styleCount = {
        'Boho Chic': 0,
        'Minimalist': 0,
        'Vintage Vibes': 0,
        'Modern': 0
    };

    answers.forEach(answer => {
        styleCount[answer]++;
    });

    // Determine the dorm style with the most answers
    let maxStyle = null;
    let maxCount = 0;
    for (const style in styleCount) {
        if (styleCount[style] > maxCount) {
            maxCount = styleCount[style];
            maxStyle = style;
        }
    }

    // Display the result
    const resultDiv = document.getElementById('quizResult');
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
        <h3>Your Dorm Style: ${maxStyle}</h3>
        <p>Your perfect dorm style is <strong>${maxStyle}</strong>! Consider adding these decor elements:
        ${maxStyle === 'Boho Chic' ? 'tapestries, plants, and cozy rugs' :
        maxStyle === 'Minimalist' ? 'clean lines, neutral colors, and sleek storage solutions' :
        maxStyle === 'Vintage Vibes' ? 'fairy lights, retro posters, and soft pastel tones' :
        'modern furniture, bold artwork, and tech gadgets'}.</p>
    `;

    // Play the result sound
    const resultSound = document.getElementById('resultSound');
    resultSound.play();
});
