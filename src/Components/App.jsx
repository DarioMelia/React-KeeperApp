import React from "react";


/////////////COMPONENTS//////////////
import Header from "./Header.jsx";
import CreateArea from "./CreateArea.jsx";
import Footer from "./Footer.jsx";
import NotesGrid from "./NotesGrid.jsx";


function App() {

    const [notes, setNotes] = React.useState([]);

    function addNote(note){
      if(note.title !== "" ){
        setNotes(prev => {
            return [...prev, note]
    })
      }
        
       }

    function deleteNote(id){
        const notesAfterDel = notes.filter(note => note.id !== id);
        setNotes(notesAfterDel);
    }

    

    return(
        <div>
           <Header />

           <CreateArea 
           onAdd={addNote}  
           />

           <NotesGrid 
               notes={notes}
               delFunc={deleteNote}
           />
           <Footer />
           
        </div>
    )
}

export default App;



