import React from "react";

import Note from "./Note.jsx";

export default function NotesGrid(props){
return(
    <div className="notes--grid">
        {props.notes.map((note,i) => {
               
               return(
                   <Note
                       key={i}
                       note={note}
                       delFunc={props.delFunc}
                   />
               )
           })}
    </div>
)
}