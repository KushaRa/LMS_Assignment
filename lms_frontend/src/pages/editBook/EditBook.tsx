import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './EditBook.css';
import CloseIcon from "@mui/icons-material/Close";

interface Book {
  id: string;
  title: string;
  author: string;
  entrydDate: string;
  category: string;
  description: string;
}

const EditBook: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the book ID from the URL
  const navigate = useNavigate();
  
  const [updateBook, setUpdateBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch book details when component mounts
  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`https://localhost:7270/api/Books/${id}`);
        setUpdateBook(response.data);
      } catch (err) {
        setError('Failed to fetch book details');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchBookDetails();
  }, [id]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (updateBook) {
      setUpdateBook({ ...updateBook, [name]: value });
    }
  };

  const handleUpdateBook = async () => {
    if (!updateBook) return;

    try {
      await axios.put(`https://localhost:7270/api/Books/${updateBook.id}`, updateBook);
      alert('Book updated successfully');
      navigate('/'); // Navigate back to the BookTable after updating
    } catch (err) {
      setError('Failed to update the book');
      console.error(err);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='editclass'>
    <div className="headingEdit">
    <div className="heading">
      <h2>Edit Book</h2>
      <button className="closeButton" onClick={() => navigate('/home')}>
        <CloseIcon />
      </button>
    </div>
      
      <form>
        <label>Book Title:</label>
          <input
            type="text"
            name="title"
            value={updateBook?.title || ''}
            onChange={handleInputChange}
          />
                
          <label>Author:</label>
          <input
            type="text"
            name="author"
            value={updateBook?.author || ''}
            onChange={handleInputChange}
          />
          <label>Entry Date:</label>
          <input
            type="date"
            name="entrydDate"
            value={updateBook?.entrydDate || ''}
            onChange={handleInputChange}
          />      
       
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={updateBook?.category || ''}
            onChange={handleInputChange}
          />
        
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={updateBook?.description || ''}
          onChange={handleInputChange}
        />
        <button className= 'saveButton' type="button" onClick={handleUpdateBook}>
          Save
        </button>
        <button className= 'cancelButton' type="button" onClick={() => navigate('/')}>
          Cancel
        </button>
      </form>
      </div>
    </div>
  );
};

export default EditBook;
