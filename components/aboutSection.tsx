import Image from "next/image";
import Container from "./container";

const kidsChurchImage = "/assets/about.jpg";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 bg-white text-center">
      <h2 className="text-3xl font-bold text-[#0077b6] mb-6 md:mb-12">About Us</h2>
      <Container>
        <div className="max-w-4xl mx-auto flex flex-col gap-4 md:gap-8 md:flex-row items-center">
          <div className="w-full mb-6 md:mb-0">
            <Image
              src={kidsChurchImage}
              alt="Kids Church"
              className="h-fit w-98 mx-auto rounded-lg shadow-lg"
              width={500}
              height={150}
            />
          </div>
          <div className="w-full">
            <p className="text-lg text-center md:text-left text-gray-700">
              At Kid&apos;s Church, we create a joyful, safe, and engaging
              environment where children learn about Jesus through storytelling,
              play, music, and crafts. We are passionate about helping children
              discover God&apos;s love for them.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
