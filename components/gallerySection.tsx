export default function GallerySection() {
  const galleryImages = [
    { src: "https://placekitten.com/200/200", alt: "Activity 1" },
    { src: "https://placebear.com/200/200", alt: "Activity 2" },
    { src: "https://placebeard.it/200x200", alt: "Activity 3" },
    { src: "https://placekitten.com/201/201", alt: "Activity 4" },
  ];

  return (
    <section id="gallery" className="section py-16 px-4 bg-white text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#0077b6] mb-8">Gallery</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {galleryImages.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="w-48 h-48 object-cover rounded-lg border-4 border-yellow-400"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
