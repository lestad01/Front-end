/* Вычисление дискриминанта и решения квадратного уравнения
a*x*x + b*x + c = 0
Даны параметры a b и c  для квадратного уравнения.
Нужно вывести возможные значения x этого уравнения*/


var a = 2;
var b = 5;
var c = 2;

var d = b * b - 4 * a * c;

if (d < 0) {
    console.log('Квадратное уравнение решено не верно!');
} else if (d === 0){
    var x = - b/ (2 * a);
    console.log('Уравнение имеет одно решение,: x =' + x);
} else {
    var dRoot = Math.sqrt(d);
    var x1 = (- b + dRoot) / (2 * a);
    var x2 = (- b - dRoot) / (2 * a); 
    console.log(`Квадратное уравнение имеет 2 решения\nx1 = ${x1}\nx2 = ${x2}`);
}
// Определяем день недели как выходной или рабочий день

var day = 'куёрник';

switch (day){
  case 'Понедельник':
  case 'Вторник':
  case 'Среда':
  case 'Четверг':
  case 'Пятница':
    console.log('Рабочий день');
    break;
  case 'Суббота':
  case 'Воскресенье':
    console.log('Выходной день');
    break;
  default :
    console.log('Не слыхал про такое название, что это такое '+ day  + '?');
    break;
}
//
// Определение нечетности числа

let num = 33;

if (num % 2 === 0){
  console.log(`Число ${num} - чётное`);
} else {
  console.log(`Число ${num} - нечётное`);
}
