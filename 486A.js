var positiveNumber = +readline();
print (Math.pow(-1, positiveNumber) === 1 ? positiveNumber/2 : -((positiveNumber+1)/2));

// Подсчёт функции (математика, реализация)

// Для положительного целого числа n определим функцию f:

// f(n) =  - 1 + 2 - 3 + .. + ( - 1) n n

// Ваша задача — посчитать f(n) для данного целого числа n.

// Входные данные
// В единственной строке записано положительное целое число n (1 ≤ n ≤ 1015).

// Выходные данные
// Выведите f(n) в единственной строке.

// Примеры
// входные данные
// 4
// выходные данные
// 2
// входные данные
// 5
// выходные данные
// -3
