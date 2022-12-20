const result = [];

function checkingElements (arrayOne, arrayTwo) {
    
    for(let i = 0; i < arrayOne.length; i++){
        if(!arrayTwo.includes(arrayOne[i])){
            result.push(arrayOne[i]);
        }
    }
    for(let j = 0;  j < arrayTwo.length; j++){
        if(!arrayOne.includes(arrayTwo[j])){
            result.push(arrayTwo[j]);
        } 
    }

    if(!Array.isArray(arrayOne) || !Array.isArray(arrayTwo)){
        console.log('Це не є масив.');
        return result;
    }

    return result;
}

checkingElements(['Lviv', 'Dnipro', 'Ternopil', 'London'], ['Dnipro', 'Paris', 'York', 'Ternopil']);
console.log(result);



