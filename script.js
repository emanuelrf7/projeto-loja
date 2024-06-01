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

    let imgSrc = prompt('Digite o link da imagem do produto:').trim();
    
    if (imgSrc) {
        img.src = imgSrc;
    } else {
        do {
            imgSrc = prompt('É necessário o link da imagem do produto! Tente novamente:')
        } while(!imgSrc)
        img.src = imgSrc;
    }

    img.alt = 'Foto do Produto';
    img.classList = 'config-imagem'
    novoEl.classList = 'container-imagem'
    novoEl.append(img, textoNome, textoTamanho, textoDescricao, textoValor);
    produtos.appendChild(novoEl);
    
    // Reset do formulário
    nomeEl.value = '';
    tamanhoEl.value = '';
    descricaoEl.value = '';
    valorEl.value = '';
}