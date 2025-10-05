import React, { useEffect, useState } from 'react';
import {  useNavigate, useParams } from 'react-router-dom';
import { Button, Label, TextInput, Textarea } from "flowbite-react";

const EditBooks = () => {
    let nav = useNavigate();
    const params = useParams();
    const [loader, setLoader] = useState({});

    useEffect(() => {

        fetch(`${process.env.REACT_APP_API_BASE_URL}/upload/books/${params.id}`, { method: "GET" })
            .then((response) => response.json())
            .then((result) => setLoader(result.data[0]))
            .catch((error) => console.error(error));
    }, [params]);
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
    const handleUpdate = (event) => {
        event.preventDefault();
        let updatedBookObj = {};
        const form = event.target;
        updatedBookObj.bookTitle = form.bookTitle.value;
        updatedBookObj.authorName = form.authorName.value;
        updatedBookObj.imgUrl = form.imgUrl.value;
        updatedBookObj.category = form.category.value;
        updatedBookObj.bookDescription = form.bookDescription.value;
        updatedBookObj.bookPdfUrl = form.bookPdfUrl.value;
        updatedBookObj.cookie = localStorage.getItem('token');

        // Perform the fetch request
        fetch(`${process.env.REACT_APP_API_BASE_URL}/upload/book/${params.id}`, {

            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedBookObj)
        })
            .then(res => res.json()).then(data => {
                alert(data.message)
                form.reset();
                nav('../admin/dashboard/manage')

            }).catch((err) => {
                alert(`${err}`)
            })
    };

    return (
        <div className='px-4 my-12 '>
            <h2 className='mb-8 text-3xl font-bold'>Update the Book data</h2>
            <form onSubmit={(e) => { handleUpdate(e) }} className="lg:w-[1180px] flex flex-wrap  gap-4">

                <div className='w-[48rem]'>
                    <div className="mb-2 block">
                        <Label htmlFor="bookTitle" value="Book Title" />
                    </div>
                    <TextInput id="bookTitle" name='bookTitle' type="text" placeholder="Book name" required defaultValue={loader.bookTitle} />
                </div>
                <div className='w-[48rem]'>
                    <div className="mb-2 block">
                        <Label htmlFor="authorName" value="Author Name" />
                    </div>
                    <TextInput id="authorName" name='authorName' type="text" placeholder="Author Name" required defaultValue={loader.authorName} />
                </div>

                <div className='w-[48rem]'>
                    <div className="mb-2 block">
                        <Label htmlFor="imgUrl" value="imgUrl" />
                    </div>
                    <TextInput id="imgUrl" name='Book img Url' type="text" placeholder="Book Img url" required defaultValue={loader.imgUrl} />
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

                <div className='w-[48rem]'>
                    <div className="mb-2 block">
                        <Label htmlFor="bookPdfUrl" value="Book pdf url" />
                    </div>
                    <TextInput id="bookPdfUrl" name='bookPdfUrl' type="text" placeholder="Book pdf url" required defaultValue={loader.bookPdfUrl} />
                </div>

                <div className=''>
                    <div className="mb-2 block ">
                        <Label htmlFor="bookDescription" value="Book Description" />
                    </div>
                    <Textarea id="bookDescription" type="text" name='bookDescription' placeholder="Write your boom description..."
                        className='w-[48rem] h-32 p-2 border rounded'
                        required rows={5} defaultValue={loader.description} />
                </div>

                <Button
                    type="submit"
                    className='bg-blue-700 px-6 py-2 text-white font-medium mt-5 w-[48rem] border rounded'>
                    Update Book
                </Button>
            </form>
        </div>
    )
}

export default EditBooks;