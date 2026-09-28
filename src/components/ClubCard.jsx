export default function ClubCard( {club} ) {
    function handleClick() {
            alert(`${club.name} \n
             Type: ${club.category} \n
             Time/Day: ${club.meeting} \n
             Location: ${club.location} \n
             Description: ${club.description}`);
    }

    return (
        <article className="club-card">
            <h2 className="club-name">{club.name}</h2>
            <p className="club-category">{club.category}</p>
            <p className="club-meetings">Meetings: {club.meeting}</p>
            <p className="club-location">Location: {club.location}</p>
            <p className="club-description"> {club.description} </p>
            <button className="club-button" onClick={handleClick}>Learn More</button>
        </article>
    )
}