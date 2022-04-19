import Note from './Note';
import AddNote from './AddNote';
import { nanoid } from 'nanoid';

const NotesList = ({ notes, handleAddNote, handleDeleteNote, handleSearchNote }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => {
        return (
            <>
          <Note key={nanoid()} id={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote} />
          </>
        );
      })}
      <AddNote handleAddNote={handleAddNote} handleSearchNote={handleSearchNote} />
    </div>
  );
};

export default NotesList;
