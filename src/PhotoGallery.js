import "./PhotoGallery.css";

// Use process.env.PUBLIC_URL to get the correct base path for GitHub Pages
const getImagePath = (imageName) => {
  return `${process.env.PUBLIC_URL}/photos/${imageName}`;
};

// Adjust number of images as needed
const photoCategories = {
  "La Princesa de Mi Corazón 💕": Array.from({ length: 15 }, (_, i) => ({
    src: getImagePath(`princesa${i + 1}.jpg`),
    caption: "Mi hermosa princesa 💖"
  })),
  "Our Moments": Array.from({ length: 18 }, (_, i) => ({
    src: getImagePath(`ourmoments${i + 1}.jpg`),
    caption: "Our sweet time together 🌟"
  }))
};

const renderSection = (title, photos) => (
  <div className="mb-16">
    <h3 className="text-3xl text-rose-600 font-semibold text-center mb-8">{title}</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6 max-w-7xl mx-auto">
      {photos.map((photo, index) => (
        <div
          key={index}
          className="relative bg-white rounded-lg shadow-lg p-4 border-4 border-rose-200 polaroid"
        >
          <div className="animated-bow text-3xl absolute -top-4 left-1/2 transform -translate-x-1/2">🎀</div>
          <img
            src={photo.src}
            alt={photo.caption}
            className="rounded object-cover w-full h-[16rem] md:h-[18rem] lg:h-[20rem] object-center border-2 border-rose-100"
            onError={(e) => {
              // Fallback if image doesn't load
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div 
            className="rounded object-cover w-full h-[16rem] md:h-[18rem] lg:h-[20rem] border-2 border-rose-100 bg-gradient-to-br from-pink-200 to-rose-300 items-center justify-center text-white text-4xl" 
            style={{display: 'none'}}
          >
            💖
          </div>
          <p className="text-center text-rose-400 mt-2 font-medium">{photo.caption}</p>
        </div>
      ))}
    </div>
  </div>
);

const PhotoGallery = () => {
  return (
    <section className="py-16 bg-pink-50">
      <h2 className="text-4xl font-script text-center text-rose-500 mb-12">My Favorite Chapter</h2>
      {Object.entries(photoCategories).map(([title, photos]) => renderSection(title, photos))}
    </section>
  );
};

export default PhotoGallery;