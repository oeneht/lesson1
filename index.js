'use strict';

let money = prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', new Date().toISOString().slice(0, 10));

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let a1 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    a2 = prompt('Во сколько обойдется?', ''),
    a3 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    a4 = prompt('Во сколько обойдется?', '');

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(`Вам понадобится ${appData.expenses.a1 / 30} рублей в день для ${a1}\n
и ${appData.expenses.a3 / 30} рублей в день для ${a3}`);