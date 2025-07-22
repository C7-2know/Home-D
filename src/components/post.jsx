import { AreaChart, Bath, BedDouble, Heart, MapPin, MessageSquareMore } from 'lucide-react';
import Profile from './profile';
import ImageModal from './ImageModal';
import { useState, useRef, useEffect } from 'react';

function Post({ author, description, image, property }) {
  const [show, setShow] = useState(false);
  const emojis = ['❤️', '😂', '😮', '😢', '😡', '🔥', '👏'];
  const popupRef = useRef();

  // Close emoji popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShow(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleEmojiSelect = (emoji) => {
    console.log('Selected emoji:', emoji);
    setShow(false);
  };
  const comments = [];

  return (
    <div className="rounded-md p-4 mb-8 bg-white shadow-sm relative shadow-2xl">
      <Profile props={author} />
      <p className="my-2">{description}</p>
      <div className="flex flex-col items-center justify-center m-2 mt-4 w-full bg-gray-200 rounded-lg px-4">
        <ImageModal  image={image} />
      </div>
      {property && (
        <div className='flex gap-4 justify-between m-2 mt-4'>
          <div className='flex gap-4'>
            <img className='w-32 h-32 object-cover rounded-lg' src={property.image} alt="property description"/>
            <div className='flex flex-col items-start justify-start mt-2 text-sm gap-2'>
              <p className='font-semibold flex'><MapPin className="w-4 h-4 text-red-500 mr-1" />{property.address}</p>
              <div className='flex items-center gap-4 w-full'>
                <span className='flex'><BedDouble className="w-4 h-4 text-red-500 mr-1" />{property.bedrooms} Bed </span>
                <span className='flex'><Bath className="w-4 h-4 text-blue-500 mr-1" />{property.bathrooms} Baths </span>
                <span className='flex'><AreaChart className="w-4 h-4 text-green-500 mr-1" />{property.sqft} sqft </span>
              </div>
            </div>
          </div>
          <p className='text-lg font-semibold mt-2 bg-gray-300 rounded-lg px-2 h-10'>{property.price}</p>
        </div>

      )}
      <div className="flex items-center justify-between mb-2 border-b border-gray-400 pb-2  pt-4">
        <span className='flex items-center'><Heart className="w-6 h-6 text-red-500 fill-current mr-1" /> 3</span>
        <span>{comments.length} comments</span>
      </div>
      <div className="flex justify-between items-center m-2 relative pt-4 pb-8" ref={popupRef}>
        <div className="relative group inline-block">
          {/* Trigger element (Heart + React) */}
          <span className="flex items-center gap-1 cursor-pointer">
            <Heart className="w-6 h-6" />
            React
          </span>

          {/* Emoji Picker shown on hover */}
          <div className="absolute bottom-full mb left-0 bg-white shadow-lg rounded p-2 space-x-2 z-50 w-64 justify-between hidden group-hover:flex">
            {emojis.map((emoji, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  handleEmojiSelect(emoji);
                  setShow(false);
                }}
                className="text-xl hover:scale-125 transition-transform shadow-2xl"
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>


        <span className="flex items-center gap-1 cursor-pointer">
          <MessageSquareMore className="w-6 h-6" />
          Comment
        </span>

        <span className="text-red-500">Coming soon</span>
      </div>
    </div>
  );
}

export default Post;
