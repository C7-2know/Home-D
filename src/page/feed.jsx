import { useState } from 'react';
import Post from '../components/post'
import { Camera, Tag, User, Video } from 'lucide-react'
import PostForm from '../components/postForm';

function Feed() {
    const data=[
        {
            'author':{
                "name":"John doe",
                "ppicture":"user.png",
                "time":"2 hours ago"
            },
            "description":"test description description description description description description test description test description",
            "image":"image.png",
            
            "comment":["comment1","comment2","comment3"],
            "like":3
        },
        {
            'author':{
                "name":"John doe",
                "ppicture":"user.png",
                "time":"2 hours ago"
            },
            "description":"test description description description description description description test description test description",
            "image":"image.png",
            "property":{
                "image":"image.png",
                "price":"$500,000",
                "address":"123 Main St, New York, NY 10001",
                "bedrooms":3,
                "bathrooms":2,
                "sqft":1500
            },
            "comment":["comment1","comment2","comment3"],
            "like":3
        },
        {
            'author':{
                "name":"John doe",
                "ppicture":"user.png",
                "time":"2 hours ago"
            },
            "description":"test description description description description description description test description test description",
            "image":"image.png",
            "comment":["comment1","comment2","comment3"],
            "like":3
        }
    ]
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='flex flex-col p-4 space-y-4 max-w-5xl mt-12 mx-auto '>
        <div className='flex flex-col bg:white items-center p-4 rounded-lg shadow-md'>
            <div className='flex gap-2 justify-around items-center w-full'>
                <User className='w-12 h-10 text-green-500 fill-current bg-gray-300 rounded-full p-1' />
                <input type="text" placeholder='Start Post ' className='sm:w-xl w-64  p-4 border border-gray-300 rounded-lg text-sm' />
                <button className='shadow-lg px-6 py-4 rounded-md border border-gray-300 hover:transition-all text-sm w-max bg-gray-100'
                 onClick={() => setIsOpen(true)}>Create Post</button>
                 {isOpen && <PostForm setIsOpen={setIsOpen} />}
            </div>
            <div className='flex items-center justify-between mt-2 w-96'>
                <span className='flex gap-1 hover:cursor-pointer hover:bg-gray-300 hover:border border-gray-100 rounded p-2'><Camera className='text-blue-500'/> Photos</span>
                <span className='flex gap-1 hover:cursor-pointer hover:bg-gray-300 hover:border border-gray-100 rounded p-2'><Tag className='fill-current text-green-500'/> Tags</span>
                <span className='flex gap-1 hover:cursor-pointer hover:bg-gray-300 hover:border border-gray-100 rounded p-2'><Video/> Videos</span>
            </div>
        </div>
        {data.map((item, index)=>{
            return <Post className="h-100" key={index} author={item.author} description={item.description} image={item.image} property={item.property}/>
        })}
    </div>
  )
}

export default Feed