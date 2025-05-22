interface Event {
  name: string;
  date: string;
}

export default function EventsSection() {
  const events: Event[] = [
    { name: "Children's Praise Day", date: "June 1st" },
    { name: "Creative Sunday", date: "June 8th" },
    { name: "Bible Quiz", date: "June 15th" },
  ];

  return (
    <section
      id="events"
      className="section py-16 px-4 bg-[#fdf6e3] text-center"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-[#0077b6] mb-8">
          Upcoming Events
        </h2>
        <ul className="space-y-4 text-lg">
          {events.map((event, index) => (
            <li key={index} className="flex justify-center">
              <span className="font-semibold">{event.name}</span>
              <span className="mx-2">-</span>
              <span>{event.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
