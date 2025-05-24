export default function GallerySection() {
  const galleryImages = [
    { src: "/assets/1.jpg", alt: "Activity 1" },
    { src: "/assets/2.jpg", alt: "Activity 2" },
    { src: "/assets/3.jpg", alt: "Activity 3" },
    { src: "/assets/4.jpg", alt: "Activity 4" },
    { src: "/assets/5.jpg", alt: "Activity 5" },
    { src: "/assets/6.jpg", alt: "Activity 6" },
    { src: "/assets/7.jpg", alt: "Activity 7" },
    { src: "/assets/8.jpg", alt: "Activity 8" },
    { src: "/assets/9.jpg", alt: "Activity 9" },
    { src: "/assets/10.jpg", alt: "Activity 10" },
    { src: "/assets/11.jpg", alt: "Activity 11" },
    { src: "/assets/12.jpg", alt: "Activity 12" },
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
