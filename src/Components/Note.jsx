import React from "react";

function Note(props) {
    const {title,content,id} = props.note;
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={props.delFunc.bind(this,id)}>DELETE</button>
    </div>
  );
}
export default Note;
