function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    
    if (name === "") {
        alert("Por favor, ingrese su nombre.");
        return false;
    }
    
    if (email === "") {
        alert("Por favor, ingrese su correo electrónico.");
        return false;
    } else if (!validateEmail(email)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return false;
    }

    if (message === "") {
        alert("Por favor, ingrese su teléfono.");
        return false;
    }

    if (label === "") {
        alert("Por favor, ingrese el nivel y el curso.");
        return false;
    }

    if (alumn === "") {
        alert("Por favor, ingrese el nombre del alumno.");
        return false;
    }

    alert("Formulario enviado con éxito.");
    return true;
}

function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}
