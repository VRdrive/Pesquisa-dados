var users = [
    { username: '', password: '' },
    { username: '', password: '' },
    // Adicione quantos usuários e senhas você precisar
];

function login() {
    var username = document.getElementById('usuario').value;
    var password = document.getElementById('senha').value;
    var contentContainer = document.getElementById('content-container');
    var userFound = false;

    for (var i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            userFound = true;
            break;
        }
    }

    if (userFound) {
        contentContainer.classList.remove('hidden');
        document.getElementById('modelo').removeAttribute('disabled');
        document.getElementById('pesquisar').removeAttribute('disabled');
        document.getElementById('login-container').style.display = 'none';
    } else {
        alert('Login inválido. Verifique seu usuário e senha.');
    }
}

function pesquisar() {
    var modeloCarro = document.getElementById('modelo').value;
    var resultadoPesquisa = realizarPesquisa(modeloCarro);

    if (modeloCarro.trim() === '') {
        exibirErro('Digite algo para pesquisar.');
        return;
    }

    exibirErro(''); // Limpa a mensagem de erro, se houver alguma.
    exibirResultado(resultadoPesquisa);
}

function exibirErro(mensagem) {
    var errorMessage = document.getElementById('error-message');
    errorMessage.textContent = mensagem;
    errorMessage.classList.remove('hidden');
}

function realizarPesquisa(modelo) {
    var dados = [
        ["Daniel Lopes de Oliveira", "Ativo", "HONDA HR-v", "GCM4E43", "Bragança Paulista"],
        ["Abdenego Cicero Cordeiro", "Ativo", "Nissan/Versa", "QOY3J23", "Bragança Paulista"],
        ["Acácio Panizza", "Ativo", "Toyota/Corolla", "FCA5H37", "Bragança Paulista"],
        ["Adail Soares Lima", "Ativo", "Fiat/Mobi", "FWO2G18", "Nova Odessa"],
        ["Adão Barreto de Freitas", "Ativo", "Fiat/Palio", "GKE9H20", "Bragança Paulista"],
        ["Adelino Ferreira Dos Santos", "Ativo", "Fiat/Uno", "FCR-4222", "Extrema"],
        ["Adelmo Camargos Marra", "Ativo", "Fiat/Siena", "QXQ1F14", "Atibaia"],
        ["Adevaldo Alves Do Nascimento", "Ativo", "Renault/Sandero", "GDO8E74", "Bragança Paulista"],
        ["Adilson Dos Santos Figueiredo", "Ativo", "Hyundai/Hb20", "FRV-6814", "Bragança Paulista"],
        ["Adilson Pereira Da Silva", "Ativo", "Chevrolet/Prisma", "FTI-7249", "Bom Jesus dos Perdões"],
        ["Adilson Santos De Souza", "Ativo", "Renault/Sandero", "EXR-4445", "Bragança Paulista"],
        ["Adnan Moreira Da Silva", "Ativo", "Chevrolet/Onix Plus", "RGD4I61", "Atibaia"],
        ["Adriane Guilherme Cunha", "Ativo", "Volkswagen/Polo", "ESL5J23", "Bom Jesus dos Perdões"],
        ["Adriano Alexandre da Silva", "Ativo", "Hyundai/Hb20", "GJA4H13", "Socorro"],
        ["Adriano Aparecido Pedroso", "Ativo", "Chevrolet/Onix", "QNA9F02", "Bragança Paulista"],
        ["Adriano Augusto Silva Estrela", "Ativo", "Kia/Picanto", "GBH9F30", "Bragança Paulista"],
        ["Adriano Da Silva Pinto", "Ativo", "Fiat/Argo", "FTG1A06", "Atibaia"],
        ["Adriano De Souza Ribeiro", "Ativo", "Hyundai/Hb20", "FYX0G23", "Bragança Paulista"],
        ["Adriano Ramos Dos Santos", "Ativo", "Volkswagen/Voyage", "QOO8B44", "Extrema"],
        ["Adriano Rodrigues De Andrade", "Ativo", "Chevrolet/Cobalt", "FGE4C68", "Atibaia"],
        ["Aelton Dhiekison dos Santos", "Ativo", "Fiat/Argo", "QPD9H09", "Bragança Paulista"],
        ["Agnaldo Alves de Oliveira", "Ativo", "Nissan/Versa", "FRP-1907", "Bragança Paulista"],
        ["Ailton Henrique de Toledo", "Ativo", "Chevrolet/Onix Plus", "FXY7C73", "Bragança Paulista"],
        ["Alan Antunes Bolognani", "Ativo", "Ford/Ka", "PZZ9E99", "Bragança Paulista"],
        ["Alberto Pacciulli", "Ativo", "Honda/City", "FNX-5474", "Bragança Paulista"],
        ["Alcino Serone", "Ativo", "Toyota/Yaris Sedan", "GHB3F09", "Bragança Paulista"],
        ["Aldo De Morais Cardoso", "Ativo", "Chevrolet/Prisma", "FSC6F18", "Bragança Paulista"],
        ["Aldo Schiavetti Júnior", "Ativo", "Ford/Ka", "FCA6F44", "Atibaia"],
        ["Alessandro Lopes Celestino", "Ativo", "Renault/Kwid", "GEJ2H58", "Atibaia"],
        ["Alex Douglas Guimarães Lopes", "Ativo", "Chevrolet/Onix", "QPG8E66", "Atibaia"],
        ["Alex Douglas Silva", "Ativo", "Hyundai/Hb20", "GBB-1866", "Bragança Paulista"],
        ["Alex Ivan Xavier Berreta", "Ativo", "Chevrolet/Onix", "QQC-0769", "Extrema"],
        ["Alex Sandro dos Reis França", "Ativo", "Chevrolet/Onix", "QWR5D08", "Atibaia"],
        ["Alex Taldioli", "Ativo", "Ford/Ka Sedan", "FUD4E69", "Bragança Paulista"],
        ["Alex Vieira Dos Santos", "Ativo", "Ford/Ka", "DYJ8I66", "Embu das Artes"],
        ["Alexander Horvath Anastacio", "Ativo", "Nissan/March", "PWI1B50", "Nazaré Paulista"],
        ["Alexandre Alves De Souza", "Ativo", "Fiat/Siena", "FMZ2F78", "Atibaia"],
        ["Alexandre Jose dos Santos", "Ativo", "Renault/Kwid", "CDR-4333", "Bragança Paulista"],
        ["Alexandre Soares Vasques", "Ativo", "Hyundai/Hb20", "RUJ8D78", "Bragança Paulista"],
        ["Alexandre Vieira", "Ativo", "Volkswagen/Gol", "FMG1D49", "Bragança Paulista"],
        ["Alexandre Vieira Farias", "Ativo", "Renault/Logan", "FYQ-2067", "Bragança Paulista"],
        ["Alexandro Lima Da Silva", "Ativo", "Renault/Duster", "BBH-4828", "Bragança Paulista"],
        ["Alexsander Donizete Maximo", "Ativo", "Volkswagen/Voyage", "FHI9H79", "Extrema"],
        ["Alice Natalia Santana Sanches", "Ativo", "Ford/Ka", "QNS7A35", "Bragança Paulista"],
        ["Aline Franco De Moraes Aguiar", "Ativo", "Renault/Kwid", "GDO5D58", "Atibaia"],
        ["Alison Badialli Gonçalves", "Ativo", "Renault/Kwid", "SHK7J23", "Atibaia"],
        ["Allan Bruno Carneiro Mota", "Ativo", "Chevrolet/Onix", "SID3A69", "Bragança Paulista"],
        ["Álvaro Pepe Junior", "Ativo", "Ford/Ka", "PXJ5B40", "Atibaia"],
        ["Amanda Giulianna Wandembruck Kowalczuk", "Ativo", "Fiat/Argo", "QXS4A61", "Bragança Paulista"],
        ["Amanda Letícia Dos Santos", "Ativo", "Hyundai/Hb20", "ESX0D89", "Bragança Paulista"],
        ["Amauri Aparecido da Silva", "Ativo", "Chevrolet/Onix", "EKV0F88", "Bragança Paulista"],
        ["Ana Carolina Da Silva Arruda", "Ativo", "Chevrolet/Onix", "FON4E40", "Bragança Paulista"],
        ["Ana Paula De Oliveira", "Ativo", "Toyota/Etios Sedan", "GJK-5457", "Bragança Paulista"],
        ["Ana Paula Elvino", "Ativo", "Chevrolet/Onix", "FNQ1D64", "Bragança Paulista"],
        ["Ana Paula Silva", "Ativo", "Citroen/C3", "FMG1D87", "Bragança Paulista"],
        ["Anacleto Alves Da Silva", "Ativo", "Hyundai/Hb20", "FAL-9370", "Bragança Paulista"],
        ["Anderson Alex Torres", "Ativo", "Hyundai/Hb20", "SHP4H94", "Bragança Paulista"],
        ["Anderson Angelo Tavares", "Ativo", "Renault/Kwid", "RNP2F84", "Bragança Paulista"],
        ["Anderson Belchior de Oliveira", "Ativo", "Chevrolet/Onix Plus", "GJM5E28", "Bragança Paulista"],
        ["Anderson Braz Nunes", "Ativo", "Toyota/Yaris", "FIJ1J08", "Bragança Paulista"],
        ["Anderson Cintra Alves", "Ativo", "Fiat/Siena", "PJF8F34", "Bragança Paulista"],
        ["Anderson De Souza Lucena", "Ativo", "Ford/Ka", "EVA9F79", "Atibaia"],
        ["Anderson José Pereira De Souza", "Ativo", "Hyundai/Hb20", "GHT-9019", "Bragança Paulista"],
        ["Anderson Lima De Oliveira", "Ativo", "Fiat/Palio", "ERE8G69", "Bragança Paulista"],
        ["Anderson Oliveira da Costa", "Ativo", "Chevrolet/Onix Plus", "GHK1D78", "Atibaia"],
        ["Andre Goncalves Cardoso", "Ativo", "Renault/Duster", "FOI4E89", "Bragança Paulista"],
        ["André Guerra Bento", "Ativo", "Peugeot/208", "FGI7J24", "Piracaia"],
        ["André Luis Caciani", "Ativo", "Ford/Ecosport", "FUQ-6822", "Bragança Paulista"],
        ["Andre Luis Figueredo de Oliveira", "Ativo", "Volkswagen/Gol", "SDX5H20", "Socorro"],
        ["André Luis Teles", "Ativo", "Renault/Clio", "GJT9J30", "Atibaia"],
        ["André Luiz De Souza Gimenez", "Ativo", "Volkswagen/Up", "GFU-8766", "Bragança Paulista"],
        ["André Luiz Ribeiro Da Silva", "Ativo", "Fiat/Punto", "FQY5F56", "Bragança Paulista"],
        ["Andre Macedo De Lorence Lima", "Ativo", "Ford/Fiesta", "FHI9H93", "Bragança Paulista"],
        ["André Mendonça", "Ativo", "Volkswagen/Gol", "FIS-1318", "Bragança Paulista"],
        ["Andréa Aparecida De Jesus", "Ativo", "Fiat/Cronos", "QIS2E44", "Bragança Paulista"],
        ["Andreia Anita De Oliveira Rodrigues", "Ativo", "Chevrolet/Onix", "GAC-7109", "Bragança Paulista"],
        ["Anesio Alves De Lima", "Ativo", "Ford/Fiesta", "FKR-7588", "Bragança Paulista"],
        ["Angela Maria Bertini", "Ativo", "Nissan/Versa", "FUZ9D99", "Atibaia"],
        ["Anilto Jose Da Silva", "Ativo", "Fiat/Cronos", "RUC8C81", "Atibaia"],
        ["Antônio Alexandre Annibal", "Ativo", "Chevrolet/Onix Plus", "RTG5D96", "Bragança Paulista"],
        ["Antonio Carlos Braga Machado", "Ativo", "Volkswagen/Up", "FQY-3461", "Atibaia"],
        ["Antonio Carlos Da Silva", "Ativo", "Chevrolet/Onix", "EPA4B18", "Vargem"],
        ["Antonio Carlos Monteiro Junior", "Ativo", "Chevrolet/Onix", "EPA8C97", "Extrema"],
        ["Antonio Carlos Sammartino", "Ativo", "Fiat/Uno", "FXU-7870", "Bragança Paulista"],
        ["Antonio Dos Santos Bispo", "Ativo", "Volkswagen/Virtus", "QUV4F95", "Atibaia"],
        ["Antonio Joaquim Da Costa e Silva", "Ativo", "Hyundai/Creta", "EOS-7558", "Bragança Paulista"],
        ["Antonio Laercio De Oliveira Santos", "Ativo", "Chevrolet/Celta", "FRP-6539", "Bragança Paulista"],
        ["Antônio Marcos Dos Santos Telles", "Ativo", "Chevrolet/Celta", "FIB2D60", "Atibaia"],
        ["Antônio Marcos Silveira", "Ativo", "Volkswagen/Gol", "FNJ0G48", "Bragança Paulista"],
        ["Antônio Sebastião Silva", "Ativo", "Renault/Sandero", "FSV9C07", "Bragança Paulista"],
        ["Antonio Sergio de Roma", "Ativo", "Chevrolet/Tracker", "CDR2A37", "Bragança Paulista"],
        ["Antônio Valmir Medeiros", "Ativo", "Renault/Sandero", "FNS7I93", "Bragança Paulista"],
        ["Arivalde Rodrigues Da Silva Neto", "Ativo", "Hyundai/Hb20", "CDR0H44", "Atibaia"],
        ["Arlindo Jorge Costa Bezerra Dos Santos", "Ativo", "Renault/Logan", "FTI6G92", "Bragança Paulista"],
        ["Arylson Augusto Ferreira", "Ativo", "Volkswagen/Crossfox", "PUG-3620", "Extrema"],
        ["Augusto Cesar Da Silva Nicoletti", "Ativo", "Volkswagen/Voyage", "QPD4B63", "Bragança Paulista"],
        ["Augusto Cesar Secafin Da Silva", "Ativo", "Fiat/Mobi", "RTW2F24", "Atibaia"],
        ["Augusto Henrique Pova Dos Santos", "Ativo", "Ford/Ka", "EXM2B49", "Bragança Paulista"],
        ["Aurelio Montoya Ramírez", "Ativo", "Volkswagen/Virtus", "FXJ4E65", "Bragança Paulista"],
        ["Belise Danielly Da Silva", "Ativo", "Fiat/Cronos", "FXB6H76", "Bragança Paulista"],
        ["Benedito Alves De Oliveira", "Ativo", "Chevrolet/Prisma", "OXA-4430", "Bragança Paulista"],
        // ... seus dados aqui ...
    ];

    return dados.filter(function (linha) {
        return linha.some(function (coluna) {
            return coluna.toLowerCase().includes(modelo.toLowerCase());
        });
    });
}

function exibirResultado(resultado) {
    var tabelaCorpo = document.getElementById("tabela-corpo");
    tabelaCorpo.innerHTML = '';

    if (resultado.length === 0) {
        document.getElementById('texto-informativo').textContent = 'Nenhum resultado encontrado.';
        return;
    }

    document.getElementById('texto-informativo').textContent = ''; // Limpa a mensagem de erro
    for (var j = 0; j < resultado.length; j++) {
        var linha = document.createElement("tr");
        for (var k = 0; k < resultado[j].length; k++) {
            var celula = document.createElement("td");
            celula.textContent = resultado[j][k];
            linha.appendChild(celula);
        }
        tabelaCorpo.appendChild(linha);
    }
}