import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './BookTable.css';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Book } from '@mui/icons-material';


interface Book {
  id: string;
  title: string;
  author: string;
  entrydDate: string;
  category: string;
  description: string;
}

const BookTable = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<Book[]>([]);
  const [error, setError] = useState<string | null>(null);
  //const [selectedBook, setSelectedBook] = useState<Book | null>(null);
 // const [updateBook, setUpdateBook] = useState<Book | null>(null);
  //const navigate = useNavigate();

 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://localhost:7270/api/Books');
        setData(response.data);  // response.data is now an array of Book[]
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          setError(error.message);  // safe to access `message` on an AxiosError
        } else {
          setError('An unknown error occurred');
        }
      }
    };
    fetchData();
  }, []);

  const handleDeleteBook = async (selectedBook: Book, navigate: (path: string) => void): Promise<void> => {
    if (!selectedBook) {
      alert('No book selected to delete.');
      return;
    }
    const confirmDelete = window.confirm("Are you sure you want to delete this book?");
    if (confirmDelete) {
    try {
      await axios.delete(`https://localhost:7270/api/Books/${selectedBook.id}`);
      alert('Book deleted successfully');
      window.location.reload(); // Refresh the entire page
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        alert(`Error Deleting the book: ${error.message}`);
        console.error("Deleting error:", error);
      } else {
        alert('An unknown error occurred while deleting the book.');
        console.error("Unknown error:", error);
      }
      navigate('/'); // Navigate to a different route if needed
    }
  }
  };

  if (error) return <div>Error: {error}</div>;

  return (
    <div className='bookDisplay'>
      <table>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Entry Date</th>
          <th>Category</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} >
              <td>{item.title}</td>
              <td>{item.author}</td>
              <td>{item.entrydDate}</td>
              <td>{item.category}</td>
              <td>{item.description}</td>
              <td><EditIcon />  
              <DeleteIcon onClick={() => handleDeleteBook(item, navigate)} /></td>
            </tr>
          ))}
        </tbody>
      </table>

     {/* {selectedBook && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit Book</h2>
            <form>
              <div className="row1">
                <label>Book Title:</label>
                <input
                  type="text"
                  name="title"
                  value={updateBook.title}
                  onChange={handleInputChange}
                />
              </div>
              <div className="row1">
                <label>Author:</label>
                <input
                  type="text"
                  name="author"
                  value={updateBook.author}
                  onChange={handleInputChange}
                />
                <label>Entry Date:</label>
                <input
                  type="date"
                  name="entrydDate"
                  value={updateBook.entrydDate}
                  onChange={handleInputChange}
                />
              </div>
              <div className="row1">
                <label>Category:</label>
                <input
                  type="text"
                  name="category"
                  value={updateBook.category}
                  onChange={handleInputChange}
                />
              </div>
              <label>Description :</label>
              <input
                type="text"
                name="description"
                value={updateBook.description}
                onChange={handleInputChange}
              />
              <button type="button" onClick={handleUpdateBook}>Save</button>
              <button type="button" onClick={handleDeleteBook}>Delete</button>
              <button type="button" onClick={() => setSelectedBook(null)}>Cancel</button>
            </form>
          </div>
        </div>
      )}*/}
    </div>
  );
};

export default BookTable;
