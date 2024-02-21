import './style.css'


interface  Todo{
  title:string,
  isCompleted:boolean,
  readonly id:string,
}

const  todos:Todo[]=[];

const taskconatiner=document.querySelector('.taskcontainer') as HTMLDivElement;

const todoInput = document.getElementsByName('title')[0] as HTMLFormElement;
const myfrom=document.getElementById("myfrom") as HTMLFormElement;

myfrom.onsubmit = (e:SubmitEvent) =>
{
  e.preventDefault();
  const todo:Todo={
     title:todoInput.value,
     isCompleted:false,
     id:String(Math.random()*100),
  }

  todos.push(todo)
  rendertodo(todos)
  
}

const generateTodoItem = (title:string,isCompleted:boolean,id:string)=>{
  const todo=document.createElement('div')
  todo.className='todo';
  const checkbox:HTMLInputElement=document.createElement("input")
  checkbox.setAttribute("type","checkbox");
  checkbox.className="isCompleted";
  checkbox.checked = isCompleted;

  checkbox.onchange = () => {
    todos.find(item=>{
      if(item.id===id)
      item.isCompleted=checkbox.checked
    })
    paragraph.className = checkbox.checked ? "textcut" : "";
  };

  const paragraph:HTMLParagraphElement=document.createElement("p")
  paragraph.innerText=title
    paragraph.className = isCompleted  ? "textcut" : "";
 
 
  //creating deleted function
  const btn:HTMLButtonElement = document.createElement("button")
  btn.innerText="X"
  btn.className="deleteBtn"
  btn.onclick=()=>{
    tododelte(id)
    
  }

  //app
  todo.append(checkbox,paragraph,btn)
  taskconatiner.append(todo)
} 
const rendertodo = (todos:Todo[]) =>
{
  taskconatiner.innerText="";
todos.forEach(item=>{
  generateTodoItem(item.title,item.isCompleted,item.id)
})
}


const tododelte = (id: string) => {
  const idx = todos.findIndex(item => item.id === id);
  todos.splice(idx, 1);
  rendertodo(todos)
}

