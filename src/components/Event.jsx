import { Button, Card, Placeholder } from 'react-bootstrap';

function Event({ event, handleClick, ChangeLike }) {
    const images = import.meta.glob('../assets/*', { eager: true });

    const getImagePath = (img) => {
        return images[`../assets/${img}`]?.default || Placeholder;
    };

    return (
        <>
            <Card>
                <Card.Img src={getImagePath(event.img)} />
                <Card.Body>
                    <Card.Title>{event.name}</Card.Title>
                    <Card.Text>
                        {event.price} <br />
                        {event.nbTickets} <br />
                        {event.nbParticipants}
                    </Card.Text>
                    <Button 
                        className="m-4" 
                        onClick={() => handleClick(event.name)} 
                        disabled={event.nbTickets <= 0}>
                        {event.nbTickets > 0 ? 'Book an event' : 'Sold Out'}
                    </Button>
                    {/* Toggle Like/Dislike Button */}
                    <Button 
                        variant={event.like ? 'danger' : 'success'} 
                        onClick={() => ChangeLike(event.name)}>
                        {event.like ? 'Dislike' : 'Like'}
                    </Button>
                </Card.Body>
            </Card>
        </>
    );
}

export default Event;