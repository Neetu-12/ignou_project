const express = require("express");
const router = express.Router();
// const conection = require("../dbConnection/db");
const createToken = require("../verificationJwt/createToken");
const verifyToken = require("../verificationJwt/verifyToken");

router.post('/uploadBook', verifyToken, (req, res) => {
    const { bookTitle, authorName, category, imgUrl, bookPdfUrl, description } = req.body;
    const userId = req.body.meta.userId;
    if (userId) {
        conection.query(`select * from books where email='${userId}';`, () => {
            if (0 > req.body.userId) {
                res.send("Not exist")
            }
            else {

                // conection.query(`insert into books( bookTitle, authorName, category, imgUrl, bookPdfUrl, description, userId)values ( '${bookTitle}', '${authorName}', '${category}','${imgUrl}', '${bookPdfUrl}', ${description},  '${userId}');`, (err, data) => {
                conection.query(`INSERT INTO books (bookTitle, authorName, category, imgUrl, bookPdfUrl, description, userId) VALUES ('${bookTitle}', '${authorName}', '${category}','${imgUrl}', '${bookPdfUrl}', '${description}',  '${userId}');`, (err, data) => {
                    if (!err) {
                        res.status(200).send("Successfully inserted books info.")
                    }
                    else {
                        // console.log(err, `insert into books( bookTitle, authorName, category, imgUrl, bookPdfUrl,description, userId)values ( '${bookTitle}', '${authorName}', '${category}','${imgUrl}', '${bookPdfUrl}' ,'${description}', '${userId}');`);// for validating error
                        res.send("Something went wrong")
                    }
                });
            }
        })
    }
    else {
        res.status(404).json({
            error:
                "wrong userID. Kindly check again."
        });
    }
});

router.get("/all-books/:category", (req, res) => {
    // Capture 'category' from the route parameters
    const { category: cagtegory } = req.params;

    // Check if the 'category' parameter exists
    if (cagtegory) {
        // Perform the query to fetch books based on category
        conection.query('SELECT * FROM books WHERE cagtegory = ?;', [cagtegory], (err, data) => {
            if (err) {
                return res.status(500).send("An error occurred while fetching books.");
            }
            // Send the retrieved data to the client
            res.status(200).json({
                message: "Books fetched successfully.",
                data: data
            });
        });
    } else {
        // If no category is provided, return an error message
        res.status(400).send("Please provide a category.");
    }
});

router.get("/all-books/category/:category", (req, res) => {
    // Capture 'category' from the route parameters
    const { category } = req.params;

    // Check if the 'category' parameter exists
    if (category) {
        // Perform the query to fetch books based on category
        conection.query(`SELECT * FROM books WHERE category like ?;`, [`%${category}%`], (err, data) => {
            if (err) {
                return res.status(500).send("An error occurred while fetching books.");
            }
            // Send the retrieved data to the client
            res.status(200).json({
                message: "Books fetched successfully.",
                data: data
            });
        });
    } else {
        // If no category is provided, return an error message
        res.status(400).send("Please provide a category.");
    }
});

router.get("/all-books", (req, res) => {
    // For a GET request, use req.query to capture query parameters if needed
    const { userId } = req.query;

    // Perform the query to fetch all books (userId is not needed for this query)
    conection.query(`SELECT * FROM books;`, (err, data) => {

        if (err) {
            // If an error occurs, send a 500 status code with an error message
            return res.status(500).send("An error occurred while fetching books.");
        }
        // If books are found, return them with a 200 status code
        res.status(200).json({
            message: "Books fetched successfully.",
            data: data
        });
    });
});


router.patch('/book/:id', verifyToken, (req, res) => {
    const id = req.params.id;
    const userId = req.body.meta.userId;
    const { bookTitle, authorName, category, imgUrl, bookPdfUrl } = req.body;

    // checking user behalf of book Id
    const userQuery = `select * from books where id = ? `
    conection.query(userQuery, [id], (err, result) => {
        if (result[0].userId == userId) {
            // SQL query updated to include all the fields
            const query = `UPDATE books 
                           SET bookTitle = ?, authorName = ?, category = ?, imgUrl = ?, bookPdfUrl = ? 
                           WHERE id = ? and userId = ?;`;

            conection.query(query, [bookTitle, authorName, category, imgUrl, bookPdfUrl, id, userId], (err, result) => {

                if (err) {
                    res.status(500).send({ error: err.message });
                }
                else {
                    res.send({ message: 'Record updated successfully' });
                }
            })

        } else {
            res.send({ message: 'You are not authrized user for updating this book.' })
        }

    })

});

router.delete('/book/:id', (req, res) => {
    const id = req.params.id;
    // DELETE FROM table_name WHERE condition;
    conection.query(`delete from books where id=${id};`, (err, result) => {
        if (err) {
            res.status(500).send({ error: err.message });
        }
        else {
            res.send({ message: 'Record deleted successfully' });
        }
    });

});

router.get("/books/:id", (req, res) => {
    const { id } = req.params;
    if (id) {
        conection.query(`SELECT * FROM books WHERE id=${id}`, (err, data) => {
            if (err) {
                return res.status(500).send("An error occurred while fetching books.");
            }
            // Send the retrieved data to the client
            res.status(200).json({
                message: "Books fetched successfully.",
                data: data
            });
        });
    } else {
        // If no category is provided, return an error message
        res.status(400).send("Please provide a id.");
    }
});

module.exports = router;
