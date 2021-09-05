$("#bodyContainer").hide();
$("body").append(`<h2 class="welcome">Bienvenidos a Diego Rivera</h2>`);
// Información de registro de usuario
let signUpButton = document.getElementById("signUpButton");
signUpButton.onclick = () => {
  $("#signUpButton").hide();
  $("#loginButton").hide();
  signUpSection = document.createElement("div");
  signUpSection.innerHTML = `
  <form id="signUpForm" class="col-xs-12 col-sm-6" action="">
    <fieldset class="formFieldset row">
      <legend class="text-center signUpForm__legend">
        Formulario de contacto
      </legend>
      <input
        class="signUpForm__input col-xs-12 col-sm-12"
        id="inputName"
        type="text"
        name="name"
        placeholder="Nombre y apellido*"
        required
        />
        <input
          class="signUpForm__input col-xs-12 col-sm-12"
          id="inputEmail"
          type="email"
          name="email"
          placeholder="Correo electrónico*"
          required
        />
        <input
          class="signUpForm__input col-xs-12 col-sm-12"
          id="inputMobil"
          type="number"
          name="mobilephone"
          placeholder="Número de celular/teléfono*"
          required
        />
        <input
          class="signUpForm__input col-xs-12 col-sm-12"
          id="inputUserName"
          type="text"
          name="username"
          placeholder="Usuario*"
          required
        />
        <input
          class="signUpForm__input col-xs-12 col-sm-12"
          id="inputPassword"
          type="password"
          name="password"
          placeholder="Contraseña*"
          required
        />
        <div class="buttons col-xs-12 col-sm-6 text-right">
          <input
            id="inputSubmit"
            class="signUpForm__submit"
            type="submit"
            value="Envíar"
          />
        <input
          class="signUpForm__reset"
          type="reset"
          value="Resetear"
          />
        </div>
    </fieldset>
  </form>`;
  document.body.appendChild(signUpSection);
  const inputName = document.getElementById("inputName");
  const inputEmail = document.getElementById("inputEmail");
  const inputMobil = document.getElementById("inputMobil");
  inputName.onchange = () => {
    sessionStorage.setItem("name", inputName.value);
    console.log(sessionStorage);
  };
  inputEmail.onchange = () => {
    sessionStorage.setItem("email", inputEmail.value);
    console.log(sessionStorage);
  };
  inputMobil.onchange = () => {
    sessionStorage.setItem("mobile", inputMobil.value);
    console.log(sessionStorage);
  };
  inputUserName.onchange = () => {
    sessionStorage.setItem("username", inputUserName.value);
    console.log(sessionStorage);
  };
  inputPassword.onchange = () => {
    sessionStorage.setItem("password", inputPassword.value);
    console.log(sessionStorage);
  };
  let signUpForm = document.getElementById("signUpForm");
  signUpForm.addEventListener("submit", formValidation);
  function formValidation(e) {
    e.preventDefault();
    console.log("Formulario Enviado");
    signUpSection.innerHTML = `<p class="signUpMessage">Felicitaciones ${sessionStorage.getItem(
      "name"
    )}! Te registraste exitosamente</p>`;
    $("#loginButton").show();
  }
};

//Boton para ingresar con usuario y contraseña
let loginButton = document.getElementById("loginButton");
loginButton.onclick = () => {
  $(".signUpMessage").hide();
  $("#signUpButton").hide();
  $("#loginButton").hide();
  loginSection = document.createElement("div");
  loginSection.innerHTML = `<form id="loginForm" class="col-xs-12 col-sm-6" action="">
  <fieldset class="formFieldset row">
    <legend class="text-center loginForm__legend">
      Ingresa con tu usuario y contraseña
    </legend>
    <input
      class="loginForm__input col-xs-12 col-sm-12"
      id="loginUserName"
      type="text"
      name="userName"
      placeholder="Usuario*"
      required
      />
      <input
        class="loginForm__input col-xs-12 col-sm-12"
        id="loginPassword"
        type="password"
        name="password"
        placeholder="Contraseña*"
        required
      />
      <div class="buttons col-xs-12 col-sm-6 text-right">
        <input
          id="submit"
          class="loginForm__submit"
          type="submit"
          value="Iniciar Sesión"
        />
      <input
        class="loginForm__reset"
        type="reset"
        value="Resetear"
        />
      </div>
  </fieldset>
</form>`;
  document.body.appendChild(loginSection);
  const loginUserName = document.getElementById("loginUserName");
  const loginPassword = document.getElementById("loginPassword");
  loginUserName.onchange = () => {
    sessionStorage.setItem("loginUserName", loginUserName.value);
  };
  loginPassword.onchange = () => {
    sessionStorage.setItem("loginPassword", loginPassword.value);
  };
  let loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", loginValidation);
  function loginValidation(e) {
    e.preventDefault();
    if (
      sessionStorage.getItem("loginUserName") ===
        sessionStorage.getItem("username") &&
      sessionStorage.getItem("loginPassword") ===
        sessionStorage.getItem("password")
    ) {
      $(".welcome").hide();
      $("#loginForm").hide();
      $("#bodyContainer").fadeIn(2000);
    } 
    else if (sessionStorage.getItem("username")==null || sessionStorage.getItem("password")==null) {
      alert("Necesitas registrarte para poder ingresar");
    }
    else {
      alert("El usuario y/o la contraseña son incorrectos");
    }
  }
};

//Animations
$(".welcome").animate({left:"0px"}, 1500);
$("#loginButton, #signUpButton").fadeIn(3000);


console.log(sessionStorage);