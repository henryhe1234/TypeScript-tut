import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";
interface Todo{
  id:number,
  title:string,
  completed:boolean
}

axios.get(url).then(response =>{
  const {id,title,completed} = response.data as Todo;
  logTodo(id,title,completed);
})
const logTodo = (id:number,title:string,completed:boolean)=>{
  console.log(`
  Todo with Id: ${id}
  and title: ${title}
  and is it finished:${completed}
`);
}