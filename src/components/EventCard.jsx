export default function EventCard({ event }) {
    function handleClick() {
        alert(event.title);
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
            <button onClick={handleClick}>
                View Event
            </button>
        </article>
    );
}