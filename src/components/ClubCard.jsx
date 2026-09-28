export default function ClubCard( {club} ) {
    return (
        <article className="club-card">
            <h2 className="club-name">{club.name}</h2>
            <p className="club-category">{club.category}</p>
        </article>
    )
}