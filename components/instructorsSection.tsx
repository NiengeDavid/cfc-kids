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
      name: "Mrs Sarah Aba",
      role: "CFC Abuja Coordinator",
      image: "/assets/abj.jpeg",
      alt: "Ms. Sarah",
    },
    {
      name: "Mrs Mercy Denen",
      role: "CFC Gboko Coordinator",
      image: "/assets/gboko.jpeg",
      alt: "Mrs Mercy Denen",
    },
    {
      name: "Ms. Babie",
      role: "CFC Makurdi Coordinator",
      image: "/assets/mkd.jpeg",
      alt: "Ms. Babie",
    },
    {
      name: "Mr Victor Wealth",
      role: "CFC Kaduna Coordinator",
      image: "/assets/kd.jpeg",
      alt: "Mr Victor Wealth",
    },
    {
      name: "Mrs Bola Adeolu",
      role: "CFC Sagamu Coordinator",
      image: "/assets/sagamu.jpeg",
      alt: "Mrs Bola Adeolu",
    },
    {
      name: "Mrs. Stephanie Igyungu",
      role: "CFC Lagos Coordinator",
      image: "/assets/lag.jpeg",
      alt: "Mrs. Stephanie Igyungu",
    },
    {
      name: "Pst Blessing Ingyape",
      role: "Global Coordinator",
      image: "/assets/global.jpeg",
      alt: "Pst Blessing Ingyape",
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
