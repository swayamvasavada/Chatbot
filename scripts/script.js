const chatbot_logo = document.getElementById('chatbot-img');
const chatbot = document.getElementById('chatbot');
const user_option = document.getElementById('user-selection');
const selected_option = document.getElementById('selected-option');


function chatbot_Open() {
    chatbot.style.display = 'block';
    chatbot_logo.style.display = 'none';
}

function chat_option(e) {
    const option_1 = document.getElementById('option-1');
    const option_2 = document.getElementById('option-2');


    if (e.target.id == 'option-1') {
        user_option.style.display = 'none';
        selected_option.style.display = 'inline';
        chatbot_close();

    }

    else {
        selected_option.innerText = 'I need a help in a problem';
        user_option.style.display = 'none';
        selected_option.style.display = 'inline';
        chat_option_next();
    }
}

function chat_option_next() {
    const bot3message = document.getElementById('botmesssage-3');
    bot3message.style.display = 'block';
}

user_option.addEventListener('click', chat_option);
chatbot_logo.addEventListener('click', chatbot_Open);
