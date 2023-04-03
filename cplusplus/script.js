function calcola() {
  const form = document.querySelector('#form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const numero = document.querySelector('#numero').value;
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const risultato = xhr.responseText;
        document.querySelector('#risultato').textContent = risultato;
      }
    };
    xhr.open('POST', '../cgi-bin/doppio.cgi', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(`numero=${numero}`);
  });
}
