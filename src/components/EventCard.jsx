export default function EventCard({ event }) {
    function handleClick() {
        alert(`${event.title} \n
             Type: ${event.category} \n
             Date: ${event.date} \n
             Time: ${event.time} \n
             Description: ${event.description}`);
    }

    return (
        <article className="event-card">
            <h2 class-name="event-title">
                {event.title}
            </h2>
            <p class-name="event-category">
                Category: {event.category}
            </p>
            <p className="event-location">
                Location: {event.location}
            </p>
            <p className="event-date-time">
                {event.date} : {event.time}
            </p>
            <p className="event-desc">
                {event.description}
            </p>
            <button onClick={handleClick} className="event-button">
                View Event
            </button>
        </article>
    );
}