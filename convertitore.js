function converti() {
  const stringaInput = document.getElementById("stringa").value;
  let equazione = "";
  for (let i = 0; i < stringaInput.length; i++) {
    const char = stringaInput[i].toLowerCase();
    switch(char) {
      case "a":
        equazione += "+";
        break;
      case "e":
        equazione += "-";
        break;
      case "i":
        equazione += "*";
        break;
      case "o":
        equazione += "/";
        break;
      case "u":
        equazione += "^";
        break;

      case "b":
        equazione += "1";
        break;
      case "c":
        equazione += "2";
        break;
      case "d":
        equazione += "3";
        break;
      case "f":
        equazione += "4";
        break;
      case "g":
        equazione += "5";
        break;

      case "h":
        equazione += "6";
        break;
      case "j":
        equazione += "7";
        break;
      case "k":
        equazione += "8";
        break;
      case "l":
        equazione += "9";
        break;
      case "m":
        equazione += "10";
        break;

      case "n":
        equazione += "15";
        break;
      case "p":
        equazione += "20";
        break;
      case "q":
        equazione += "25";
        break;
      case "r":
        equazione += "30";
        break;
      case "s":
        equazione += "35";
        break;

      case "t":
        equazione += "40";
        break;
      case "v":
        equazione += "45";
        break;
      case "w":
        equazione += "50";
        break;
      case "x":
        equazione += "100";
        break;
      case "y":
        equazione += "200";
        break;
      case "z":
        equazione += "500";
        break;

      case " ":
        equazione += ",";
        break;
      default:
        equazione += "0";
        break;
    }
  }
  
  document.getElementById("equazione").innerText = equazione;
}
