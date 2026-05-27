import React, { useEffect, useState } from "react";
import axios from "axios";
function Books() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:5000/books")
            .then((res) => {
                setBooks(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div>
            <h1>Books</h1>
            {
                books.map((book) => (
                    <div key={book.id}>
                        <h2>{book.id}.{book.title}</h2>
                    </div>
                ))
            }
        </div>
    );
}

export default Books;