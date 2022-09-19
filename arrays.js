// LISTAS

const names = ['Duda', 'Gabriel', 'João', 'Bernardo', 'Cristina', 'Maria', 20, false];

const joao = names[2];
console.log(joao)

names.push('Pedro'); //adicionar um elemento na lista
names.unshift(20); //adicionar no inicio da lista
names.pop(); //remove o elemento

names[4] = "Bê";
names[0] = "Vinte";

const indexOfCristina = console.log(names.indexOf('Cristina'));

const sortedNames = names.sort();
console.log(names)
console.log(sortedNames)

const reverseNames = names.reverse();
console.log(reverseNames);

//names é uma lista de nomes, para fazer com que só exista nomes nessa lista, deve-se utilizar TYPESCRIPT para ter uma TIPAGEM DE DADOS


//
// MAP, FILTER, REDUCE
//
const numbers = [1,2,3,4,5,6];

const numbersMultipliedByTwo = numbers.map(function(number){ //MAP FAZ UMA NOVA LISTA
    return number * 2
});

const numbersMultipliedByQuarter = numbers.map(function(number){ //MAP FAZ UMA NOVA LISTA
    return number * 4
});

console.log(numbers);
console.log(numbersMultipliedByTwo);
console.log(numbersMultipliedByQuarter);



// FILTER
// verificando se os numeros da lista são pares 
// evenAges = idade par
const ages = [8,13,14,17,34,40,37,54,75,27,84,86,104];

const evenAges =  ages.filter(function(ages){
    return ages % 2 === 0 //para ser ímpar é só colocar 1
});

console.log(evenAges);



// REDUCE
// SOMAR OS VALORES DE UMA LISTA

const sumOfAges = ages.reduce(function(age, accumulator){ //accumulator é o valor atual das acumulações
    return accumulator + age;
}, 0); //o zero é o numero de inicio, se fosse 1, o número final seria 594
console.log(sumOfAges);