// Write your solution here!
function cats (){
    cats = ["Milo", "Otis", "Garfield"];
    return;
}
cats();

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

function destructivelyAppendCat(name){
    cats.push(`${name}`);
}

function destructivelyPrependCat(name){
    cats.unshift('Bob');
}


function destructivelyRemoveLastCat(name){
    cats.pop();
}

function destructivelyRemoveFirstCat(name){
    cats.shift();
}

function appendCat(name){
    const Broom = [...cats,name];
    return Broom;
}

function prependCat(name){
    const Arnold = [name, ...cats];
    return Arnold;
}

function removeLastCat(){
    const paka = cats.slice(0, 2);
    return paka;
}

function removeFirstCat(){
    const cat = cats.slice(1);
    return cat;
}