import NotesList from './components/NotesList';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Search from './components/Search';
import Header from './components/Header';

let localStorageNotes = JSON.parse(localStorage.getItem('notes') || '[]');
let localDarkMode = JSON.parse(localStorage.getItem('dark-mode') || 'false');
let localSearch = JSON.parse(localStorage.getItem('search-text') || '""');

function App() {
  const [notes, setNotes] = useState(localStorageNotes);
  const [searchText, setSearchText] = useState(localSearch);
  const [darkMode, setDarkMode] = useState(localDarkMode);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem('dark-mode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('search-text', JSON.stringify(searchText));
  }, [searchText]);

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} searchText={searchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleSearchNote={setSearchText}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default App;
