document.getElementById('bhaskaraForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);
    const x = parseInt(document.getElementById('x').value);

    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(x) || x < 1 || x > 2) {
        alert('Por favor, preencha todos os campos corretamente. O valor de X deve ser 1 ou 2.');
        return;
    }

    const delta = b * b - 4 * a * c;
    let resultado = '';

    if (delta < 0) {
        resultado = 'Não existem raízes reais.';
    } else {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        resultado = (x === 1) ? x1.toFixed(2) : x2.toFixed(2);
    }

    const tbody = document.querySelector('#resultTable tbody');
    const row = document.createElement('tr');
    row.innerHTML = `<td>${tbody.children.length + 1}</td><td>${a}</td><td>${b}</td><td>${c}</td><td>${resultado}</td>`;
    tbody.appendChild(row);

    // Limpar os campos após o envio
    document.getElementById('bhaskaraForm').reset();
});
