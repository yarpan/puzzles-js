// Задача 1. Определить сколько раз каждый элемент встречается в массиве.
// Имеется исходный массив:
// const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];
// Требуется получить ответ в следующем формате:
// {kiwi: 3, apple: 2, orange: 1}

const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];
const count = {};
fruits.forEach(f => {
  if (!count[f]) {
    // Текущий элемент отсутствует в объекте count
    count[f] = 1;
  } else {
    // Текущий элемент ранее был добавлен в объект count
    count[f] ++;
    }
});

console.log(count);
// Object { kiwi: 3, apple: 2, orange: 1 }