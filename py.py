import speech_recognition as sr
import pyttsx3
import pywhatkit as kit

# Initialize the recognizer and the text-to-speech engine
recognizer = sr.Recognizer()
engine = pyttsx3.init()

# Function to speak text
def speak(text):
    engine.say(text)
    engine.runAndWait()

# Function to listen to audio and convert to text
def listen():
    with sr.Microphone() as source:
        print("Listening...")
        audio = recognizer.listen(source)
        try:
            command = recognizer.recognize_google(audio)
            print(f"You said: {command}")
            return command
        except sr.UnknownValueError:
            speak("Sorry, I didn't catch that.")
            return None
        except sr.RequestError:
            speak("Sorry, my speech service is down.")
            return None

# Main function
def main():
    speak("Hello, I am Jarvis. How can I assist you today?")
    while True:
        command = listen()
        if command:
            command = command.lower()
            
            if 'play' in command:
                song = command.replace('play', '').strip()
                speak(f"Playing {song}")
                kit.playonyt(song)
            elif 'stop' in command:
                speak("Goodbye!")
                break
            else:
                speak("I can help you play music. Just say 'play' followed by the song name.")

if __name__ == "__main__":
    main()
