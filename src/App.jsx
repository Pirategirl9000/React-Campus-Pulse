import './App.css';
import Header from "./components/Header.jsx";
import EventCard from "./components/EventCard.jsx";
import ClubCard from "./components/ClubCard.jsx";

export default function App() {
  const events = [
    {
      id: 1,
      title: "Robotics Demonstration",
      category: "Technology",
      location: "Technology Center"
    },
    {
      id: 2,
      title: "Jazz Concert",
      category: "Music",
      location: "Fine Arts Building"
    },
    {
      id: 3,
      title: "Student Coding Night",
      category: "Technology",
      location: "Innovation Lab"
    }
  ]

  const clubs = [
    {
      id: 1,
      name: "Cybersecurity Club",
      category: "Technology"
    },

    {
      id: 2,
      name: "Photography Club",
      category: "Arts"
    },

    {
      id: 3,
      name: "Running Club",
      category: "Athletics"
    }
  ]

  return (
    <>
    <Header />

    <main>
      <h1>Events</h1>
      <section className="event-grid">
          {events.map(event => <EventCard key={event.id} event={event}/>)}
      </section>


      <h1>Clubs</h1>
      <section className="club-grid">
        {clubs.map(club => <ClubCard key={club.id} club={club}/>)}
      </section>


    </main>

    </>
  );
}