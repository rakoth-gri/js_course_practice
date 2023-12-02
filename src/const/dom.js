export const TODOS_CONTAINER = document.querySelector(".todos");
export const FORM = document.forms[0];
export const FILTER_TRIGGER = document.querySelector(".filter__trigger");
export const FILTER = document.querySelector(".filter");

export const FILTER_LIST = [
    {
        id: "all",
        type: "checkbox",
        value: "all",
        text: "Все"
    },
    {
        id: "executed",
        type: "checkbox",
        value: "executed",
        text: "Выполненные"
    },
    {
        id: "unexecuted",
        type: "checkbox",
        value: "unexecuted",
        text: "Невыполненные"
    }
]

