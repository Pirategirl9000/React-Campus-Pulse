export default function ClubCard( {club} ) {
    const handleClick = () => alert(club.name);

    return (
        <article className="club-card">
            <h2 className="club-name">{club.name}</h2>
            <p className="club-category">{club.category}</p>
            <button className="club-button" onClick={handleClick}>View Club</button>
        </article>
    )
}