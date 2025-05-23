// components/ContactSection.tsx
export default function ContactSection() {
    return (
      <section id="contact" className="section py-16 px-4 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0077b6] mb-6">Contact Us</h2>
          <p className="text-lg text-gray-700 mb-6">
            Have questions or need more information? Reach out to us!
          </p>
          <div className="mt-6">
            <a
              href="mailto:Cfckids2020@gmail.com?subject=Question About Kids Church"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Email Our Team
            </a>
          </div>
        </div>
      </section>
    );
  }