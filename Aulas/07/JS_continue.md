# JavaScript - Continuação

Vamos recomeçar, dessa vez seguindo o [tutorial da W3 Schools](https://www.w3schools.com/js/default.asp).

---

## Nota rápida sobre DOM

`DOM` (*Document Object Model*), ou Modelo de Documento de Objetos em tradução livre, é uma interface que permite a scipts e programas acessarem e atualizarem conteúdos (ex.: texto, imagem, etc.), estrutura e estilo de documentos HTML, XHTML e XML de forma dinâmica.

O documento é tratado como uma árvore onde cada nó representa uma parte do documento. Quando um navegador carrega um arquivo HTML, esse documento é transformado em um Documento de Objetos. A partir disso é possível acessar, manipular e formatar os elementos com JavaScript e CSS, através do elemento `<script>`.

Exemplo de um documento HTML e seu DOM correspondente:

```html
<!DOCTYPE html>
<html lang="pt-bt">
    <head>
        <meta charset="utf-8">
        <title>Um documento HTML simples</title>
    </head>
    <body>
        <h1>Este é um documento HTML simples</h1>
        <p>Tutorial traduzido e adaptado de w3resource</p>
    </body>
</html>
```

![DOM representation](imagens/dom.png "https://www.w3resource.com/w3r_images/dom.png")

---

## Introdução

Vejamos algumas possibilidades que o JavaScript fornece aos programadores.

1. Modificar conteúdo de um documento HTML: [exemplo 01](exemplos/exemplo01.html).
2. Modificar os valores dos atributos em um documento HTML: [exemplo 02](exemplos/exemplo02.html).
3. Modificar o estilo do HTML (CSS): [exemplo 03](exemplos/exemplo03.html).
4. Apagar/esconder elementos HTML: [exemplo 04](exemplos/exemplo04.html).
5. Fazer aparecer elementos HTML: [exemplo 05](exemplos/exemplo05.html).

---

## Onde inserir o código do JavaScript

Em um documento HTML, o código JavaScipt é inserido entre as tags `<script>` e `</script>`. Exemplo:

```html
<script>
    document.getElementById("demo").innerHTML = "Meu primeiro JavaScript";
</script>
```

Exemplos antigos de `JavaScript` utilizam o atributo `type`: `<script type="text/javascript">`. Este atributo pode ser omitido, uma vez que o JavaScript é a linguagem de script padrão do HTML.

Contanto que esteja dentro da tag `<script>`, o código do `JavaScript` pode ser adicionado no `head` e/ou no `body`. E de forma similar ao CSS, em vez de ter o código dentro do documento HTML, o código pode estar em uma arquivo separado (.js) e ser chamado em uma tag `<script>`.

* [JS no head](exemplos/exemplo06.html).
* [JS no body](exemplos/exemplo07.html).
* Um script externo pode ser referenciado de 3 formas diferentes:
  * [Através de uma URL (endereço web)](exemplos/exemplo08.html).
  * Através de um caminho de arquivo completo (ex.: /js/arquivo.js).
  * Somente o nome do arquivo, sem o caminho (ex.: arquivo.js). Nesse caso espera-se que o arquivo esteja na mesma pasta que o documento HTML.

---

## Saída (output) do JavaScript

Existem algumas possibilidades para apresentar uma saída com JavaScript:

* Escrevendo em um elemento HTML usando `innerHTML`: [exemplo 09](exemplos/exemplo09.html).
* Escrevendo na saída do HTML usando `document.write()`: [exemplo 10](exemplos/exemplo10.html).
  * Usar `document.write()` após um documento HTML ser carregado faz com que todo o HTML seja apagado: [exemplo 11](exemplos/exemplo11.html).
* Escrevendo em uma caixa de alerta usando `window.alert()` : [exemplo 12](exemplos/exemplo12.html).
  * A palavra reserva `window` pode ser omitida. Isso acontece porque o `objeto window` é o objeto de escopo global (lembra do DOM?). Ou seja, as variáveis, propriedades e métodos pertencem ao `objeto window` por padrão.
* Escrevendo no console do navegador usando `console.log()`: [exemplo 13](exemplos/exemplo13.html).

O JavaScript não possui qualquer método ou objeto `print`. Por isso não é possível acessar dispositivos de saída a partir do JavaScript. A única exceção é o método `window.print()` no navegador para [imprimir o conteúdo da aba/janela aberta](exemplos/exemplo14.html).

---

## Comandos e Sintaxe JavaScript

Os comandos de `JavaScript` são compostos por: valores, operadores, expressões, palavras reservadas e comentários. Ex.:

```js
let x, y, z;  // comando 1
x = 5;        // comando 2
y = 6;        // comando 3
z = x + y;    // comando 4

document.getElementByID("demo").innerHTML = "O valor de z é " + z + ".";
```

Um ponto e vírgula `;` separa comandos diferentes. É comumente utilizado ao fim de cada linha, uma vez que o mais comum é haver um comando por linha. Contudo, é possível a escrita de vários comandos em uma mesma linha, quando separados por ponto e vírgula.

Na maioria dos comandos podemos ver uma ou mais `palavras reservadas`. Essas palavras identificam alguma ação em específico. Uma breve lista de palavras reservadas e suas respectivas descrições:

| Palavra Reservada | Descrição |
|---|---|
| var | Declara uma variável |
| let | Declara uma variável de bloco |
| const | Declara uma constante |
| if | Marca um bloco de comandos a serem executados sob uma codição |
| switch | Marca um bloco de comandos a serem executados em diferentes casos |
| for | Marca um bloco de comandos a serem conduzidos em um loop |
| function | Declara uma função |
| return | Retira a execução do programa de uma função |
| try | Implementa a manipulação de erros a um bloco de comandos |

Além das palavras reservadas temos os identificadores (ou seja, os nomes) de variáveis. Tais identificadores podem ser simples, como apenas uma letra, ou mais complexos, contendo algum significado. Neste último caso o identificador pode ser composto por mais de uma palavra. Nessa situação, o mais comum é utilizar o `lower camel case`, ou seja, uma padronização de escrita em que a primeira palavra do nome é escrita totalmente em minúsculo, e cada nova palavra é acrescida com a primeira letra em maiúsculo. Ex.: 

```js
var primeiroNome;
```

Muitas vezes precisamos descrever ou explicar algumas linhas de código, ou ainda (por questões de teste) impedir com que algumas linhas não sejam executadas. Em situações como essas podemos comentar o código. Em JavaScript os comentários são feitos ao se adicionar duas barras `//`. Quando o programador tiver a necessidade de um bloco de comentário, ou seja, um comentário de várias linhas, basta inserir `/*` no começo e finlizar com `*/`.

A tabela apresentada anteriormente pode ter levantado uma dúvida: qual a diferença entre `var` e `let`?

Ambas são palavras reservadas para declaração de variável. Porém, quando uma variável é declarada com `var`, seu escopo engloba toda uma função, ao passo que o escopo de uma variável declara com `let` é mais local. Ex.:

```js
var x; // escopo maior
{
  let y;  // escopo local de um bloco
}
```

O JavaScript permite que uma variável declarada com `var` seja redeclarada e reassinalada, além de ser utilizada antes de sua declaração (através do mecanismo de `hoisting` ou `içamento`). Uma variável declarada com `let` não pode ser redeclarada, porém, o mesmo nome pode ser reutilizado quando for declarado em escopo diferente. Ex.:

```js
var x = 2; // permitido
var x = 3; // permitido
let y = 2;

{
  let y = 3; // esse y é uma variável diferente do y anterior
}
```

As mesmas regras de declaração e `hoisting` sobre o `let` também se aplicam a `const`. Neste caso, o `hoisting` faz com que determinada variável ou identificador seja içado, no sentido de o interpretador ter ciência de sua existência. Porém, as variáveis ou valores declaradas como `let` ou `const` não podem ser utilizados antes de sua declaração.

Quanto ao `const`, o mesmo deve ser utilizado ao se declarar:

* Um novo array;
* Um novo objeto;
* Uma nova função;
* Uma nova expressão regular.

O `const` não define um valor constante. Ele define uma referência constante a um valor. Por causa disso ele não permite:

* Reassinalamento de um valor constante;
* Reassinalamento de um array constante;
* Reassinalamente de um objeto constante.

Porém é permitido:

* Modificar os elementos de um array constante;
* Modificar as propriedades de um objeto constante.

Ex.:

```js
const cars = ["Saab", "volvo", "BMW"];

// É possível modificar um elemento
cars[0] = "Toyota";

// É possível adicionar um elemento
cars.push("Audi");

// Mas não é possível reassinalar o array, ou seja, o código abaixo resultará em erro
cars = ["Volkswagen", "Fiat", "Ferrari"];
```