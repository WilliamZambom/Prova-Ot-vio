document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('notaForm');
    const tableContainer = document.getElementById('tableContainer');
    let table = null;

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Verifica se a tabela já existe
        if (!table) {
            // Cria a tabela
            table = document.createElement('table');
            table.id = 'notaTable';
            table.border = '1';

            // Cria o cabeçalho da tabela
            const thead = table.createTHead();
            const headerRow = thead.insertRow();
            const headers = ['Nome', 'Matrícula', 'Nota 1', 'Nota 2', 'Média', 'Situação'];
            headers.forEach(headerText => {
                const th = document.createElement('th');
                th.textContent = headerText;
                headerRow.appendChild(th);
            });

            tableContainer.appendChild(table);
        }

        // Adiciona os valores do formulario para a tabela
        // Caso não tiver nenhum valor a tabela completa com - 
        const nome = document.getElementById('nome').value || '-';
        const matricula = document.getElementById('matricula').value || '-';
        const nota1 = parseFloat(document.getElementById('nota1').value) || '-';
        const nota2 = parseFloat(document.getElementById('nota2').value) || '-';
        const media = (nota1 !== '-' && nota2 !== '-') ? ((nota1 + nota2) / 2).toFixed(2) : '-';
        const situacao = media !== '-' ? (media >= 5 ? 'Aprovado' : 'Reprovado') : '-';

        // Cria uma nova linha para a tabela
        const tbody = table.getElementsByTagName('tbody')[0] || table.createTBody();
        const newRow = tbody.insertRow();
        
        const cellNome = newRow.insertCell(0);
        const cellMatricula = newRow.insertCell(1);
        const cellNota1 = newRow.insertCell(2);
        const cellNota2 = newRow.insertCell(3);
        const cellMedia = newRow.insertCell(4);
        const cellSituacao = newRow.insertCell(5);

        // Preenche os dados da tabela 
        cellNome.textContent = nome;
        cellMatricula.textContent = matricula;
        cellNota1.textContent = nota1;
        cellNota2.textContent = nota2;
        cellMedia.textContent = media;
        cellSituacao.textContent = situacao;

        // Reseta o formulario
        form.reset();
    });
});