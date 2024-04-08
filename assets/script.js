document.addEventListener('DOMContentLoaded', function () {
  var quantidadeValue = document.getElementById('quantidade')
  var buttonDecrement = document.getElementById('decrementar')
  var buttonIncrement = document.getElementById('incrementar')

  buttonIncrement.addEventListener('click', function () {
    quantidadeValue.value = parseInt(quantidadeValue.value) + 1
  });

  buttonDecrement.addEventListener('click', function () {
    var valorAtual = parseInt(quantidadeValue.value);
    if (valorAtual > 0) {
      quantidadeValue.value = valorAtual - 1
    }
  });
});