interface Event {
  name: string;
  date: string;
}

export default function EventsSection() {
  const events: Event[] = [
    { name: "Exhibition ", date: "May 25th" },
    { name: "Mentorship classes", date: "Every 3rd Sunday" },
    // { name: "Bible Quiz", date: "June 15th" },
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
        <ul className="space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 text-lg">
          {events.map((event, index) => (
            <li key={index}>
              <div className="w-80 mx-auto  border rounded-lg shadow p-4 bg-white">
                <h3 className="text-xl font-semibold text-[#ff5733]">
                  {event.name}
                </h3>
                <p className="text-gray-600">{event.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
