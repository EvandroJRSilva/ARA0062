const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

var storyText = 'Estava 35 graus celsius lá fora, então :insertx: saiu para caminhar. ' +
'Quando eles chegaram a :inserty:, eles ficaram horrorizados por uns instantes, então :insertz:. ' +
'Bob viu tudo, mas não ficou surpreso - :insertx: pesa 300 quilos, e o dia estava quente.';

const insertX = ['Saci Pererê', 'Curupira', 'Boto Cor-de-Rosa', 'Dona Anastácia', 'Cuca'];
const insertY = ['Sítio do Picapau Amarelo', 'Estácio', 'Casa da Mãe Joana', 'Riverside', 'G3 Telecom'];
const insertZ = ['pegou fogo', 'nadou no seco', 'voou pelo cano', 'caiu pra cima', 'facilitou a prova do Evandro'];

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

randomize.addEventListener('click', result);

function result() {
    var newStory = storyText;
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);

    if(customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace('Bob', name);
    }

    if(document.getElementById("pt").checked) {
        const weight = Math.round(300 * 2.2046) + ' libras';
        const temperature =  Math.round(35*1.8 + 32) + ' Farenheit';

        newStory = newStory.replace('35 graus celsius', temperature);
        newStory = newStory.replace('300 quilos', weight);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}