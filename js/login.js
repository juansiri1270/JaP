function login() {
  let user = document.getElementById("user").value;
  let password = document.getElementById("pass").value;

  if (user == "" || password == "") {
    alert("Credenciales Incorrectas");
  } else {
    sessionStorage.setItem("user", user);
    location.href = "index.html";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let boton = document.getElementById("button");

  boton.addEventListener("click", () => {
    login();
  });
});
