export default function EventCard({ event }) {
    function handleClick() {
        alert(event.title);
    }

    return (
        <article className="event-card">
            <h2>
                {event.title}
            </h2>
            <p>
                Category: {event.category}
            </p>
            <p>
                Location: {event.location}
            </p>
            <button onClick={handleClick}>
                View Event
            </button>
        </article>
    );
}