import React, { useState } from "react";
import NavBar from "../../../components/navBar";
import AddBook from "../addBook/AddBook";
//import BookTable from "../BookTable/bookTable";
import "./Home.css";

const Home: React.FC = () => {
  const [formOpen, setFormOpen] = useState<boolean>(false);

  const handleOpen = (): void => {
    console.log("Opening AddBook form...");
    setFormOpen(true);
  };

  const handleClose = (): void => {
    console.log("Closing AddBook form...");
  setFormOpen(false);
  };

  return (
    <div className="homesec">
      <div className="nav"><NavBar /></div>
      <div className="home">
        <div className="container1">
          <div className="buttonSection">
            <div className="addBookContainer">
              <button className="AddBook" onClick={handleOpen}>
                Add Book/issue book
              </button>
            <div className="search-bar" style={{ margin: "20px" }}>
            <input
              type="text"
              placeholder="Search for the book"/>
          </div>
            </div>

           </div>

          {/* Popup Form */}
          {formOpen && (
            <div className="popupBackdrop">
              <div className="popupContent">
                <AddBook onClose={handleClose} />
              </div>
            </div>
          )}
        </div>

        <div className="summaryTable" style={{ backgroundColor: "white" }}>
         

          <div className="bkTab" style={{ margin: "20px" }}>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
