document.getElementById('generate-btn').addEventListener('click', async () => {
    const inputText = document.getElementById('input-text').value;
    const apiChoice = document.getElementById('api-choice').value;
    const outputText = document.getElementById('output-text');

    // Reset output text
    outputText.textContent = 'Loading...';

    try {
        const response = await fetch('https://your-pterodactyl-server.com/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: inputText, api: apiChoice }),
        });
        
        const data = await response.json();
        outputText.textContent = data.output || 'No output received.';
    } catch (error) {
        console.error(error);
        outputText.textContent = 'Error generating text.';
    }
});
