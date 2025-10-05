import { Table } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/Authprovider';

const ManageBook = () => {
  const isAuthenticated = useContext(AuthContext);
  console.log(isAuthenticated, 'isAuthenticated....');

  const nav = useNavigate();
  const [allBooks, setAllBooks] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Redirect if no token
    if (!localStorage.getItem("token")) {
      alert("Please login or sign up first!");
      nav("../login");
      return;
    }

    fetch("http://localhost:4000/upload/all-books", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCount(prev => prev + 1); // ✅ safe increment
        setAllBooks(data.data || []); // ✅ expect array
      })
      .catch((err) => {
        console.error("Error fetching books:", err);
      });
  }, [nav]);

  const handleDelete = (id) => {
    fetch(`http://localhost:4000/upload/book/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Book is deleted successfully!");
        // ✅ remove deleted book from state
        setAllBooks((prev) => prev.filter((book) => book.id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Manage Your Book Account</h2>
      <Table className="lg:w-[1180px]">
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

        <Table.Body className="divide-y">
          {allBooks.map((book, index) => (
            <Table.Row
              key={book.id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {index + 1}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {book.bookTitle}
              </Table.Cell>
              <Table.Cell>{book.authorName}</Table.Cell>
              <Table.Cell>{book.category}</Table.Cell>
              <Table.Cell>₹80</Table.Cell>
              <Table.Cell>
                <Link
                  to={`/admin/dashboard/edit-books/${book.id}`}
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(book.id)}
                  className="bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600"
                >
                  Delete
                </button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default ManageBook;
