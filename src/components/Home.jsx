// import { useEffect, useState } from "react";
// export default function Home() {
//   const [todolist, settodolist] = useState([]);
//   const [todoTitle, setTodoTitle] = useState("");
//   const data = {
//     id: Date.now().toString(),
//     title: todoTitle,
//     completed: false,
//   };
//   const handleAdd = async (data) => {
//     const response = await fetch("http://localhost:3001/todos", {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },

//     });
//     const newData = await response.json();
//     settodolist((prevState) => [...prevState, newData]);
//     setTodoTitle("");
//   };
//   const handleDelete = async (todoId) => {
//     console.log(todoId);
//     const response = await fetch(`http://localhost:3001/todos/${todoId}`, {
//       method: "DELETE",
//     });
//     settodolist((prevState) => {
//       return prevState.filter((todo) => {
//         return todo.id !== todoId;
//       });
//     });
//   };
//   const handleEdit = async (todoId) => {
//     console.log(todoId);
//     const response = await fetch(`http://localhost:3001/todos/${todoId}`, {
//       method: "PUT",
//     });
    
//   };

//   async function fetchtodolist() {
//     const response = await fetch("http://localhost:3001/todos");
//     const fetchedtodolist = await response.json();
//     settodolist(fetchedtodolist);
//   }

//   useEffect(() => {
//     fetchtodolist();
//   }, []);

//   console.log(todolist);
//   return (
//     <div class="flex justify-center bg-gray-800 w-screen h-screen">
//       <div class=" ">
//         <h2 class="text-3xl text-white mt-6 flex justify-center mr-10">Todo List</h2>
         
//          <div class=" px-10 h-96 mt-5 mx-auto">
//         <input type="mt-4 "  class=" px-5 " value={todoTitle} onChange={(e) => setTodoTitle(e.target.value)} />
//         <button class="ml-3 mt-4 bg-transparent hover:bg-green-400 text-white font-semibold hover:text-white py-2 px-3 border border-white hover:border-transparent rounded" 
//         value="add"
//         onClick={()=> handleAdd(data)}>
//          Add
//         </button>

//         <div class="flex justify-center mt-5 mr-20 ">
//         <ol class=" w-80 h-46 bg-gray-500 px-3 pb-3 rounded-lg">
//           {todolist.map((item) => (
//              <li>
//              <div class="flex items-center justify-between p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
//                <div>
//                  <input
//                    id="checkbox-item-11 "
//                    type="checkbox"
//                    value=""
//                    class="w-4 h-4   rounded "
//                  />
//                </div>
//                <p>{item.title}</p>
//                <div>
//                  <button
//                    type="button"
//                    class="text-black  bg-teal-200 hover:bg-teal-800 rounded-lg text-sm p-1.5 text-center inline-flex items-center me-2 "
//                    value="Edit"
//                    onClick={()=> handleEdit(item.id)}
//                  >
//                    <i class="fa-solid fa-pen-to-square"></i>
//                  </button>
//                  <button
//                    type="button"
//                    class="text-black bg-teal-200 hover:bg-teal-800 rounded-lg text-sm p-1.5  inline-flex items-center me-2 "
//                   value="Delete"
//                   onClick={()=> handleDelete(item.id)}
//                  >
//                    <i class="fa-solid fa-trash"></i>
//                  </button>
//                </div>
//              </div>
//            </li>
//           ))}
      
//         </ol>
//       </div>
//        </div>

        
    
//     </div>
//     </div>
    
//   )
// }
