# Tutorial JavaScript[^1]

[^1]: Traduzido e adaptado de https://developer.mozilla.org/en-US/docs/Web/JavaScript.

**Sumário**

- [Tutorial JavaScript\[^1\]](#tutorial-javascript1)
  - [**O que é JavaScript?**](#o-que-é-javascript)
    - [**O que o JS pode fazer de fato?**](#o-que-o-js-pode-fazer-de-fato)
    - [**O que o JavaScript está fazendo em sua página?**](#o-que-o-javascript-está-fazendo-em-sua-página)
      - [**Segurança nos navegadores**](#segurança-nos-navegadores)
      - [**Ordem de execução do JavaScript**](#ordem-de-execução-do-javascript)
      - [**Código interpretado vs. Código compilado**](#código-interpretado-vs-código-compilado)
      - [**Lado do servidor vs. Lado do cliente**](#lado-do-servidor-vs-lado-do-cliente)
      - [**Código dinâmico vs. estático**](#código-dinâmico-vs-estático)
    - [**Como adicionar JavaScript a uma página?**](#como-adicionar-javascript-a-uma-página)
      - [**JavaScript interno**](#javascript-interno)
      - [**JavaScript externo**](#javascript-externo)
      - [**JavaScript inline**](#javascript-inline)
      - [**Usando addEventListener no lugar**](#usando-addeventlistener-no-lugar)
      - [**Estratégias de carregamento de script**](#estratégias-de-carregamento-de-script)
    - [**Comentários**](#comentários)

---

## **O que é JavaScript?**

JavaScript é uma linguagem de programação de scripting que permite a implementação de recursos complexos em páginas web. Por exemplo, atualizações de conteúdo, mapas interativos, gráficos 2D/3D animais, etc. É a terceira camada de um bolo de tecnologias padrões da web.

![web cake](imagens/cake.png)

* HTML é a linguagem de marcação usada para estruturar e dar sentido a um conteúdo web, por exemplo, para definir parágrafos, cabeçalhos e tabelas de dados, ou imagens e vídeos embutidos em uma página.
* CSS é a linguagem de regras de estilo, utilizada para aplicar estilização a um conteúdo HTML, por exemplo, configurando as cores de fundo e as fontes, além de arranjar os conteúdos em múltiplas colunas.
* JavaScript é a linguagem de script que permite a criação e atualização dinâmica de conteúdos, o controle de multimídia, imagens animais e basicamente todo o resto.

As três camadas se encaixam perfeitamente bem. Veja o [exemplo 01](exemplos/exemplo01.html).

<br>

### **O que o JS pode fazer de fato?**

O núcleo do lado cliente (*client-side*) da linguagem consitem em recursos comuns de programação que permitem ao programador:

* Armazenar valores úteis em variáveis. No [exemplo 01](exemplos/exemplo01.html), o programa pede a inserção de um novo nome para ser armazenado na variável chamada `name`.
* Operações em/com `Strings`. No [exemplo 01](exemplos/exemplo01.html) a `String` `Jogador 1` é concatenada à variável `name` para criar rótulo de texto completo, e.g., "Jogador 1: Evandro".
* Executar códigos em resposta a eventos ocorridos na página web. No [exemplo 01](exemplos/exemplo01.html) o evento `click` foi abordado para detectar quando o rótulo é clicado e então executar o código que atualiza o texto.
* E muito mais!

O que é ainda mais excitante é são as funcionalidades construídas sobre a linguagem JavaScript do lado cliente. As conhecidas APIs (*Application Programming Interfaces*) proveem poderes extras a serem usados em código JS.

APIs são blocos de códigos prontos para uso que permitem a um desenvolvedor implementar programas que, de outro modo, seriam difíceis ou impossíveis de implementar. Eles fazem para o programador o mesmo que kits pré-fabricados de móveis fazem para a construção de casas - é mais fácil montar uma estante de livros pré-fabricada do que fazer todo o processo de design, procurar a madeira correta, fazer todos os cortes de estantes do tamanho e formas corretas, encontrar parafusos do tamanho certo e então juntá-los para formar uma estante de livros.

As APIs fazem parte, geralmente, de duas categorias.

![browser](imagens/browser.png)

**APIs de Navegadores** são construídas sobre um navegador web, e são capazes de expor dados do ambiente ao redor do computador, ou fazer tarefas completas e úteis. Por exemplo:

* A [API DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) permite a manipulação de HTML e CSS, ao criar, remover e modificar HTML, e aplicar dinamicamente novos estilos para a página, etc. Toda vez que uma janela pop-up aparece em uma página, ou algum novo conteúdo é mostrado, é o `DOM` em ação.
* A [API de Geolocalização](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation) pega informações geográficas. É assim que o `Google Maps` consegue encontrar a localização de um usuário e mostrá-la em um mapa.
* As APIs [Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) e [WebGL](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API) permitem a criação de gráficos animados 2D e 3D. Para ver um pouco do que é possível fazer com essas APIs, basta acessar [Chrome Experiments](https://experiments.withgoogle.com/collection/chrome) e [webglsamples](https://webglsamples.org/).
* [APIs de áudio e vídeo](https://developer.mozilla.org/en-US/docs/Web/Guide/Audio_and_video_delivery) como [HTMLMediaElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement) e [WebRTC](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API) permitem a reprodução de áudios e vídeos em uma página web.

**APIs de terceiros** não são construídos para navegadores por padrão, e seu código tem de ser encontrado em algum lugar na Internet. Por exemplo:

* [API do Twitter](https://developer.twitter.com/en/docs) permite mostrar seus últimos tweets em uma página web.
* [API do Google Maps](https://developers.google.com/maps?hl=pt-br) e [OpenStreetMap API](https://wiki.openstreetmap.org/wiki/API) permitem embutir mapas personalizados em uma página web.

<br>

### **O que o JavaScript está fazendo em sua página?**

Agora vamos começar a ver códigos e explorar o que realmente acontece quando se executa um código JavaScript em uma página web.

Primeiro, precisamos recapitular brevemente os acontecimentos de quando se carrega uma página web. Quando uma página é carregada em um navegador, há código (HTML, CSS e JavaScript) sendo executado em um ambiente de execução (a aba do navegador). Este ambiente é como uma fábrica que recebe matéria prima (o código) e produz um produto (a página web).

![execution](imagens/execution.png)

Um uso bastante comum de JavaScript é modificar dinamicamente o HTML e CSS para atualizar a interface do usuário via API DOM. Geralmente o código nos documentos (HTML e CSS) são carregados e executados na ordem em que aparecem na página. Erros podem ocorrer se o JavaScript é carregado e executado antes do trecho de HTML ou CSS que devem ser modificados.

<br>

#### **Segurança nos navegadores**

Cada aba do navegador (*browser*) tem seu próprio conjunto de códigos a ser executado, ou seja, na maioria dos casos cada aba opera separadamente, e o código em uma aba não pode afetar diretamente o código de outra aba. Esta é uma boa medida de segurança, caso contrário, hackers poderiam escrever códigos para roubar informação de outros sites abertos, ou cometer outros crimes.

<br>

#### **Ordem de execução do JavaScript**

Quando um navegador encontra um bloco de código JavaScript, ele normalmente executa na ordem em que aparece, ou seja, do cima para baixo [do arquivo]. Isto significa que um desenvolvedor precisa tomar cuidado sobre onde colocar os códigos. Por exemplo, revisitando o bloco de código JavaScript do [exemplo 01](exemplos/exemplo01.html):

```js
const para = document.querySelector("p");

para.addEventListener("click", updateName);

function updateName(){
    const name = prompt("Digite um novo nome");
    para.textContent = `Jogador 1: ${name}`;
}
```

No código é selecionado um elemento parágrafo, e então um `event listener` é linkado a ele, de forma que quando o parágrafo é clicado a função `updateName()` é executada. A função pede para o usuário digitar um novo nome, e então insere este novo nome no parágrafo para atualizar a tela.

Se as duas primeiras linhas forem trocadas, o código deixa de funcionar, pois o objeto `para` não não terá sido iniciado, portanto não tem como ser adicionado um `event listener` a ele.

<br>

#### **Código interpretado vs. Código compilado**

Em linguagens interpretadas o código é excutado de cima para baixo e o resultado de executar o código é imediatamente retornado. Não há necessidade de transformar o código em um formato diferente antes de o navegador executá-lo. Por outro lado, linguagens compiladas são transformadas (ou seja, compiladas) em outro formato antes de serem executadas pelo computador. O programa é executado a partir de um formato binário, o qual foi gerado a partir do código fonte.

O JavaScript é uma linguagem de programação leve e **interpretada**. O navegador web rebece o código JS em seu formato original e o executa. De um ponto de vista mais técnico, a maioria dos interpretadores de JavaScript utilizam a técnica `just-in-time compiling` (tradução livre: *compilação na hora*) para melhorar o desempenho. O código JS é compilado em um formato binário, mais rápido de ser executado, enquanto o script é utilizado, de forma ser executado o mais rápido possível. Entretanto, o JavaScript ainda é considerado uma linguagem interpretada, uma vez que a compilação acontece durante a execução, e não de forma prévia.

<br>

#### **Lado do servidor vs. Lado do cliente**

Código do lado do cliente (*client-side*) é executado no computador do usuário. Por exemplo, quando uma página web é vista, o código do lado do cliente é baixado, executado e mostrado pelo navegador.

O código do lado do servidor (*server-side*) é executado no servidor, e os resultados são baixados e mostrados no navegador. Exemplos de linguagens *server-side* são PHP, Python, Ruby, ASP.NET, e também JavaScript (o qual pode ser utilizado no popular ambiente Node.js).

<br>

#### **Código dinâmico vs. estático**

A palavra **dinâmico** é utilizada para descrever tanto JavaScript do lado cliente quanto linguagens do lado servidor, e refere à habilidade de atualizar a tela de uma página ou aplicativo web para mostrar diferentes coisas em diferentes circunstâncias, gerando novo conteúdo de acordo com o requerido. Código dinâmico do lado servidor gera novos conteúdos no servidor, por exemplo, buscar dados de um banco de dados, enquanto que o JavaScript do lado cliente gera dinamicamente novos conteúdos dentro do navegador, por exemplo, criando uma nova tabela HTML ou preenchendo os dados requeridos do servidor.

Uma página web que não possui atualização de conteúdo de forma dinâmica é referida como **estática**, ou seja, mostra o mesmo conteúdo o tempo inteiro.

<br>

### **Como adicionar JavaScript a uma página?**

O JavaScript é aplicado a uma página HTML de forma similar ao CSS. Enquanto o CSS utiliza o elemento `<link>` para aplicar folhas de estilo externas e `<style>` para aplicar folhas de estilo internas, o JavaScript utiliza apenas o elemento `<script>`.

<br>

#### **JavaScript interno**

[Exemplo de JS interno](exemplos/exemplo02.html).

<br>

#### **JavaScript externo**

É possível criar um arquivo separado, com extensão `.js` e chamá-lo através do atributo `src` do elemento `script`. Vejamos o seguinte [código JS](exemplos/exemplo_script.js) e seu [respectivo html](exemplos/exemplo03.html).

<br>

#### **JavaScript inline**

É possível (mas não muito utilizado) trechos de código JavaScript dentro de um elemento HTML. Vejamos o [seguinte exemplo](exemplos/exemplo04.html). Apesar de ser possível, seu uso não é encorajado, pois além de poluir o HTML, é ineficiente, pois o programador teria de incluir `onclick="createParagraph()"` em cada botão que deseja aplicar o código JS.

<br>

#### **Usando addEventListener no lugar**

Em vez de incluir JavaScript no HTML, é possível utilizar um constructo puro JS. A função `querySelectorAll()` permite selecionar todos os botões de uma página. Então é possível iterar sobre todos os botões, assinalando um `handler` para cada um utilizando a função `addEventListener()`.

Apesar de ser mais longo que o atributo `onclick`, pelo menos o código funcionará para todos os botões da página, não importando quantos existam, sejam adicionados ou removidos.

<br>

#### **Estratégias de carregamento de script**

Existem alguns problemas envolvendo o carregamento de scripts no momento certo. Nada é simples como parece. Um problema comum é que todo o HTML de uma página é carregada na ordem em que aparece. Se um código JavaScript é utilizado para manipular elementos na página, o código não irá funcionar se o JS for carregado antes do trecho de HTML que será manipulado.

Nos exemplos vistos até então, o JavaScript é carregado e executado no `head`, antes do corpo (`body`) do HTML. Isto pode causar um erro, por isso foram utilizados alguns constructos para contorná-lo:

```js
document.addEventeListener("DOMContentLoaded", () => {
    // ...
})
```

Trata-se de um *ouvinte de evento*, o qual ouve o evento `DOMContentLoaded`, o que significa que o `body` do HTML é completamente lido e analisado. O JavaScript dentro deste bloco não será executado até que o evento seja lançado, portanto evitando o erro citado.

No exemplo de JS externo é utilizado um recurso mais moderno para resolver tal problema, o atributo `defer`, o qual diz ao navegador para continuar baixando o centúdo HTML uma vez que a ta `<script>` é alcançada. Neste caso tanto o script quanto o HTML serão carregados simultaneamente.

Uma maneira mais antiga de solucionar esse problema de ordem de carregamento, era inserir o elemento `script` ao fim do `body`, garantindo que o código JS só seria carregado após todo o HTML. Porém, em sites maiores e mais pesados, deixar para carregar todos os scripts juntamente pode causa problemas de desempenho, conhecido como `bloqueio de script`.

Além do `defer` existe outro recurso moderno para lidar com o problema de bloqueio de script: `async`. Os scripts carregados com este último atributo citado irão baixar o script sem bloquear a página enquanto o script é *buscado*. Entretanto, uma vez que o download está completo o script será executado, o que bloqueia a renderização da página. Com o `async` não há garantia de que o script será executado em uma ordem específica. Portanto, é recomendável utilizar o `async` quando os scripts executam de forma independente entre si.

Os scripts carregados com o atributo `defer` irão carregar na ordem em que aparecem na página. Não serão executados enquanto o conteúdo da página for todo carregado. Isto pode ser útil se os scripts dependem do DOM estar carregado (por exemplo, se vão modificar um ou mais elementos da página).

Representação visual dos diferentes métodos de carregamento e o que significam para a página:

![loading methods](imagens/async-defer.jpg)

Leve em consideração o seguinte exemplo:

```js
<script async src="js/vendor/jquery.js"></script>
<script async src="js/script2.js"></script>
<script async src="js/Script3.js"></script>
```

Não há garantia de que `jquery` seja carregado antes de `script2` ou `script3`. E se qualquer deles depender de `jquery`, acontecerá um erro durante a execução. Se no lugar `async` estivesse escrito `defer`, então haveria a garantia de que a execução seguirá a ordem de aparecimento.

<br>

### **Comentários**

Um código JS também pode conter comentários, os quais serão ignorados pelo navegador e não serão executados.

Existem dois tipos de comentário: linha único e bloco. Comentários de linha única são precedidos por duas barras `//`, enquanto um bloco de comentários (os quais podem preencher várias linhas) são precedidos por `/*` e finalizados com `*/`.