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


// ACTION-CREATORS----

export const actionTypes = {
  add: "add",
  delete: "delete",
  update: "update",
  status: "status"
}

export const actionCreators = {
  add: (payload) => ({
    type: actionTypes.add,
    payload
  }),
  delete: (payload) => ({
    type: actionTypes.delete,
    payload
  }),
  update: (payload) => ({
    type: actionTypes.update,
    payload
  }),
  status: (payload) => ({
    type: actionTypes.status,
    payload
  }),
}

