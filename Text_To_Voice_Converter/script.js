let speech=new SpeechSynthesisUtterance();

let pauseButton = document.getElementById("pauseButton"); // Add a reference to the pause button
let isPaused = false;
let voices=[];
let voiceSelect=document.querySelector("select");
window.speechSynthesis.onvoiceschanged=()=>{
    voices=window.speechSynthesis.getVoices();
    speech.voice=voices[0];
    voices.forEach((voice,i)=>(voiceSelect.options[i]=new Option(voice.name,i)));
}
voiceSelect.addEventListener("change",()=>{
    speech.voice=voices[voiceSelect.value];
});
document.querySelector("button").addEventListener("click",()=>{
    speech.text=document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});

pauseButton.addEventListener("click", () => {
    if (isPaused) {
        window.speechSynthesis.resume();
        isPaused = false;
        pauseButton.textContent = "Pause";
    } else {
        window.speechSynthesis.pause();
        isPaused = true;
        pauseButton.textContent = "Resume";
    }
});