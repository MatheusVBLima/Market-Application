var items = [];

document.querySelector('input[type=submit]')
    .addEventListener('click', () => {
        var nomeProduto = document.querySelector('input[name=nome_produto]');
        var precoProduto = document.querySelector('input[name=price]');
        var quantidadeProduto = document.querySelector('input[name=amount]');

        items.push({
            nome: nomeProduto.value,
            valor: precoProduto.value,
            quatidade: quantidadeProduto.value
        });

        let listaProdutos = document.querySelector('.lista-produtos');
        let soma = 0;
        listaProdutos.innerHTML = "";
        items.map(function(val) {
            soma += parseFloat(val.valor * val.quatidade);

            listaProdutos.innerHTML += `
        <ul class="lista-produto-single">
            <h3 class="name-produto">` + 'Produto: '+ val.nome + `</h3>
            <h3 class="amount-produto">` + 'Quantidade: ' + val.quatidade + `</h3>
            <h3 class="price-produto"><span>R$`+ val.valor + `</span></h3>
        </ul>
        `;
        })
        soma = soma.toFixed(2);
        nomeProduto.value = "";
        precoProduto.value = "";
        quantidadeProduto.value = "";

        let elementoSoma = document.querySelector('.soma-produto h1');
        elementoSoma.innerHTML = 'Total: R$' + soma;


    });

document.querySelector('button[name=limpar]')
    .addEventListener('click', () => {
        items = [];

        document.querySelector('.lista-produtos').innerHTML = "";
        document.querySelector('.soma-produto h1').innerHTML = "R$0";
    })