export default  class Render {

    static controller(name, ...args) {
        switch (name) {
            case "Todo":
                Render[name](args)
                break;        
            default:
                Render[name](args)
                break;
        }
    }

    static Todo([container, data]) {

        if (!(data instanceof Array)) {
            throw new Error("ERROR DATA TYPE...");
        }
      
        container.innerHTML = data
            .map(
                ({ id, text, completed, date }) => `
                    <li class="todo" id="${id}">
                    <span class="todo__date">  ${new Date(date).toLocaleString()} </span>
                    <label class="${`todo__label ${completed ? "done" : ""
                                    }`}"> 
                        <input type="checkbox" class="todo__checkbox" id="${id}" ${completed ? "checked" : ""
              }>
                        <em class="todo__text"> ${text} </em>                                           
                    </label>
                    <button class="todo__btn"> 
                        <span class="material-symbols-outlined update" id="${id}"> edit_note</span> 
                        <span class="material-symbols-outlined delete" id="${id}"> delete</span>                    
                    </button>
                </li>`
            )
        .join("");
    }

    static Filter([container, data]) {
        if (!(data instanceof Array)) {
            throw new Error("ERROR DATA TYPE...");
        }

        const filterData = data.map(({id, text, value, type}) => {
            return `
            <li class="filter_li" id="${id}">
                <label class="filter_label">
                    <input type="${type}", value="${value}" class="filter_input"/>
                    ${text}
                </label>
            </li>  
            `
        }).join("")

        container.innerHTML = `<ul class="filter_ul"> ${filterData}</ul>`

    }
}










































// export default class Render {
//   static controller(className, ...args) {
//     switch (className) {
//       case "Todo":        
//         Render[className](args);
//         break;
//       default:
//         Render.draw(...args);
//         break;
//     }
//   }

//   static Todo([container, data]) {
    
//     if (!(data instanceof Array)) {
//       throw new Error("ERROR DATA TYPE...");
//     }

//     container.innerHTML = data
//       .map(
//         ({ id, text, completed, date }) => `
//                     <li class="todo">
//                         <span class="todo__date">  ${new Date(
//                           date
//                         ).toLocaleString()} </span>
//                         <label class="${`todo__label ${
//                           completed ? "done" : ""
//                         }`}"> 
//                             <input type="checkbox" class="todo__checkbox" id="${id}" ${
//           completed ? "checked" : ""
//         }>
//                             <em class="todo__text"> ${text} </em>                                           
//                         </label>
//                         <button class="todo__btn"> 
//                         <span class="material-symbols-outlined update" id="${id}"> edit_note</span> 
//                         <span class="material-symbols-outlined delete" id="${id}"> delete</span>                    
//                         </button>
//                     </li>    
//                 `
//       )
//       .join("");
//   }

//   static Filter([container, data]) {
//     if (!(data instanceof Array)) {
//       alert("ERROR DATA TYPE...");
//       return;
//     }

//     container.innerHTML = data.map(({}) => ``).join("");
//   }
// }
