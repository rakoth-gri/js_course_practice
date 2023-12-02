# Проект TODO LIST без фреймворков

## Содержание курса:
+ Знакомство c проектом. (GITHUB). Исходники: HTML, СSS, JS(Константы), GOOGLE FONTS/GOOGLE ICONS, cтруктура папок;
+ Выбранная Архитектура (паттерны и циклические зависимости)
+ Создаем объект стора (можно переписать на класс со статическими методами):
    1. Свойства: **todos**, **isUpdated**, **subscribers**;
    2.  Методы: **add**, **delete**, **setIsUpdated**, **getState**
    <br>
    <br>
+ Упрощенный вариант паттерна **"Наблюдатель"** .Реализуем отправку функции-callback в массив подписчиков (****store**.subscribers**);
+ Пишем класс Todo (часть 1): **constructor**, **addListenerToContainer**, **render**;
+ Пишем класс Todo (часть 2): **containerHandler(главный контроллер класса)**, **addUpdatedClass**;
+ Пишем обработчик формы: 
    1. Отмена поведения по-умолчанию
    2. Создание todo при помощи утилиты **createTodo**
    3. Проверка заполненности объекта todo
    4. Добавление todo в состояние
    5. Сортировка todo при помощи утилиты **getSortedTodos**
    6. Добавляем **getSortedTodos** в функцию-callback
    7. Реализуем утилиту очистки формы "formReset"
    <br>
    <br>    
+ Создаем функционал для обновления существующих todo:
    1. Расширяем утилиту **createTodo**, добавляем параметр **store** и обновляем todo из свойства **isUpdated**
    2. Расширяем метод **containerHandler** класса Todo, обрабатывая клик по иконке обновления
    3. Добавляем в **store** метод **update**
    <br>
    <br>
+ Создаем функционал для метода Filter
    1. Реализуем утилиту фильтрации **"filterTodos"**, не мутрирующую исходный массив
    2. Добавляем в **store** метод **filter**     
+ Пишем класс Filter: **constructor**, **addListenerToContainer**, **render**, **containerHandler(главный контроллер класса)**;
+ Реализуем открытие окна фильтра, при клике на кнопку-триггер
+ Работаем с **localStorage**

## Структура классов в приложении:

```javascript
export default class Name {
  constructor(container, store, ...args) {
    // объявляем свойства экземпляра
    this.$container = args[0];
    this.store = args[1];
    ...    
   
    // Вызов методов Класса из конструктора:
    // methodN()
    this.render(this.$container, someData);
    this.addListenerToContainer();
  }

  render(container, data) {
    // Checking data code...

    let html = "";

    data.forEach((data) => {
      html += `
                Some HTML TEMPLATE         
            `;
    });

    container.innerHTML = html;
  }

  containerHandler(e) {
    // MAIN LOGICAL CODE OF THE CLASS
  }

  method_1(...args) {
    // SOME LOGIC
  }

  ...   

   method_N(...args) {
    // SOME LOGIC
  }

  addListenerToContainer() {
    this.$container.addEventListener("click", this.containerHandler);
  }
}
```