document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("autos").addEventListener("click", function () {
    localStorage.setItem("catID", 101);
    window.location = "products.html";
  });
  document.getElementById("juguetes").addEventListener("click", function () {
    localStorage.setItem("catID", 102);
    window.location = "products.html";
  });
  document.getElementById("muebles").addEventListener("click", function () {
    localStorage.setItem("catID", 103);
    window.location = "products.html";
  });

  let usuario = sessionStorage.getItem("user");

  console.log("Aqui el usuarioOOOO", usuario);

  if (usuario == null) {
    alert(
      "No tiene acceso a este sitio, por favor continue para ingresar su usuario"
    );
    location.href = "login.html";
  }
});
