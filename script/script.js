const LOGIN = 'ADMIN';
const PASSWORD = '1q2w3e';


const autorize = () => {
    let userLogin;
    let userPassword;
    let isAuthSuccess = false;
    let i = 3;

    do {
        userLogin = prompt('Логин: ');
        if (!userLogin) {
            alert ('Введите логин');
            continue;
        }

        userPassword = prompt('Пароль: ');
        if (!userPassword) {
            alert ('Введите пароль');
            continue;
        }

        if ((userPassword !== PASSWORD) || (userLogin !== LOGIN)) {
            while (i) {
            alert(`Данные неверны. Осталось ${i} попыток`);
            i--;
            break;
            } 
        }

        if ((userPassword === PASSWORD) && (userLogin === LOGIN)) {
            isAuthSuccess = true;
        }

    } while (!isAuthSuccess );


    alert ('welcome');

};

autorize ()


// Пункт 2

let userNumber = Number(prompt ('Укажите первое число "от" из промежутка чисел'));

let userNumber2 = Number(prompt ('Укажите второе число "до" из промежутка чисел'));


next: for (let i = userNumber; i < userNumber2; i++) {
    for (let j = 2; j < i; j++){
        if (i % j == 0) continue next;
        console.log ( 'i', i )
    }
}
