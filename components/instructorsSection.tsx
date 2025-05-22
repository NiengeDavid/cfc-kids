import Container from "./container";

interface Instructor {
  name: string;
  role: string;
  image: string;
  alt: string;
}

export default function InstructorsSection() {
  const instructors: Instructor[] = [
    {
      name: "Ms. Joy",
      role: "Lead Coordinator",
      image: "https://placehold.co/150x150?text=Ms+Joy",
      alt: "Ms. Joy",
    },
    {
      name: "Mr. Caleb",
      role: "Games & Bible Quiz Master",
      image: "https://placehold.co/150x150?text=Mr+Caleb",
      alt: "Mr. Caleb",
    },
    {
      name: "Aunty Grace",
      role: "Arts & Worship Leader",
      image: "https://placehold.co/150x150?text=Aunty+Grace",
      alt: "Aunty Grace",
    },
  ];

  return (
    <section
      id="instructors"
      className="section py-16 px-4 bg-[#fdf6e3] text-center"
    >
      <Container>
        <h2 className="text-3xl font-bold text-[#0077b6] mb-8">
          Meet Our Instructors
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className="card bg-[#ffeeba] rounded-lg p-4 w-64 shadow-md"
            >
              <img
                src={instructor.image}
                alt={instructor.alt}
                className="w-full rounded-lg border-4 border-yellow-400 mb-3"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {instructor.name}
              </h3>
              <p className="text-gray-600">{instructor.role}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
