let form = document.getElementById("form_main");
form.addEventListener("submit", validarFormulario);

//Constructor para criar o objeto usuário
class criaUsuario {
  constructor(
    id,
    nome,
    sobrenome,
    dtnascimento,
    celular,
    email,
    simulacao,
    parcelas
  ) {
    this.id = id;
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.dtnascimento = dtnascimento;
    this.celular = celular;
    this.email = email;
    this.simulacao = simulacao;
    this.parcelas = parcelas;
  }
}

// Função para receber os dados inputados no formulário e rodar o simulador
function validarFormulario(e) {
  //Cancelar o comportamento do evento
  e.preventDefault();

  //Obter o elemento a partir do disparo
  let formulario = e.target;
  i = 1;

  const usuario1 = new criaUsuario(
    i,
    formulario.children[0].value,
    formulario.children[1].value,
    formulario.children[2].value,
    formulario.children[3].value,
    formulario.children[4].value,
    formulario.children[5].value,
    formulario.children[6].value,
    formulario.children[7].value
  );

  // Transformando os childrens do forms em tags mais fáceis de manipular
  let valor = formulario.children[5].value;
  let numParcelas = formulario.children[6].value;

  // Tabela de juros aplicado referente ao número de parcelas selecionadas
  let juros12 = 12 / 100;
  let juros24 = 14 / 100;
  let juros48 = 18 / 100;

  // Função que aplica os juros ao valor simulado conforme o número de parcelas selecionadas
  let valorEmprestimo = () => {
    if (numParcelas == 12) {
      return (valor * (1 + juros12)) / numParcelas;
    } else if (numParcelas == 24) {
      return (valor * (1 + juros24)) / numParcelas;
    } else if (numParcelas == 48) {
      return (valor * (1 + juros48)) / numParcelas;
    }
  };

  // Armazena o resultado da aplicação da taxa de juros e formata em número inteiro
  let resultadoParcelas = valorEmprestimo().toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  // Calcula o valor total do empréstimo
  let resultadoEmprestimo = () => {
    return valorEmprestimo() * formulario.children[6].value;
  };

  // Armazena o resultado do cálculo do valor total do empréstimo
  let valorTotalEmprestimo = resultadoEmprestimo().toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  // Função que retorna qual a modalidade de juros foi aplicada
  const jurosAplicado = () => {
    if (formulario.children[6].value == 12) {
      return juros12 * 100;
    } else if (formulario.children[6].value == 24) {
      return juros24 * 100;
    } else if (formulario.children[6].value == 48) {
      return juros48 * 100;
    }
  };

  // Armazena o resultado da função de modalidade de juros
  let resultadoJurosAplicado = jurosAplicado();

  // Mostrar o resultado da simulação na tela
  let txtEmprestimo = document.getElementById("txtEmprestimo");
  let txtParcela = document.getElementById("txtParcela");
  let txtTaxa = document.getElementById("txtTaxa");

  txtParcela.innerText =
    formulario.children[6].value + "x de R$ " + resultadoParcelas;
  txtEmprestimo.innerText = "Total a pagar: R$ " + valorTotalEmprestimo;
  txtTaxa.innerText = "Juros de " + resultadoJurosAplicado + "% ao mês.";

  let btnclear = document.getElementById("clear_button");
  btnclear.onclick = () => {
    txtParcela.innerText = "";
    txtEmprestimo.innerText = "";
    txtTaxa.innerText = "";
  };

  // Armazena os inputs no LocalStorage
  localStorage.setItem(formulario.children[0].value, JSON.stringify(usuario1));
}