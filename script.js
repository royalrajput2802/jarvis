let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1 
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day=new Date()
    let Hours=day.getHours()
    if(Hours>0 && Hours<12){
        speak("good morning , have a great day sir")
    }
    else if(Hours>=12 && Hours <16){ 
        speak("good afternoon sir")
    }
    else{
        speak("good evening sir")
    }
}
window.addEventListener('load',()=>{
    wishMe()
})
let SpeechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition
let recognition =new SpeechRecognition()
recognition.onresult=(event)=>{
    let currentindex=event.resultndex
   let transcript= event.results[currentindex][0].transcript
   content.innerText=transcript
    takeCommand(transcript.toLowerCase)
} 

btn.addEventListener("click",()=>{
   recognition.start()
   btn.style.display="none"
   voice.style.display="block"
})
function takeCommand(message){
     btn.style.display="flex"
      voice.style.display="none"
    if(message.include("hello")|| message.include("hey")){
        speak("hello sir,how can i help you?")
    }
    else if(message.include("who are you")){
        speak("i am jarvis ,created by rahul sir")
    }
    else if(message.include("open youtube")){
        speak("opening youtube")
        window.open("https://www.youtube.com/","_blank")
    }
    else if(message.include("open google")){
        speak("opening google")
        window.open("https://www.google.com/","_blank")
    }
    else if(message.include("open facebook")){
        speak("opening facebook")
        window.open("https://www.facebook.com/","_blank")
    }
    else if(message.include("open instagram")){
        speak("opening instagaram")
        window.open("https://www.instagram.com/","_blank")
    }
     else if(message.include("time")){
        let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric",second:"numeric"})
        speak(time)
        }
    else if(message.include("date")){
            let time=new Date().toLocaleString(undefined,{day:"numeric",month:"short",year:"numeric"})
            speak(date)
            }
    else{
        speak('this what i found on internet regarding ${message.replace("jarvis"."")}')
        window.open('https//www.google.com/search?q=${message}')
    }

}
 