import { useState } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import CounterC  from './CounterC'; 
import CounterF from './CounterF';
import Pokemon from './Pokemon';
import ColorBox from "./ColorBox";
import NoteManager from "./NoteManager"; 
import TodoListWithPriorities from "./TodoListWithPriorities"; 

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('eya');
  const [lastName, setLastName] = useState('chamekh');

  const step10 = 10; 
  const handleClick = () => setCount(count + 1);

  const initialTasks = [
    { name: "Acheter du lait", priority: "Haute", completed: false },
    { name: "Faire du sport", priority: "Moyenne", completed: true },
    { name: "Regarder un film", priority: "Basse", completed: false },
  ];

  return (
    <div className="app-container">
      <Header name={name} lastName={lastName} />
      
      
      <h2 style={{ textAlign: "center" }}>Compteurs</h2>
      <button onClick={handleClick}>{count}</button>
      <CounterC counter={10} /> 
      <CounterF Counter={step10} />

      
      <h2 style={{ textAlign: "center" }}>Pokémon</h2>
      <Pokemon />

      
      <h2 style={{ textAlign: "center" }}>Changement de Couleur Dynamique</h2>
      <ColorBox 
        initialColor="#ff5733" 
        colorOptions={["#ff5733", "#33ff57", "#3357ff", "#f0f033", "#f033f0", "#33f0f0"]} 
      />

      
      <h2 style={{ textAlign: "center" }}>Gestionnaire de Notes</h2>
      <NoteManager initialNotes={[12, 15, 18]} />

      
      <h2 style={{ textAlign: "center" }}> Todo List avec Priorités</h2>
      <TodoListWithPriorities initialTasks={initialTasks} />

      <Footer />
    </div>
  );
}

export default App;