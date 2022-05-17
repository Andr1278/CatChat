function ChatOpen(){
    document.querySelector('#buttonChat').style.visibility = 'hidden';
    document.querySelector('#Chat').style.visibility = 'visible';
}
numCats = 11;
function getNewCat(){
    document.querySelector('#catImg').src = "Images/Cat"+ Math.round(getRandomNumber(1,numCats)) +".jpg";
    document.getElementById('chatBody').innerHTML = '';
    pushCatMessage();
}

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

let catPhrase = "";
let messages = [];
let i = 0;

function pushCatMessage(){
    messages.push("Meow. ".repeat(getRandomNumber(1,6)));
    let catSaid = document.createElement('div');
    let msg = document.querySelector("#chatBody")
    catSaid.className = "catMessage";
    catSaid.innerHTML = messages[i];
    msg.append(catSaid);
    catPhrase=messages[i];
    document.getElementById('catPhrase').innerHTML;
    i++;
}

function pushUserMessage(){
    let message = document.getElementById("user_input").value;

    messages.push(message);
    let userSaid = document.createElement('div');
    let msg = document.querySelector("#chatBody")
    userSaid.className = "userMessage";
    userSaid.innerHTML = messages[i];
    msg.append(userSaid);
    i++;
}


(function() {
    document.querySelector('input').addEventListener('keydown', function(e) {
        if (e.keyCode === 13) {
            sendMessage();
        }
    });
})();


pushCatMessage();

function sendMessage(){
    pushUserMessage();
    pushCatMessage();
    document.getElementById("user_input").value = "";
}
