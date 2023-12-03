const TODOS_CONTAINER = document.querySelector(".todos"),
  FORM = document.forms[0],
  FILTER_TRIGGER = document.querySelector(".filter__trigger"),
  FILTER = document.querySelector(".filter");

const FILTER_LIST = [
  {
    id: "all",
    type: "checkbox",
    value: "all",
    text: "Все",
  },
  {
    id: "executed",
    type: "checkbox",
    value: "executed",
    text: "Выполненные",
  },
  {
    id: "unexecuted",
    type: "checkbox",
    value: "unexecuted",
    text: "Невыполненные",
  },
];

export { TODOS_CONTAINER, FORM, FILTER_TRIGGER, FILTER, FILTER_LIST };

/*

[
    {
        id: Date.now().toString(),
        text: "HELLO WORLD",
        completed: false,
        date: new Date().toJSON()
    },
    {
        id: Date.now().toString(),
        text: "ANOTHER ... HELLO WORLD",
        completed: false,
        date: new Date().toJSON()
    }
]

*/
