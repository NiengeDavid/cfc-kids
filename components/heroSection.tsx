export default function HeroSection() {
  return (
    <section
      id="hero"
      className="hero bg-gradient-to-r from-[#ffecd2] to-[#fcb69f] py-24 px-4 text-center"
    >
      <div className="hero-content max-w-4xl mx-auto">
        <h1 className={"text-4xl md:text-5xl font-bold text-[#ff5733] mb-4"}>
          Welcome to CFC Kid&apos;s Church!
        </h1>
        <p className="text-xl md:text-2xl text-gray-800">
          Filling our world with the beautiful message of our Lord Jesus Christ,
          presenting every child mature in Christ.
        </p>
      </div>
    </section>
  );
}
