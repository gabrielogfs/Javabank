// Primeira possibilidade

/*
let form = document.getElementById("form_main");
form.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
  //Cancelar o comportamento do evento
  e.preventDefault();

  //Obter o elemento a partir do disparo
  let formulario = e.target

  const dadosPreenchidos = {
    nome: formulario.children[0].value,
    sobrenome: formulario.children[1].value,
    nascimento: formulario.children[2].value,
    celular: formulario.children[3].value,
    email: formulario.children[4].value,
    valor: formulario.children[5].value
  }

  

  console.log(dadosPreenchidos);
  localStorage.setItem(formulario.children[0].value, JSON.stringify(dadosPreenchidos))
}
*/

// Segunda possibilidade

let form = document.getElementById("form_main");
form.addEventListener("submit", validarFormulario);

let usuarios = [];

//Constructor para criar o objeto usuário
class criaUsuario {
  constructor(id, nome, sobrenome, dtnascimento, celular, email, simulacao) {
    this.id = id;
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.dtnascimento = dtnascimento;
    this.celular = celular;
    this.email = email;
    this.simulacao = simulacao;
  }
}

// Função para receber os dados inputados no formulário
function validarFormulario(e) {
  //Cancelar o comportamento do evento
  e.preventDefault();

  //Obter o elemento a partir do disparo
  let formulario = e.target;
  
  let i = 1;

  if (formulario.children[0].value > i) {
    formulario.children[0].value;
  } else {
    while (formulario.children[0].value <= i) {
      i++;
    }
  }

  const usuario1 = new criaUsuario(
    i,
    formulario.children[0].value,
    formulario.children[1].value,
    formulario.children[2].value,
    formulario.children[3].value,
    formulario.children[4].value,
    formulario.children[5].value,
    formulario.children[6].value
  );

  alert("Muito obrigado. O resultado da simulação foi enviado em seu e-mail.")

  console.log(usuario1);
  localStorage.setItem(
    formulario.children[0].value,
    JSON.stringify(usuario1)
  );
}

