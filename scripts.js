const firebaseConfig = {
    apiKey: "AIzaSyBZJZAmiu9j4nmljAtJmYqeVtVDxHsay2U",
    authDomain: "banco-de-dados-7c96d.firebaseapp.com",
    databaseURL: "https://banco-de-dados-7c96d-default-rtdb.firebaseio.com",
    projectId: "banco-de-dados-7c96d",
    storageBucket: "banco-de-dados-7c96d.appspot.com",
    messagingSenderId: "545547472363",
    appId: "1:545547472363:web:5823ab87dc8d5fd2d45dae",
    measurementId: "G-JNGTWWQ7EN"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function login() {
    var email = document.getElementById('usuario').value;
    var password = document.getElementById('senha').value;
    var contentContainer = document.getElementById('content-container');

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Autenticação bem-sucedida
            var user = userCredential.user;
            contentContainer.classList.remove('hidden');
            document.getElementById('modelo').removeAttribute('disabled');
            document.getElementById('pesquisar').removeAttribute('disabled');
            document.getElementById('login-container').style.display = 'none';
        })
        .catch((error) => {
            // Em caso de falha na autenticação
            alert('Login inválido. Verifique seu e-mail e senha');
        });
}


function pesquisar() {
    var modeloCarro = document.getElementById('modelo').value;

    // Realize a pesquisa de dados no Firebase, e.g., carrosRef.orderByChild('placa').equalTo(modeloCarro).once('value')
    // Lógica de pesquisa de dados aqui

    if (modeloCarro.trim() === '') {
        exibirErro('Digite algo para pesquisar.');
        return;
    }

    exibirErro(''); // Limpa a mensagem de erro, se houver alguma.

    // Exiba os resultados da pesquisa
    // exibirResultado(resultadoPesquisa);
}

function exibirErro(mensagem) {
    var errorMessage = document.getElementById('error-message');
    errorMessage.textContent = mensagem;
    errorMessage.classList.remove('hidden');
}

function exibirResultado(resultado) {
    var tabelaCorpo = document.getElementById("tabela-corpo");
    tabelaCorpo.innerHTML = '';

    if (resultado.length === 0) {
        document.getElementById('texto-informativo').textContent = 'Nenhum resultado encontrado.';
        return;
    }

    document.getElementById('texto-informativo').textContent = '';
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

function initialize() {
    // Verificar se o usuário está autenticado e atualizar a interface do usuário, se necessário.
    // Você pode implementar lógica de autenticação aqui.
}

// Chame a função de inicialização quando a página carregar.
initialize();