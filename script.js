document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert(`Vielen Dank, ${name}! Deine Nachricht wurde erfolgreich gesendet.`);
        document.getElementById("contactForm").reset();
    } else {
        alert("Bitte fülle alle Felder aus.");
    }
});
