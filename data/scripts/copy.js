const textToCopy = "miahenrichsmeyer@gmail.com";

// Das Div, auf das geklickt wird
const copyDiv = document.getElementsByClassName('js-copy')[0];

// Event Listener für den Klick
copyDiv.addEventListener('click', function() {
    // Erstellen eines unsichtbaren Textfeldes, um den Text zu kopieren
    const textArea = document.createElement('textarea');
    textArea.value = textToCopy;
    document.body.appendChild(textArea);

    // Text auswählen und kopieren
    textArea.select();
    textArea.setSelectionRange(0, 99999); // Für mobile Geräte

    // Kopieren in die Zwischenablage
    document.execCommand('copy');

    // Entfernen des Textfeldes
    document.body.removeChild(textArea);

    // Bestätigung (optional, z.B. durch eine kurze Nachricht)
    alert("Text wurde in die Zwischenablage kopiert!");
});