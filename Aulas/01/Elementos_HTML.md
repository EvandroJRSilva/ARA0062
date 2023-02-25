# Os Elementos do HTML

Tradução livre de alguns trechos do [item 4 da documentação do HTML](https://html.spec.whatwg.org/#semantics). Não se trata de uma tradução extensiva, porém, apenas tradução de alguns trechos considerados mais importantes para introdução ao HTML.

Enquanto o arquivo não é finalizado, sugiro fortemente que você acesse a documentação do HTML atentando aos maiores detalhes. Isso vai te ajudar a se acostumar a ler em Inglês também!

<br>

## 1. O elemento `html`

O elemento `html` representa a raiz de um documento HTML.

Autores são encorajados a especificar o atributo `lang` (língua) no elemento raiz `html`, atribuindo a língua ao documento. Isso ajuda ferramentas de síntese de fala a determinar quais pronúncias usar, a ferramentas de tradução quais regras usar, e assim por diante.

Exemplo:

```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Canção de ninar</title>
    </head>
    <body>
        <h1>Canção de ninar</h1>
        <p>Nana neném, que a cuca vem pegar ...</p>
    </body>
</html>
```

<br>

## 2. Metadados do documento

Lista de elementos:

* `head`
* `title`
* `base`
* `link`
* `meta`
* `style`

Somente alguns dos elementos da lista serão mostrados com mais detalhes a seguir.

<br>

### 2.1 O elemento `head`

O elemento `head` representa uma coleção de metadados para o Documento.

Pode ser simples e curto, como o exemplo da seção anterior, ou mais longo. Exemplo:

```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <base href="https://www.exemplo.com.br/">
        <title>Um exemplo com um head longo</title>
        <link rel="estilo" href="default.css">
        <link rel="estilo alternativo" href="muito.css" title="Muito texto">
        <script src="suporte.js"></script>
        <meta name="nome-da-aplicação" content="Aplicação com head longo">
    </head>
</html>
```

<br>

### 2.2 O elemento `title`

O elemento `title` representa o título ou nome do documento. Os autores devem usar títulos que identificam seus documentos mesmo quando eles são usados fora de contexto, por exemplo, em um histórico de usuário ou bookmark, ou em resultados de busca. O título do documento é comumente diferente do que é escrito no primeiro cabeçalho, uma vez que o primeiro cabeçalho não precisa ser a única informação quando fora de contexto.

Não pode haver mais do que um elemento `title` por documento.

<br>

### 2.3 O elemento `meta`

Lista de atributos:
* [Atributos globais](https://html.spec.whatwg.org/#global-attributes)
* `name` &mdash; nome dos metadados
* `http-equiv` &mdash; [diretiva](https://pt.wikipedia.org/wiki/Diretiva)
* `content` &mdash; valor do elemento
* `charset` &mdash; declaração da codificação de caracteres
* `media` &mdash; mídia aplicável

O elemento `meta` representa vários tipos de metadados que não podem ser expressados usando os elementos `title`, `base`, `link`, `style` e `script`.

Exatamente um dos atributos `name`, `http-equiv`, `charset` e `itemprop` precisa ser especificado.

Se `name`, `http-equiv` ou `itemprop` for especificado, então o atributo `content` também precisa ser especificado. Caso contrário, deve ser omitido.

Não pode haver mais de um elemento `meta` com o atributo `charset` por documento.

<br>

### 2.4 O elemento `style`

Lista de atributos:

* [Atributos globais](https://html.spec.whatwg.org/#global-attributes)
* `media` &mdash; mídia aplicável
* `blocking` &mdash; se o elemento é potencialmente bloqueador de renderização
* `title` &mdash; quando usado neste elemento é configurado o nome do código CSS

O elemento `style` permite aos autores embarcar código CSS nos seus documentos.

<br>

## 3. Seções

Lista de elementos:

* `body`
* `article`
* `section`
* `nav`
* `aside`
* `h1` - `h6`
* `hgroup`
* `header`
* `footer`
* `address`

<br>

### 3.1 O elemento `body`

O elemento `body` representa os conteúdos de um documento.

<br>

## 4. Agrupamento de conteúdo

Lista de elementos:

* `p`
* `hr`
* `pre`
* `blockquote`
* `ol`
* `ul`
* `menu`
* `li`
* `dl`
* `dt`
* `figure`
* `figcaption`
* `main`
* `div`

<br>

## 5. Semântica em nível de texto

...

<br>

## 6. Conteúdo embarcado

...

<br>

## 7. Dados tabulares

...

<br>

## 8. Scripting

...
