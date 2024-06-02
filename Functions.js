//function to increase the counter in carbon footprint banner

$w.onReady(function () {
    const counterElement = $w('#text38');
    const endValue = 98.63; // Change this to your desired end value
    const animationDuration = 4000; // Animation duration in milliseconds

    const startValue = 0.00;
    const valueDifference = endValue - startValue;
    const framesPerSecond = 60; // Smooth animation
    const frameIncrement = valueDifference / (animationDuration / 1000 * framesPerSecond); // Calculate increment per frame

    let currentValue = startValue;

    function startCounter() {
        animateCounter();
    }

    function animateCounter() {
        if (currentValue < endValue) {
            currentValue += frameIncrement;
            counterElement.text = currentValue.toFixed(2); // Format as 0.00
            setTimeout(animateCounter, 1000 / framesPerSecond);
        } else {
            counterElement.text = endValue.toFixed(2); // Ensure the final value is precise
        }
    }

    // Start the counter animation when the element is shown on the screen
    counterElement.onViewportEnter(startCounter);
});
