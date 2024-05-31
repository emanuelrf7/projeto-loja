// Seleção de Elementos
const botaoAdc = document.querySelector('input#adicionar')
const nomeEl = document.querySelector('input#inome')
const tamanhoEl = document.querySelector('input#itamanho')
const descricaoEl = document.querySelector('input#idesc')
const valorEl = document.querySelector('input#ivalor')
const produtos = document.querySelector('div#produtos')
// Funções
function adicionarProduto() {
    // Criação de elementos
    const novoEl = document.createElement('div');
    const textoNome = document.createElement('p');
    const textoTamanho = document.createElement('p');
    const textoDescricao = document.createElement('p');
    const textoValor = document.createElement('p');
    const img = document.createElement('img');

    // Manipulação de elementos
    const nome = nomeEl.value;
    const tamanho = tamanhoEl.value;        
    const descricao = descricaoEl.value;        
    const valor = valorEl.value;
    textoNome.innerText = `Nome da roupa: ${nome}`;
    textoTamanho.innerText = `Tamanho: ${tamanho}`;
    textoDescricao.innerText = `Descricao: ${descricao}`;
    textoValor.innerText = `Valor: R$${valor}`;
    img.src = prompt('Digite o link da imagem: ');
    img.alt = 'Foto do Produto';
    novoEl.append(img, textoNome, textoTamanho, textoDescricao, textoValor);
    produtos.appendChild(novoEl);
    console.log(novoEl);
    
    // Reset do formulário
    nomeEl.value = '';
    tamanhoEl.value = '';
    descricaoEl.value = '';
    valorEl.value = '';
}