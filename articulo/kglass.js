
const params = new URLSearchParams(window.location.search);
const modelo = params.get("mod");
const desc = params.get("desc");
const img = params.get("img");

if (!modelo) {
  document.body.innerHTML = "<h2>Modelo no especificado</h2>";
  throw new Error("No se indicó modelo");
}

// Rellena el contenido dinámico
document.getElementById("nombre-producto").textContent = producto.nombre;
document.getElementById("descripcion").textContent = desc;
document.getElementById("foto1").src = `./img/kglass/${img}`;
console.log(document.getElementById("descripcion").textContent)
console.log(document.getElementById("foto1").src)

// WhatsApp dinámico
document.getElementById("btn-whatsapp").addEventListener("click", function() {
  const telefono = "5491138220688";
  const mensaje = `Hola! Estoy interesado en el vidrio templado modelo ${modelo} (${producto.nombre}).`;
  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
});
