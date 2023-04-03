
///https://raw.githubusercontent.com/17seba17/17seba17.github.io/cplusplus/

    function calculate() {
      const number = document.getElementById("number").value;
      fetch("https://raw.githubusercontent.com/17seba17/17seba17.github.io/cplusplus/main/double")
        .then(response => response.text())
        .then(program => {
          const command = `echo ${number} | ${program}`;
          console.log(command);
          return fetch(`https://raw.githubusercontent.com/17seba17/17seba17.github.io/cplusplus/dispatches`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ACCESS_TOKEN'
            },
            body: JSON.stringify({
              event_type: 'run_program',
              client_payload: {
                command: command
              }
            })
          });
        })
        .then(response => {
          console.log(response);
          return response.json();
        })
        .then(json => {
          console.log(json);
          const output = json.output;
          document.getElementById("result").innerHTML = `Il doppio di ${number} è ${output}`;
        })
        .catch(error => {
          console.error(error);
          document.getElementById("result").innerHTML = "Errore durante l'esecuzione del programma";
        });
    }
