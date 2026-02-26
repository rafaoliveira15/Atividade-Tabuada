function gerarTabuadas() {

  let resultadoDiv = document.getElementById("resultado");

  resultadoDiv.innerHTML = "";

  for (let numero = 1; numero <= 100; numero++) {
    let tabuadaHTML = "<div class='card'>";
    tabuadaHTML += "<h3>Tabuada do " + numero + "</h3>";

    for (let i = 1; i <= 10; i++) {
      tabuadaHTML += numero + " x " + i + " = " + numero * i + "<br>";
    }

    tabuadaHTML += "</div>";

    resultadoDiv.innerHTML += tabuadaHTML;
  }
}
