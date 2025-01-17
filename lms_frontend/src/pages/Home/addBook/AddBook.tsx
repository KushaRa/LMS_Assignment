import { useState, ChangeEvent, FormEvent } from "react";
import React from "react";
import "./AddBook.css";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

interface Book {
  title: string;
  author: string;
  category: string;
  entrydDate: string; // Matches `EntryDate` in backend
  description?: string;
}

interface AddBookProps {
  onClose: () => void;
}

const AddBook: React.FC<AddBookProps> = ({ onClose }) => {
  const initialBook: Book = {
    title: "",
    author: "",
    category: "",
    entrydDate: new Date().toISOString().split("T")[0],
    description: "",
  };

  const [intBook, setBook] = useState<Book>(initialBook);

  const inputHandlers = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBook({ ...intBook, [name]: value });
    console.log(name, value);
  };

  // Modified submitForm: No need for book[] array handling
    const submitForm = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    console.log("Payload sent to backend:", intBook);
    try {
      const response = await axios.post('https://localhost:7270/api/Books', intBook, {
        headers: {
          "Content-Type": "application/json",}
        });
      
      if (response.status === 200) {
        console.log("Book Submitted Successfully");
        alert("Book Submitted Successfully");
        setBook(initialBook);
        window.location.reload(); //  refresh the entire page
      } 
      
    } catch (err) {
      console.error("Error submitting the book:", err);
      alert("Book is not Submitted. Please try again.");
    }
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
        <div className="row">
          <div className="labelCol">
            <label htmlFor="title">Book Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={intBook.title}
              placeholder="Enter book name"
              onChange={inputHandlers}
              required
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="row">
          <div className="labelCol">
            <label htmlFor="author">Author:</label>
            <input
              type="text"
              id="author"
              name="author"
              value={intBook.author}
              placeholder="Enter Author name"
              onChange={inputHandlers}
              required
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="row">
          <div className="labelCol">
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              name="category"
              value={intBook.category}
              onChange={inputHandlers}
              required
            >
              <option value="">Select Category</option>
              <option value="Novels">Novels</option>
              <option value="Short Stories">Short Stories</option>
              <option value="Children Stories">Children Stories</option>
              <option value="Educational Books">Educational Books</option>
              <option value="Science and Technology">Science and Technology</option>
              <option value="History and Geography">History and Geography</option>
            </select>
          </div>
        </div>

        {/* Row 4 */}
        <div className="row">
          <div className="labelCol">
            <label htmlFor="entrydDate">Entry Date:</label>
            <input
              type="date"
              name="entrydDate" // Use the typo to match backend
              value={intBook.entrydDate}
              onChange={inputHandlers}
              required
            />
          </div>
        </div>

        {/* Row 5 */}
        <div className="row1">
          <div className="labelCol">
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              name="description"
              value={intBook.description}
              placeholder="Description"
              onChange={inputHandlers}
            />
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
