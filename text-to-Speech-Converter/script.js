let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector('select');
window.speechSynthesis.onvoiceschanged = ()  =>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[10];

    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

let button = document.querySelector('button');
button.addEventListener('click',() => {
    speech.text = document.querySelector('textarea').value;
    window.speechSynthesis.speak(speech);
});

voiceSelect.addEventListener('change',()=>{
    speech.voice = voices[voiceSelect.value];
});