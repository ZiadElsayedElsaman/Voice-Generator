'use strict';

const speech = new SpeechSynthesisUtterance();
const myText = document.querySelector('textarea');
const Listen_btn = document.querySelector('button');
let voices = [];
const voiceType = document.querySelector('select');

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    voices.forEach(
        (voice, i) => (voiceType.options[i] = new Option(voice.name, i))
    );
};

voiceType.addEventListener('change', function() {
    speech.voice = voices[voiceType.value];
});

Listen_btn.addEventListener('click', function() {
    speech.text = myText.value;
    window.speechSynthesis.speak(speech);
});