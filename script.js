let name = prompt ('Введите свое имя')
let age = +prompt ('Введите свой год рождения')
let year = +prompt ('Введите нынешний год')

function overall(n, a, y) {
    let total = ( y - a );
    let overall = (' Имя - ' + n  +  ' Ваш возраст - ' + total)
    return overall;  
}

alert(overall(name, age, year));
