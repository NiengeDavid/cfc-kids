import Image from "next/image";
import Container from "./container";

const kidsChurchImage = "/assets/about.jpg";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 bg-white text-center">
      <h2 className="text-3xl font-bold text-[#0077b6] mb-6 md:mb-12">
        About Us
      </h2>
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
              We are on a mission to help children become all that God has
              designed them to be (DISCOVERY OF THEIR CALL IN LIFE AND PURPOSE)
              by teaching and educating their spirit, soul and body by the word
              of God (THE WHOLISTIC GROWTH AND DEVELOPMENT OF THE CHILD) and by
              so doing raising a new breed of leaders who will impact and
              transform their world for Christ.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
