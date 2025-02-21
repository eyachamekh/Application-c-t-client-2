import { useState, useEffect } from "react";
import { Alert } from 'react-bootstrap';
import Event from "./Event";
import data from "../events.json";

function Events() {
    const [events, setEvents] = useState([]);
    const [showWelcome, setShowWelcome] = useState(true);

    useEffect(() => {
        // Simuler un chargement des données
        setEvents(data);

        // Afficher le message de bienvenue pendant 3 secondes après le montage du composant
        const timer = setTimeout(() => {
            setShowWelcome(false);
        }, 3000);

        // Nettoyage du timer lors du démontage du composant
        return () => clearTimeout(timer);
    }, []); // Le tableau vide [] signifie que l'effet se déclenche une seule fois, au montage.

    const handleClick = (name) => {
        setEvents(prevEvents =>
            prevEvents.map(event =>
                event.name === name
                    ? {
                        ...event,
                        nbTickets: event.nbTickets - 1,
                        nbParticipants: event.nbParticipants + 1
                    }
                    : event
            )
        );
    };

    const ChangeLike = (name) => {
        setEvents(prevEvents =>
            prevEvents.map(event =>
                event.name === name
                    ? { ...event, like: !event.like }
                    : event
            )
        );
    };

    return (
        <div>
            {showWelcome && (
                <Alert variant="success" className="m-4">
                    Hey Welcome to Esprit Events 
                </Alert>
            )}
            <div className="d-flex flex-lg-row">
                {events.map((e, index) => (
                    <Event 
                        key={index} 
                        event={e} 
                        handleClick={handleClick} 
                        ChangeLike={ChangeLike} 
                    />
                ))}
            </div>
        </div>
    );
}

export default Events;