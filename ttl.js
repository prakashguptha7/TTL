
function checkCompatibility(){
    if(!('speechSynthesis' in window)){
        alert("your browser is not supported upgrade it!!")
    }
};
checkCompatibility();


var voiceoptions = document.getElementById('voiceoptions');
var volumeslider = document.getElementById('volumeslider');
var mytext = document.getElementById('mytext');

function speak(){
    var msg = new SpeechSynthesisUtterance();
    msg.volume = volumeslider.value;
    msg.text = mytext.value;
    window.speechSynthesis.speak(msg);
}