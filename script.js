const buttons = document.querySelectorAll(".button");
const result = document.getElementById("result");
const keySound = document.getElementById("keySound");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.innerText;

    // Reproducir sonido
    keySound.currentTime = 0; // Reinicia el audio para evitar retrasos
    keySound.play();

    if (value === "=") {
      try {
        result.value = eval(result.value); // Realiza el cálculo
      } catch {
        result.value = "Error";
      }
    } else if (value === "C") {
      result.value = ""; // Limpia la pantalla
    } else {
      result.value += value; // Agrega el valor del botón presionado
    }
  });
});
