

export default async function SkillBlock({ title, images }) {
  return (
    <div className="p-4 border rounded-lg">
      <code className="text-xl font-semibold pb-10 text-left">{title}</code>
      
      <div className="flex gap-4">
        
        {images.map((src, index) => (
          <div key={index} className="flex justify-center">
            <img 
              src={src} 
              alt={`Image ${src}`}  className="h-17 md:h-28" 
            />
          </div>
        ))}
      
      </div>
    </div>
  );
};