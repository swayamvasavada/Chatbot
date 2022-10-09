const chatbot_logo = document.getElementById('chatbot-img');
const chatbot = document.getElementById('chatbot');
const user_option = document.getElementById('user-selection');
const selected_option = document.getElementById('selected-option');
const optionid_1 = document.getElementById('option-1');
const optionid_2 = document.getElementById('option-2');
const optionid_3 = document.getElementById('option-3');
const optionid_4 = document.getElementById('option-4');
const optionid_5 = document.getElementById('option-5');
const optionid_6 = document.getElementById('option-6');

const chatbot_logo_popup = document.getElementById('chatbot-top');

function chatbot_Open() {
    chatbot.style.display = 'block';
    chatbot_logo.style.display = 'none';
}

function option_id_1() {
    user_option.style.display = 'none';
    selected_option.innerText = 'Chatbot is closing'
    selected_option.style.display = 'inline';
    chatbot_close();
}

function option_id_2() {
    user_option.style.display = 'none';
    selected_option.innerText = 'I have an problem';
    selected_option.style.display = 'inline';
    bot_reply_next();
}

// function chat_option_next () {
//     optionid_3.style.display = 'inline';
//     optionid_4.style.display = 'inline';
//     optionid_5.style.display = 'inline';
//     optionid_6.style.display = 'inline';
// }

function chatbot_close() {
    chatbot.style.display = 'none';
    chatbot_logo.style.display = 'block';
}

// function chat_option(e) {

//     const option_1 = document.getElementById('option-1');
//     const option_2 = document.getElementById('option-2');


//     if (e.target.id == 'option-1') {
//         user_option.style.display = 'none';
//         selected_option.style.display = 'inline';
//         chatbot_close();

//     }

//     else {
//         selected_option.innerText = 'I need a help in a problem';
//         user_option.style.display = 'none';
//         selected_option.style.display = 'inline';
//         chat_option_next();
//     }
// }

function bot_reply_next() {
    const bot3message = document.getElementById('botmessage-3');
    bot3message.style.display = 'block';
    chat_option_next();
}


chatbot_logo_popup.addEventListener('click', chatbot_close);
optionid_1.addEventListener('click', option_id_1);
optionid_2.addEventListener('click', option_id_2);
// optionid_3.addEventListener('click', option_id_3);
// optionid_4.addEventListener('click', option_id_4);
// optionid_5.addEventListener('click', option_id_5);
// optionid_6.addEventListener('click', option_id_6);
// user_option.addEventListener('click', chat_option);
chatbot_logo.addEventListener('click', chatbot_Open);
