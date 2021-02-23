import { useEffect, useState } from 'react';

const SideTemplateArea = ({ addImage, canvas }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const resp = await fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=yellow+flowers&image_type=photo&pretty=true`
    );

    const data = await resp.json();

    setImages(...images, data.hits);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="max-w-lg p-4">
      <div className="mt-8">
        <div className="grid grid-cols-2 gap-3">
          {images &&
            images.map(img => (
              <div key={img.id}>
                <img
                  onClick={() => addImage(canvas, img.id)}
                  id={img.id}
                  src={img.webformatURL}
                  alt={img.user}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SideTemplateArea;
