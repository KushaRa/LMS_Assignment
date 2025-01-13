import { useState, ChangeEvent, FormEvent } from "react";
import React from "react";
import "./AddBook.css";
import CloseIcon from "@mui/icons-material/Close";
//import axios from "axios";

interface Book {
  bookID: string;
  bookName: string;
  author: string;
  category: string;
  other: string;
  
}

interface AddBookProps {
  onClose: () => void;
}

const AddBook: React.FC<AddBookProps> = ({ onClose }) => {
  const initialBook: Book = {
    bookID: "",
    bookName: "",
    author: "",
    category: "",
    other: ""
    
  };

  const [intBook, setBook] = useState<Book>(initialBook);

  const inputHandlers = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBook({ ...intBook, [name]: value });
    console.log(name, value);
  };

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted with data:", intBook);
    alert("Form submitted successfully (mock).");
    setBook(initialBook); // Reset form fields
  };

return (
    <div className="addNewBook">
      {/* Heading */}
      <div className="heading">
        <h2>Add New Book</h2>
        <button className="closeButton" onClick={onClose}>
          <CloseIcon />
        </button>
      </div>

      {/* Form */}
      <form onSubmit={submitForm}>
        {/* Row 1 */}
        <div className="row1">
          <div className="labelCol">
            <label htmlFor="bookID">Book ID:</label>
            <input
              type="text"
              id="bookID"
              name="bookID"
              value={intBook.bookID}
              placeholder="Enter book ID"
              onChange={inputHandlers}
            />
          </div>

          <div className="labelCol">
            <label htmlFor="bookName">Book Title:</label>
            <input
              type="text"
              id="bookName"
              name="bookName"
              value={intBook.bookName}
              placeholder="Enter book name"
              onChange={inputHandlers}
            />
          </div>
        </div>

        {/* Section heading */}
        <h3>Book Information</h3>

        {/* Row 2 */}
        <div className="row2">
          <div className="labelCol">
            <label htmlFor="author">Author:</label>
            <input
              type="text"
              id="author"
              name="author"
              value={intBook.author}
              placeholder="Enter Author name"
              onChange={inputHandlers}
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="row1">
          <div className="labelCol">
            <label htmlFor="category">Category:</label>
            <select id="category" name="category" value={intBook.category} onChange={inputHandlers}>
              <option value="">Select Category</option>
              <option value="Novels">Novels</option>
              <option value="Short Stories">Short Stories</option>
              <option value="Children Stories">Children Stories</option>
              <option value="Educational Books">Educational Books</option>
              <option value="Science and Technology">Science and Technology</option>
              <option value="History and Geography">History and Geography</option>
            </select>
          </div>

          <div className="row1">
          <div className="labelCol">
            <label htmlFor="other">Other Details :</label>
            <input type="text" id="other" name="other" value={intBook.other}  placeholder="Enter book ID" onChange={inputHandlers} />
          </div>

        </div>
        </div>

        {/* Submit button */}
        <button className="submitButton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBook;
