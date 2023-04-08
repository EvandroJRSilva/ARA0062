# Java Script Tutorial[^1]

[^1]: Material traduzido e adaptado de [JavaScript Tutorial](https://www.w3resource.com/javascript/javascript.php).

## O que é um *script*?

Um `script` é uma lista de comandos executáveis como uma `macro` ou um conjunto de arquivos criados por uma linguagem de script. `Scripts` (como `PHP`, `Perl`) que são executados em um `servidor web` são chamados de scripts `server-side`, e scripts (como o `JavaScript`[^2]) que são executados no computador de um usuário, interpretados pelo navegador, são chamados de scripts `client-side`.

[^2]: [Uma breve história do JavaScript](https://www.youtube.com/watch?v=aX3ZABCdC38&t=21s).

<br>

### O que é JavaScript?

`JavaScript` é uma linguagem de script orientada a objeto e multiplataforma desenvolvida pela `Netscape`. O JavaScript foi criado pelo programador da Netscape **Brendan Eich**.

Foi lançado primeiramente sob o nome `LiveScript`, como parte do `Netscape Navigator 2.0` em Setembro de 1995, e depois renomeado como JavaScript em 4 de Dezembro de 1995. Foi desenvolvido para o uso em páginas web com forte integração com HTML.

O JavaScript pode criar aplicações que são executadas em navegadores como o Edge, Opera, FireFox, Google Chrome, etc. A Netscape submeteu o JavaScript ao ECMA International para padronização, o que resultou na versão padronizada chamada `ECMAScript`.

<br>

### JavaScript e Java

`JavaScript` e `Java`  são similares em algumas situações, porém são fundamentalmente diferentes. Java é uma linguagem de programação desenvolvida pela `Sun Microsystems`, enquanto o `JavaScript` é uma linguagem de script desenvolvida pela `Netscape`. Java é uma linguagem `server-side` e de tipagem estática, enquanto o JavaScript é uma linguagem `client-side` e dinamicamente tipada. Os programas em Java são compilados no servidor e executados em quase todas as plataformas sem que seu código-fonte seja distribuído, enquanto que os scripts escritos em JavaScript estão escritos dentro de um documento HTML e são interpretados pelo navegador. A sintaxe e palavras reservadas são também diferentes em ambas as linguagens.

**Comparação entre JavaScript e Java**:

| **JavaScript** | **Java** |
| --- | --- |
| É usado para desenvolvimento web `front-end` (por exemplo, validação de um campo em um formulário HTML) | É usado como uma linguagem `back-end` dentro de um ambiente web. |
| Interpretado pelo cliente | `Bytecodes` compilados são baixados do servidor e executados no cliente. |
| Orientado a objetos. Sem distinção entre os tipos de objetos. A `herança` acontece através do mecanismo de protótipo, e as propriedades e métodos podem ser adicionados a qualquer objetado de forma dinâmica. | Baseado em classes. Os objetos são divididos em classes e instâncias (das classes), e a ação da `herança` acontece através da hierarquia entre as classes. Classes e instâncias não podem ter propriedades ou métodos adicionados de forma dinâmica. |
| Os tipos de dado das variáveis não são declarados. | Os tipos de dado das variáveis precisam ser declaradas, uma vez que o Java mantém uma forte checagem de tipo. |

---

## Visão geral do JavaScript

Cada página web é uma coleção de vários elementos individuais os quais são chamados de `objetos` (ex.: imagem, link, etc.).

O JavaScript é capaz de controlar a aparência de vários objetos. Por exemplo, você pode abrir novas páginas em janelas personalizadas, onde você pode especificar o tamanho e determinar se elas possuam barras de rolagem, etc.

Com o JavaScript é possível:

* Responder a ações do usuário nas páginas web
  * O JavaScript pode controlar os objetos nas páginas em resposta a várias ações dos usuários, as quais são chamadas de `eventos`. Por exemplo, mostrar uma caixa de diálogo quando o usuário clicar em um botão, ou abrir uma nova página, modificar a aparência de um link quando o usuário passar o mouse por cima, ou controlar a cor de fundo das páginas web.
* Mostrar variados formas de hora e data
  * A linguagem possui a habilidade de pegar a data e hora do sistema e mostrá-los em variados formatos através de seu objeto interno para datas.
* Fazer cálculos
  * O JavaScript pode realizar uma grande variedade de cálculos matemáticos. Ele possui uma biblioteca com todas as constantes e funções matemáticas necessárias. Essas funções podem ser aplicadas de diferentes formas. Por exemplo, em uma transação financeira online é possível calcular os valores subtotal, total, etc. É possível também criar jogos ou simulações com funções matemáticas avançadas, como seno e coseno.
* Validar dados de formulário
  * Dados como nomes, endereços, URLs, e-mails, números de telefone, CEPs, etc., podem ser validados com JavaScript antes de enviados a um servidor. Quaisquer erros podem ser imediatamente avisados ao usuário.
* Criar `cookies`
  * Um `cookie` é um mecanismo em uma página web consistindo em um trecho de texto para guardar alguma informação útil/necessária. O cookie é armazenado na máquina do usuário para reutilização automática nas próximas vezes em que o usuário acessar a página.
* Detectar o navegador do usuário
  * O JavaScript pode detecer o navegador utulizado pelo usuário e, a partir disso, carregar os objetos apropriados para aquele navegador específico.
* HTML Dinâmico
  * O HTML Dinâmica, ou DHTML, é uma coleção de tecnologias usadas em conjunto para deixar uma página web interativa e animada. São utilizados em conjunto JavaScript, HTML, DOM (*Document Object Module*) e CSS.

<br>

### JavaScript e ECMA

O JavaScript é uma linguagem multiplataforma orientada a objetos desenvolvida pela Netscape, e foi primeiramente utilizado nos navegadores da Netscape. Entretanto, a Netscape trabalhou com a ECMA (*European Computer Manufacturers Association*) para entregar uma linguagem de programação internacional e padronizada baseada no número do JavaScript.

A ECMA é uma associação internacional de padronização para sistemas de informação e comunicação. Sua versão padronizada do JavaScript, chamada ECMAScript, se comporta da mesma forma em todas as aplicações que suportam o padrão.

As empresas podem utilizar a linguagem padronizada aberta para desenvolver sua implementação do JavaScript. A primeira versão da padronização da ECMA foi documentada na especificação ECMA-262. O padrão ECMA-262 é também aprovada pela ISO (*International Organization for Standardization*) como ISO-16262.

Para saber a versão do JavaScript suportada pelo seu navegador, execute o [JSVersion.html](JSVersion.html), disponibilizado na mesma pasta deste documento.

---

## Embutindo código JavaScript no HTML

O `HTML` possui um elemento `script` o qual é utilizado para englobar códigos script.

```html
<script>
    Código JavaScript ...    
</script>
```

Seus quatro principais atributos são: `language`, `src`, `defer` e `type`.

O atributo `language` é usado para especificar a linguagem de script e sua versão. Se um navegador não suporta a versão do JavaScript especificada o código é ignorado. Se esse atributo não for especificado, o comportamento padrão vai depender da versão do navegador. Por fim, esse atributo foi descontinuado (*deprecated*) a partir do HTML 4.01. Ex.:

```html
<script language = "JavaScript1.2">
    Código ...
</script>
```

O atributo `src` especifica a localização de um script externo. É um atributo útil para compartilhamento de funções entre diferentes páginas. Arquivos externos de JavaScript possuem a extensão `.js`. Ex.:

```html
<script src = "common.js">
    Código ...
</script>
```

Se o atributo `defer` for configurado, o navegador atrasa a execução do script ou muda a ordem de execução. Pode melhorar o desempenho ao atrasar a execução de scripts até que o conteúdo do `body` seja lido e mostrado pelo navegador.

O atributo `type` especifica a linguagem de script. A linguagem é especificada como um tipo de conteúdo (ex.: "text/javascript"). É um atributo suportado pelos navegadores modernos. Ex.:

```html
<script type = "text/javascript">
    Código ...
</script>
```

O código `JavaScript` é embutido geralmente dentro da tag `head` e/ou da tag `body`. Quando o script está na tag `head`, sua execução se dará assim que a página for carregada. Exemplos:

Script em `head`

```html
<!DOCTYPE html>
    <head>
        <meta charset="utf-8">
        <title>>Script em head</title>
        <script type="text/javascript">
            Código ...
        </script>
    </head>
    <body>
    </body>
</html>
```

Script em `body`

```html
<!DOCTYPE html>
    <head>
        <meta charset="utf-8">
        <title>>Script em body</title>
    </head>
    <body>
        <script type="text/javascript">
            Código ...
        </script>
    </body>
</html>
```

Script em `head` e `body`

```html
<!DOCTYPE html>
    <head>
        <meta charset="utf-8">
        <title>>Script em body</title>
        <script type="text/javascript">
            Código ...
        </script>
    </head>
    <body>
        <script type="text/javascript">
            Código ...
        </script>
    </body>
</html>
```

Dois scripts em `body`

```html
<!DOCTYPE html>
    <head>
        <meta charset="utf-8">
        <title>>Script em body</title>
    </head>
    <body>
        <script type="text/javascript" src="jsexemplo.js"></script>
        <script type="text/javascript">
            Código ...
        </script>
    </body>
</html>
```

---

## Sintaxe

* `JavaScript` é uma linguagem `case-sensitive`, ou seja, uma variável escrita **Assim** é diferente de uma escrita **assim**.
* O ponto e vírgula `;` não é obrigatório quando as sentenças são escritas em linhas separadas. Entretanto, se duas sentenças são escritas na mesma linha, então é necessária sua utilização.
* Para comentar uma linha, basta duas barras `//`. Para um comentário com várias linhas deve começar com `/*` e finalizar com `*/`.
* Sempre declarar variáveis com a palavra reservada `var`, no topo do seu escopo (ou seja, no início de um bloco de código). A declaração de uma variável por linha é encorajado; além disso, é boa prática declarar as variáveis sem valor inicial por último. Ex.:

```javascript
var x = 1;
var y = 2;
var z = true;
var a;
var b;
```

<br>

### Hoisting

As declarações de variáveis são *hoisted* ou *içadas* ao topo do seu escopo, mas não seus valores. Ex.:

```javascript
/* A declaração de variável após a mesma ser referenciada
vai funcionar devido ao "içamento" de variável. Nota: o valor
"true" não será içado. */
function exemplo()
{
    console.log(declaradoMasNaoAssinalado); // => indefinido
    var declaradoMasNaoAssinalado = true;
}
```

<br>

### Tipos de dados

O `JavaScript` reconhece os seguintes tipos de dados (dinamicamente).

| **Tipo** | **Descrição** | **Exemplo** |
| --- | --- | --- |
| String | Uma série de caracteres envoltos por aspas simples ou duplas. | "estacio.br", 'estacio.br' |
| Números (Numbers) | Qualquer valor numérico, positivo ou negativo. | 45, 1512, -521, 23.152, -125.12, 10e5, 2E-3 |
| Lógicos (booleanos) | Valores lógicos verdadeiro ou falso. | `true`, `false` |
| `null` | Um valor especial que significa vazio ou nada. | |
| `undefined` | Uma propriedade de alto nível cujo valor é indefinido. | |

Um objeto pode ser criado a partir da união dos dados:

```javascript
var estudante = {
    Primeiro-nome : "Fulano",
    Sobrenome : "Silva",
    Periodo : 5,
    Aprovado : false
}
```

<br>

### Conversão de tipos de dados

`JavaScript` é uma linguagem `dinamicamente tipada` e `fracamente tipada`. Isso significa que não há necessidade de se declarar o tipo de uma variável, e durante a execução, os tipos são convertidos como necessários. Exemplos:

```javascript
var idade = 21
```

Vamos mudar o tipo da variável `idade`:

```javascript
idade = "Qual sua idade?"
```

Valores de diferentes tipos são convertidos automaticamente

```javascript
x = "Qual sua idade?" + 21 // retorna "Qual sua idade?21"
y = 21 + " é minha idade" // retorna "21 é minha idade"
...
"21" - 7 // retorna 14
"21" + 7 // retorna "217"
"21" + "7" // retorna "217"
"21" * 7 // retorna 147
"21" / 7 // retorna 3
```

<br>

### Arrays

Um `array` é uma lista de expressões, onde cada expressão é um elemento. A lista é feita com um par de colchetes `[ ]`.

Criando um array vazio:

```javascript
var frutas = [];
```

Criando um array com quatro elementos:

```javascript
var frutas = ["Laranja", "Maçã", "Pêra", "Uva"];
```

É possível criar arrays com elementos não especificados:

```javascript
var frutas = ["Laranja", , "Uva"];
// frutas[0] é Laranja
// frutas[1] é indefinido
// frutas[2] é Uva
```

Uma vírgula à esquerda é significativa, mas à direita não:

```javascript
var frutas = [, "Maçã", , "Uva",];
// frutas[0] é indefinido
// frutas[1] é Maçã
// frutas[2] é indefinido
// frutas[3] é Uva
// frutas[4] não existe, pois a vírgula no fim foi ignorada
```

<br>

### Caixas de diálogo

Três caixas de diálogos simples e bastante utilizadas: [`alert`](AlertExemplo.html), [`prompt`](PromptExemplo.html) e [`confirm`](ConfirmExemplo.html).

O `alert` serve para enviar um alerta. O `prompt` permite interação com o usuário. O `confirm` apresenta uma caixa de diálogo com dois botões, `OK` e `Cancel` e um texto como parâmetro. Se o usuário clicar no primeiro, a função `confirm()` retorna `true`.

---

## Próxima(s) aula(s)

Finalizamos hoje por aqui.

Na próxima aula:

* [Ler e escrever em um HTML](https://www.w3resource.com/javascript/HTML-write-read/read-from-and-write-to-HTML-document.php);
* [Operadores do JavaScript](https://www.w3resource.com/javascript/operators/arithmetic-addition-subtraction-multiplication-division.php);
* [Blocos do JavaScript](https://www.w3resource.com/javascript/statements/block.php);
* [Funções](https://www.w3resource.com/javascript/functions/javascript-function.php);
* [Objetos em JavaScript](https://www.w3resource.com/javascript/object-property-method/working-with-objects.php);
* [Objetos nativos do JavaScript](https://www.w3resource.com/javascript/object-property-method/core-object.php);
* [Validação de formulário](https://www.w3resource.com/javascript/form/javascript-form-validation.php);
* [Cookies](https://www.w3resource.com/javascript/cookies/introduction-cookies.php);
* [Lidando com erros](https://www.w3resource.com/web-development-tools/debug-JavaScript-with-Firebug.php);
* [Exercícios](https://www.w3resource.com/javascript-exercises/).