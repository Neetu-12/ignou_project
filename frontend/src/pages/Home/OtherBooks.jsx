import React, { useEffect, useState } from 'react'
import BookCards from '../../components/BookCards/BookCards';
import bookData from '../../bookData.json';

const OtherBooks = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/upload/all-books`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setBooks(data.data.slice(0, 8));
            } catch (error) {
                console.error('Error fetching data:', error);
                setBooks(bookData);  // Fallback to `bookData` in case of error
            }
        };
        fetchBooks();
    }, []);

    return (
        <div>
            <BookCards books={books} headline='Other Books' />
        </div>
    )
}

export default OtherBooks;