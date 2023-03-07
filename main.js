function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var matricula = document.getElementById("matricula").value;
    var telefono = document.getElementById("telefono").value;
    var email = document.getElementById("email").value;

    var regexLetras = /^[a-zA-Z\s]*$/; // Sólo para letras y espacio.
    var regexMatricula = /^\d{4}-\d{5}$/; // formato 0000-00000
    var regexTelefono = /^\(\d{3}\)-\d{3}-\d{4}$/; // formato (809)-000-0000
    var regexEmail = /\S+@\S+\.\S+/; // Formato para Email Valido

    // Validar los campos
    if (!regexLetras.test(nombre)) {
      alert("El nombre solo debe contener letras y espacios");
      return false;
    }
    if (!regexLetras.test(apellidos)) {
      alert("Los apellidos solo deben contener letras y espacios");
      return false;
    }
    if (!regexMatricula.test(matricula)) {
      alert("La matrícula debe tener el formato ####-####");
      return false;
    }
    if (!regexTelefono.test(telefono)) {
      alert("El teléfono debe tener el formato (###)-###-####");
      return false;
    }
    if (!regexEmail.test(email)) {
      alert("Por favor, introduce un correo electrónico válido");
      return false;
    }

    // Si todos los campos son válidos, se envia el formulario.
    alert("Formulario enviado correctamente");
    return true;
  }