import { Table } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ManageBook = () => {
  let nav = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      alert('please login or singUp First..!!!')
      nav('../login')
    }
  }, [nav]);

  const [allBooks, setAllBooks] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    fetch("http://localhost:4000/upload/all-books", { cookie: localStorage.getItem('token') })
      .then((response) => response.json())
      .then((data) => {
        // console.log(localStorage.token);
        setCount(count+1)
        if (!localStorage.getItem("token")) {
          alert("Please login or sign up first!");
          nav("../login");
        }
        setAllBooks(data.data[0])

      })
      .catch((err) => {
        console.error("Error fetching books:", err); // Log the error
      });
  }, [nav,count]);

  const handleDelete = (id) => {
    fetch(`http://localhost:4000/upload/book/${id}`, {
      method: "DELETE"
    }).then(res => res.json()).then(data => {
      alert("Book is deleted successfully!")
      console.log(data);
      // setAllBooks(data.data)
    }).catch((err) => {
      console.log(err);
    })

  }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Manage Your Book Account</h2>
      {/* Table for book data */}
      <Table className='lg:w-[1180px]'>
        <Table.Head>
          <Table.HeadCell>No</Table.HeadCell>
          <Table.HeadCell>Book name</Table.HeadCell>
          <Table.HeadCell>Author name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Prices</Table.HeadCell>
          <Table.HeadCell>
            <span>Edit or Manage</span>
          </Table.HeadCell>
        </Table.Head>
        {/* {
          allBooks.map((book, index) => */}
            <Table.Body className="divide-y" key={allBooks.id}>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {count}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {allBooks.bookTitle}
                </Table.Cell>
                <Table.Cell>{allBooks.authorName}</Table.Cell>
                <Table.Cell>{allBooks.category}</Table.Cell>
                <Table.Cell>₹80</Table.Cell>
                <Table.Cell>
                  <Link to={`/admin/dashboard/edit-books/${allBooks.id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5">
                    Edit
                  </Link>
                  <button onClick={() => handleDelete(allBooks.id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600'>Delete</button>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          {/* )
        } */}
      </Table>
    </div>
  );
}

export default ManageBook;
