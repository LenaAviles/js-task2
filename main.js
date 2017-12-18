

// 1) Реализовать функцию, которая проверяет, является ли входной параметр фразой-
// палиндромом. Функция должна уметь проверять фразы вида «Муза! Ранясь шилом опыта,
// ты помолишься на разум.», т.е. игнорировать регистр символов, проверять только
// символы и цифры.

// var str = prompt("Enter a palindrome", "Муза! Ранясь шилом опыта, ты помолишься на разум.");

// function isPalindrome(str) {
// 	var re = /[^A-Za-zА-Яа-я0-9_]/g;
// 	var lowerStr = str.toLowerCase().replace(re, '');	
// 	return lowerStr === lowerStr.split('').reverse().join('');	
// }

// console.log(isPalindrome(str));

// if (isPalindrome(str)) {
// 	document.write("Yes, this is a palindrome!");
// } else {
// 	document.write("No, this is not a palindrome!");
// }

// 2) Дан массив наблюдений за температурой воздуха. Каждый элемент массива
// является объектом вида, имеющем три свойства: date, time, temp. Пример объекта:
// {date: “2017-12-12”, time: “08:00”, temp: 4 }
// Пример массива:
// [
// {date: “2017-12-12”, time: “08:00”, temp: 4},
// {date: “2017-12-12”, time: “02:00”, temp: -4}
// ...
// ]
// Реализовать функцию, которая подсчитывает среднюю температуру за указанный
// месяц/год, день или интервал времени (две даты).

var date = prompt("Enter a date: “2017-12-12”, month: “2017-12”, year: “2017” or period: “2017-12-12”,“2017-12-15”", "2017-12-12");

var temp, tempArr;
var arr = [
	{date: "2017-12-12", time: "08:00", temp: 4},
	{date: "2017-12-12", time: "02:00", temp: -4},
	{date: "2017-12-13", time: "08:00", temp: 4},
	{date: "2017-12-14", time: "02:00", temp: 4},
	{date: "2017-12-15", time: "02:00", temp: 4},
	{date: "2018-12-12", time: "08:00", temp: 4},
	{date: "2018-12-12", time: "02:00", temp: -4}
]

var period = date.split(',');
if (period.length === 1) {
	tempArr = arr.filter(day => day.date.includes(date)).map(day => day.temp);		
} else {	
	var start = arr.findIndex(day => day.date.includes(period[0])) || 0;
	var end = arr.length - arr.reverse().findIndex(day => day.date.includes(period[1]));
	tempArr = arr.slice(start, end).map(day => day.temp);	
	console.log(tempArr);
}

temp = tempArr.reduce((sum, val) => sum + val) / tempArr.length;

document.write(`The average temperature for period is ${temp}`);


