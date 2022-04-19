import {useState} from 'react';

const AddNote = ({handleAddNote, handleSearchNote}) => {
  const [noteText, setNoteText] = useState('');
  const characterLimit = 200;

  const handleChange = (e) => {
    if(characterLimit - e.target.value.length >=0) {
      setNoteText(e.target.value);
    }

  }

  const handleSaveClick = () => {
    if(noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText('');

      handleSearchNote((prevState) => '');
    }
    // else{
    //   alert('Please add text!')
    // }
  }

  return (
    <div className="note new">
      <textarea onChange={handleChange}
        value={noteText}
        name=""
        id=""
        cols="10"
        rows="8"
        placeholder="Type to add a note..."
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length} remaining</small>
        <button className="save" onClick={handleSaveClick}>Save</button>
      </div>
    </div>
  );
};

export default AddNote;