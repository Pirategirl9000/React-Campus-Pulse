import './App.css';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import EventCard from "./components/EventCard.jsx";
import ClubCard from "./components/ClubCard.jsx";

export default function App() {

  const events = [
    {
      id: 1,
      title: "Robotics Demonstration",
      category: "Technology",
      location: "Technology Center",
      date: "October 4, 2026",
      time: "5:00pm-6:00pm",
      description: "Join us for a demonstration of the new search and rescue robot"
    },
    {
      id: 2,
      title: "Jazz Concert",
      category: "Music",
      location: "Fine Arts Building",
      date: "September 30, 2026",
      time: "3:00pm-6:00pm",
      description: "Join Freddy and his friends in their jazz concert - free admissions"
    },
    {
      id: 3,
      title: "Student Coding Night",
      category: "Technology",
      location: "Innovation Lab",
      date: "October 7, 2026",
      time: "5:00pm-6:30pm",
      description: "Join ACM in their programming competition - any language allowed"
    },
    {
      id: 4,
      title: "Project Showcase",
      category: "Technology",
      location: "Gardner Hall 115",
      date: "October 1, 2026",
      time: "5:00pm-6:00pm",
      description: "Join ACM in showcasing your projects and seeing what your peers are working on"
    },
    {
      id: 5,
      title: "Fermat's Last Thereom Watch-Along",
      category: "Math",
      location: "Carhart G05",
      date: "October 8, 2026",
      time: "5:00pm-7:00pm",
      description: "Join the math club in discussing and watching a movie on Fermat's last theorem and it's eventual proof"  //https://en.wikipedia.org/wiki/Fermat%27s_Last_Theorem#:~:text=Cubum%20autem%20in,narrow%20to%20contain
    }
  ]

  const clubs = [
    {
      id: 1,
      name: "Cybersecurity Club",
      category: "Technology",
      meeting: "4:00pm-5:00pm Wednesdays",
      location: "CAT 207",
      description: "Connect with other cybersecurity students and develop a deeper understanding of the topic"
    },

    {
      id: 2,
      name: "Photography Club",
      category: "Arts",
      meeting: "7:00pm-8:00pm Wednesdays",
      location: "Peterson Fine Arts RM 011",
      description: "Join other students in learning new photography techniques"
    },

    {
      id: 3,
      name: "Running Club",
      category: "Athletics",
      meeting: "4:00pm-5:00pm Fridays",
      location: "Kanter Student Center Lobby",
      description: "Get together with other runners and joggers to enjoy the outdoors"
    },

    // When you can't write psuedodata just steal if from someone else (https://www.wsc.edu/directory/37/a-to-z/A)
    {
      id: 4,
      name: "Chess Club",
      category: "Recreation",
      meeting: "7:00pm-8:00pm Wednesdays",
      location: "Humanities Lounge",
      description: "Join other chess players and compete to get better at chess"
    },

    {
      id: 5,
      name: "Film Club",
      category: "Arts",
      meeting: "7:00pm-8:00pm Mondays",
      location: "Humanities Rm 408",
      description: "Join other film enthusiasts in watching and discussing various films"
    }
  ]

  return (
    <>
    <Header />

    <main>
      <h2>Upcoming Events</h2>
      <section className="event-grid">
          {events.map(event => <EventCard key={event.id} event={event}/>)}
      </section>


      <h2>Campus Clubs</h2>
      <section className="club-grid">
        {clubs.map(club => <ClubCard key={club.id} club={club}/>)}
      </section>


    </main>

    <Footer />

    </>
  );
}