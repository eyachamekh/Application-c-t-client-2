import { useState } from "react";
import PropTypes from "prop-types";

const NoteManager = ({ initialNotes = [] }) => {
  const [notes, setNotes] = useState(initialNotes);
  const [newNote, setNewNote] = useState("");

  // Ajouter une note
  const addNote = () => {
    const noteValue = parseFloat(newNote);
    if (!isNaN(noteValue) && noteValue >= 0 && noteValue <= 20) {
      setNotes([...notes, noteValue]);
      setNewNote("");
    } else {
      alert("Veuillez entrer une note entre 0 et 20.");
    }
  };

  // Supprimer une note
  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  // Calcul de la moyenne des notes
  const average = notes.length > 0 
    ? (notes.reduce((total, note) => total + note, 0) / notes.length).toFixed(2) 
    : "N/A";

  return (
    <div style={styles.container}>
      <h2>Gestionnaire de Notes </h2>

      {/* ajout de note */}
      <div style={styles.inputContainer}>
        <input
          type="number"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Ajouter une note"
          style={styles.input}
        />
        <button onClick={addNote} style={styles.addButton}>Ajouter</button>
      </div>

      {/* affichage des notes */}
      <h3> Notes :</h3>
      {notes.length > 0 ? (
        <ul style={styles.list}>
          {notes.map((note, index) => (
            <li key={index} style={styles.listItem}>
              <span style={styles.noteText}>{note} / 20</span>
              <button onClick={() => deleteNote(index)} style={styles.deleteButton}>Supprimer</button>
            </li>
          ))}
        </ul>
      ) : (
        <p style={styles.noNotes}>Aucune note ajoutée.</p>
      )}

      
      <h3> Moyenne : <span style={styles.average}>{average} / 20</span></h3>
    </div>
  );
};


const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    maxWidth: "400px",
    margin: "20px auto",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
  },
  inputContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "15px",
  },
  input: {
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    width: "100px",
    textAlign: "center",
  },
  addButton: {
    padding: "8px 12px",
    cursor: "pointer",
    border: "none",
    backgroundColor: "#28a745",
    color: "white",
    borderRadius: "5px",
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#f8f9fa",
    marginBottom: "5px",
    borderRadius: "5px",
    fontSize: "18px",
  },
  noteText: {
    color: "black", 
    fontWeight: "bold",
  },
  deleteButton: {
    backgroundColor: "#dc3545",
    border: "none",
    color: "white",
    cursor: "pointer",
    padding: "5px 10px",
    borderRadius: "5px",
    fontSize: "14px",
  },
  noNotes: {
    fontStyle: "italic",
    color: "#777",
  },
  average: {
    color: "#007bff",
    fontWeight: "bold",
  },
};

NoteManager.propTypes = {
    initialNotes: PropTypes.arrayOf(PropTypes.number),
  };
export default NoteManager;