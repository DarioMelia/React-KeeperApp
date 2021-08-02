import React from "react";

import { v4 as uuidv4 } from 'uuid';

function CreateArea(props) {
   const [note, setNote] = React.useState({
     title:"",
     content:"",
     id: 0
   })

   function changeHandler(e){
     const {name, value} = e.target;
     setNote(prev =>{
       return {
         ...prev,
         [name]: value
         
       }
     })
   }

  
  
  return (
    <div>
      <form onSubmit={(e) => {
          props.onAdd(note);
         
          setNote({
            title:"",
            content:"",
            id:uuidv4()
          })
          e.preventDefault()
        }}>
        <input onChange={changeHandler} name="title" placeholder="Title" autocomplete="off"value={note.title} />
        <textarea onChange={changeHandler} name="content" placeholder="Take a note..." rows="3" autocomplete="off" value={note.content}/>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
