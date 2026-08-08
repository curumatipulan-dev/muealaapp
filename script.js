document.addEventListener('DOMContentLoaded', () => {
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    const messagesDiv = document.getElementById('messages');

    function addMessage(text, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.classList.add(sender === 'user' ? 'user-message' : 'ai-message');
        messageElement.textContent = text;
        messagesDiv.appendChild(messageElement);
        messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll to bottom
    }

    sendBtn.addEventListener('click', () => {
        const message = userInput.value.trim();
        if (message) {
            addMessage(message, 'user');
            userInput.value = '';

            // Simulate AI response (in a real app, this would be an API call to a backend AI)
            setTimeout(() => {
                addMessage(`AI: You asked: "${message}". I'm a conceptual AI agent. To truly code, I'd need a powerful backend!`, 'ai');
            }, 1000);
        }
    });

    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendBtn.click();
        }
    });

    // Initial AI greeting
    addMessage("AI: Hello! I'm MuealaApp's web interface. How can I conceptually assist you today?", 'ai');
});