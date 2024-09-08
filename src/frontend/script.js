document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('calculatorForm');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const activity = document.getElementById('activity').value;
        const amount = document.getElementById('amount').value;
        const unit = document.getElementById('unit').value;

        try {
            const response = await fetch('/api/calculate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ activity, amount, unit }),
            });

            if (!response.ok) {
                throw new Error('Calculation request failed');
            }

            const data = await response.json();
            resultDiv.textContent = `Estimated CO2 emission: ${data.co2Emission} kg`;
        } catch (error) {
            resultDiv.textContent = `Error: ${error.message}`;
        }
    });
});