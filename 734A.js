var numberMatch = +readline();
var secuenceWins = readline();
var Anton = 0;
for (var match=0; match<numberMatch; match++) {
    secuenceWins[match]==="A" ? Anton++ : "";
}
if (numberMatch-Anton>Anton) {
    print("Danik");
} else if (numberMatch-Anton<Anton) {
    print("Anton");
} else {
    print("Friendship");
}

// Антон и Даник (реализация строки)

// Антону нравится играть в шахматы. Поэтому он часто играет в эту увлекательную игру со своим другом Даником.

// Однажды, Антон с Даником сыграли n партий подряд. Для каждой партии друзьям известно, кто в ней победил — Антон или Даник. При этом ни одна из партий не окончилась вничью.

// Антону стало интересно, кто же выиграл больше раз — он или Даник? Помогите Антону и определите это.

// Входные данные
// В первой строке входных данных находится единственное число n (1 ≤ n ≤ 100 000) — количество партий, которое сыграли Антон с Даником.

// Во второй строке входных данных находится строка s, состоящая ровно из n заглавных латинских букв «A» или «D» — исходы шахматных партий. При этом i-й символ строки s 
// равен «A», если в i-й партии победил Антон, или «D», если в i-й партии победил Даник.

// Выходные данные
// Если Антон выиграл большее количество партий, чем Даник, выведите «Anton» (без кавычек).

// Если Даник выиграл большее количество партий, чем Антон, выведите «Danik» (без кавычек).

// Если Антон и Даник выиграли поровну партий, выведите «Friendship» (без кавычек).

// Примеры
// входные данные
// 6
// ADAAAA
// выходные данные
// Anton
// входные данные
// 7
// DDDAADA
// выходные данные
// Danik
// входные данные
// 6
// DADADA
// выходные данные
// Friendship
// Примечание
// В первом примере Антон выиграл 6 партий, а Даник — всего одну. Следовательно, ответ — «Anton».

// Во втором примере Антон выиграл 3 партии, а Даник — 4. Значит, ответ — «Danik».

// В третьем Антон и Даник выиграли по 3 партии. Поэтому ответ — «Friendship».