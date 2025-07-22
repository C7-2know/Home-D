import React, { useState } from 'react';
import { ArrowBigDown, ArrowDown, Camera, ChevronDownIcon, Globe, Goal, Group, House, Locate, Lock, Smile, TableCellsMerge, Video, X } from 'lucide-react';
import Profile from './profile';

function PostForm({setIsOpen}) {
  const user = {
    name: 'John Doe',
    ppicture: 'user.png',
    time: 'New York, NY',
  };
  const [modal, setModal] = useState(false);
  const [value, setValue] = useState('Public');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
        >
          {/* Modal Container */}
          <div
            className="relative bg-white rounded-lg p-4 shadow-xl overflow-hidden p-4 w-xl"
          >
            <div >
              <div className='flex justify-between  mb-4 border-b border-gray-200 p-6'>
                <h1 className='text-lg font-semibold'>Create Post</h1>
                {/*  dropdown button will be putted here */}
                <button 
                  className='flex border rounded-lg items-center gap-2 px-4 py-1 text-sm hover:bg-gray-100 h-8'
                  onClick={() => setModal(!modal)}
                >{value} <ChevronDownIcon/></button>
                {modal && (
                  <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/30'>
                   <div className='relative bg-white rounded-lg p-4 shadow-xl w-md pt-8'>
                    <h1 className='text-lg font-semibold mb-2 pb-2 border-b border-gray-200'>Select Audience</h1>
                    {/* Dropdown options */}
                    <Audience Icon={Globe} value=' Public' descript='Only visible to your friends' setValue={setValue} setModal={setModal} />
                    <Audience Icon={Group} value='Network' descript='Only visible to your friends' setValue={setValue} setModal={setModal} />
                    <Audience Icon={Goal} value='Expertise' descript='Only visible to your friends' setValue={setValue} setModal={setModal} />
                    <Audience Icon={House} value='Specific Networks' descript='Only you can see this post' setValue={setValue} setModal={setModal} />
                    <Audience Icon={Lock} value='Only Me' descript='Only you can see this post' setValue={setValue} setModal={setModal} />
                    <Audience Icon={TableCellsMerge} value='Team' descript='Only you can see this post' setValue={setValue} setModal={setModal} />
                    <button className='absolute top-2 right-2 text-red-500 hover:text-black bg-red-200 rounded-full' onClick={() => setModal(false)}>
                      <X className='w-6 h-6' />
                    </button>  
                    <div className='flex justify-end gap-2 mt-4 border-t pt-8'>
                      <button className='rounded-lg border p-2 bg-gray-200 hover:bg-gray-300 border-gray-300 px-2' onClick={() => setModal(false)}>Cancel</button>
                      <button className='rounded-lg p-2 bg-blue-500 text-white hover:bg-blue-600 px-2' onClick={() => setModal(false)}>Done</button>
                      </div>
                   </div>
                   
                  </div>
                )}
              </div>
              <Profile props={user} />

              <input type='text' placeholder='what do you want to post? ' className='w-full p-2 rounded-lg my-4 mb-48' />
              <div className='flex gap-2 mb-8'>
                <input type='file' accept='image/*' id='photos' className='hidden'/><label htmlFor="photos" className='cursor-pointer border border-gray-200 bg-gray-50 rounded-3xl px-4 py-2 flex items-center gap-2 text-sm '><Camera className='w-4 h-4'/> Photos</label>
                <input type='' accept='image/*' id='property' className='hidden'/> <label htmlFor="property" className='cursor-pointer border border-gray-200 bg-gray-50 rounded-3xl px-4 py-2 flex items-center gap-2 text-sm'><House className='w-4 h-4'/> Property</label>
                <input type='file' accept='image/*' id='video' className='hidden'/> <label htmlFor="video" className='cursor-pointer border border-gray-200 bg-gray-50 rounded-3xl px-4 py-2 flex items-center gap-2 text-sm'><Video className='w-4 h-4'/> Video</label>
                <input type='' accept='image/*' id='emoji' className='hidden'/> <label htmlFor="emoji" className='cursor-pointer border border-gray-200 bg-gray-50 rounded-3xl px-4 py-2 flex items-center gap-2 text-sm'><Smile className='w-4 h-4'/> Emoji</label>
              </div>
              <div className='flex justify-end pt-4 border-t border-gray-200'>
                <button className='mt-2 bg-blue-500 text-white px-4 py-2 rounded-2xl hover:bg-blue-600'>Publish</button>
              </div>
            </div>
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-black  bg-gray-200 rounded-full p-1"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-6 h-6 p-1" />
            </button>
          </div>
        </div>
  );
}

const Audience = ({ Icon, value, descript, setValue,setModal }) => {
  return (
    <button
      className="flex gap-2 p-2 hover:bg-gray-100 rounded-lg w-full"
      onClick={() => { setValue(value); setModal(false); }}
    >
      <Icon className="w-6 h-6" />
      <div className='flex flex-col'>
        <h3 className="font-semibold">{value}</h3>
        <p className="text-sm text-gray-500">{descript}</p>
      </div>
    </button>
  );
}

export default PostForm;
