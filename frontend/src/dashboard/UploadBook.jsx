import React, { useEffect, useState } from 'react';
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UploadBook = () => {
  let nav = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      alert('please login or singUp First..!!!')
      nav('../login')
    }
  }, [nav]);

  const bookCatories = [
    "Mystery",
    "Fiction",
    "Fantasy",
    "Horror",
    "Self-help",
    "History",
    "Autobiography",
    "Biography"
  ]

  const [selectedBookCategories, setSelectedBookCategories] = useState(bookCatories[0]);
  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setSelectedBookCategories(event.target.value)
  }

  // handle book submission

  const handleBookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    let bookObject = {};

    bookObject.bookTitle = form.bookTitle.value;
    bookObject.authorName = form.authorName.value;
    bookObject.imgUrl = form.imgUrl.value;
    bookObject.category = form.category.value;
    bookObject.bookPdfUrl = form.bookPdfUrl.value;
    bookObject.description = form.bookDescription.value;
    bookObject.cookie = localStorage.getItem('token');

    if (!!bookObject && bookObject.bookTitle !== '' && !!localStorage.getItem('token')) {
      axios.post('http://localhost:3306/upload/uploadBook/', bookObject)
        .then((response) => {
          alert(response.data)
          nav('../')
          window.location.reload();
        })
        .catch((error) => {
          alert(error.response.data)
          console.log('something went wrong....!!', error);
          nav(`../singup`)
        });
    } else {
      alert('Fill information correctly')
    }
 

  };

  return (
    <div className='px-4 my-12 '>
      <h2 className='mb-8 text-3xl font-bold'>Upload a Book</h2>
      <form onSubmit={(e) => handleBookSubmit(e)} className="lg:w-[1180px] flex flex-wrap  gap-4">
        {/* Need to remove parent div if I want large input width */}
        {/* first row */}
        {/* <div className='flex gap-8'> */}
        <div className='w-[48rem]'>
          <div className="mb-2 block">
            <Label htmlFor="bookTitle" value="Book Title" />
          </div>
          <TextInput id="bookTitle" name='bookTitle' type="text" placeholder="Book name" required />
        </div>
        <div className='w-[48rem]'>
          <div className="mb-2 block">
            <Label htmlFor="authorName" value="Author Name" />
          </div>
          <TextInput id="authorName" name='authorName' type="text" placeholder="Author Name" required />
        </div>
        {/* </div> */}
        {/* 2nd row  book imgUrl*/}
        {/* <div className='flex gap-8'> */}
        <div className='w-[48rem]'>
          <div className="mb-2 block">
            <Label htmlFor="imgUrl" value="imgUrl" />
          </div>
          <TextInput id="imgUrl" name='Book img Url' type="text" placeholder="Book Img url" required />
        </div>
        {/* category */}
        <div className='w-[48rem]'>
          <div className="mb-2 block">
            <Label htmlFor="inputState" value="Book category" />
          </div>
          <select name="category" id="inputState" className='w-full rounded' value={selectedBookCategories} onChange={handleChangeSelectedValue}>
            {
              bookCatories.map((option) => <option key={option} value={option}>{option}</option>)
            }
          </select>
        </div>
        {/* </div> */}
        {/* dicription */}
        <div className=''>
          <div className="mb-2 block ">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea id="bookDescription" type="text" name='bookDescription' placeholder="Write your boom description..."
            className='w-[48rem] h-32 p-2 border rounded'
            required rows={5} />
        </div>
        <div className='w-[48rem]'>
          <div className="mb-2 block">
            <Label htmlFor="bookPdfUrl" value="Book pdf url" />
          </div>
          <TextInput id="bookPdfUrl" name='bookPdfUrl' type="text" placeholder="Book pdf url" required />
        </div>
        {/* <Button type="submit" className='mt-5'>Upload Book</Button> */}
        {/* <Button type="submit" className='bg-blue-700 px-6 py-2 text-white font-medium mt-5 w-1/2 lg:w-full border rounded'>Upload Book</Button> */}
        <Button
          type="submit"
          className='bg-blue-700 px-6 py-2 text-white font-medium mt-5 w-[48rem] border rounded'>
          Upload Book
        </Button>
      </form>
    </div>
  )
}

export default UploadBook;