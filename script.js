const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = "en-US";

const btn = document.querySelector("#btn");

function speak(text) {
    const voice = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(voice);
}

function handleCommands(command) {
    if (command.includes("open youtube")) {
        speak("Opening YouTube");
        window.open("https://www.youtube.com", "_blank");

    } else if (command.includes("open instagram")) {
        speak("Opening Instagram");
        window.open("https://www.instagram.com", "_blank");

    } else if (command.includes("open google")) {
        speak("Opening Google");
        window.open("https://www.google.com", "_blank");

    } else if (command.includes("open facebook")) {
        speak("Opening Facebook");
        window.open("https://www.facebook.com", "_blank");

    } else if (command.includes("open github")) {
        speak("Opening GitHub");
        window.open("https://www.github.com", "_blank");

    } else if (command.includes("open linkedin")) {
        speak("Opening LinkedIn");
        window.open("https://www.linkedin.com", "_blank");

    } else if (command.includes("open whatsapp")) {
        speak("Opening WhatsApp Web");
        window.open("https://web.whatsapp.com", "_blank");

    } else {
        speak("Sorry, I did not understand the command");
    }
}

btn.addEventListener("click", () => {
    speak("Hello Rohit, how can I help you");

    setTimeout(() => {
        recognition.start();
    }, 2000);
});

recognition.onresult = (event) => {
    const command = event.results[0][0].transcript.toLowerCase();
    console.log("Command:", command);
    handleCommands(command);
};

// Restart recognition after it ends
recognition.onend = () => {
    recognition.start();
};
