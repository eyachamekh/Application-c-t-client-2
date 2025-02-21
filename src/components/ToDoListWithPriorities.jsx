import { useState } from "react";
import PropTypes from "prop-types";

const TodoListWithPriorities = ({ initialTasks = [] }) => {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState("");
  const [priority, setPriority] = useState("Moyenne");
  const [searchTerm, setSearchTerm] = useState("");

  // ajouter une tache
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { name: newTask, priority, completed: false }]);
      setNewTask("");
    }
  };

  // marquer tache comme terminée
  const toggleTaskCompletion = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // filtrer les taches recherche
  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // compter les taches terminées
  const completedCount = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;

  return (
    <div style={styles.container}>
      <h2> Todo List avec Priorités</h2>

      {/* Champ de recherche */}
      <input
        type="text"
        placeholder="Rechercher une tâche..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.input}
      />

      {/* Ajout d'une nouvelle tache */}
      <div style={styles.addTaskContainer}>
        <input
          type="text"
          placeholder="Nouvelle tache"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={styles.input}
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)} style={styles.select}>
          <option value="Haute">Haute</option>
          <option value="Moyenne">Moyenne</option>
          <option value="Basse">Basse</option>
        </select>
        <button onClick={addTask} style={styles.addButton}>Ajouter</button>
      </div>

      {/* affichage des taches */}
      <ul style={styles.list}>
        {filteredTasks.map((task, index) => (
          <li key={index} style={styles.listItem}>
            <span style={{ 
              textDecoration: task.completed ? "line-through" : "none", 
              color: "black", 
              fontWeight: "bold"
            }}>
              {task.name} ({task.priority})
            </span>
            <button onClick={() => toggleTaskCompletion(index)} style={styles.completeButton}>
              {task.completed ? "Annuler" : "Terminer"}
            </button>
          </li>
        ))}
      </ul>

      {/* aff statistiques */}
      <div style={styles.stats}>
        <p style={styles.statsText}><strong> Nombre total de tâches :</strong> {totalTasks}</p>
        <p style={styles.statsText}><strong> Nombre de tâches terminées :</strong> {completedCount}</p>
      </div>
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
  input: {
    padding: "8px",
    margin: "5px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    width: "150px",
  },
  select: {
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    margin: "5px",
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
    fontSize: "16px",
  },
  completeButton: {
    backgroundColor: "#007bff",
    border: "none",
    color: "white",
    cursor: "pointer",
    padding: "5px 10px",
    borderRadius: "5px",
  },
  stats: {
    marginTop: "15px",
    padding: "10px",
    backgroundColor: "#f1f1f1",
    borderRadius: "5px",
  },
  statsText: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#333",
  },
};

TodoListWithPriorities.propTypes = {
    initialTasks: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        priority: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
      })
    ),
  };
export default TodoListWithPriorities;