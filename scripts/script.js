const chatbot_logo = document.getElementById('chatbot-img');
const chatbot = document.getElementById('chatbot');
 


function chatbot_Open() {
    chatbot.style.display = 'block';
    chatbot_logo.style.display = 'none';
}


chatbot_logo.addEventListener('click', chatbot_Open);
