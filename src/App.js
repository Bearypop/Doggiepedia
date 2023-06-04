import React, {useState, useEffect} from "react";
import Card from "./Card";
import dogs from "./dogs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./Details";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [dogList, setDogList] = useState(dogs);

  function handleChange(event) {
    setSearchValue(event.target.value);
  }

  useEffect(() => {
    const filteredList = dogs.filter(item => item.title.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1);
    setDogList(filteredList);
  }, [searchValue]);
  
  return (
    <div>
      <Router>
      
        <Routes>
          <Route
              path="/details"
              element={<Details/>}
          />

          <Route path="/" element={
          <div>
          <h1>Welcome to Doggiepedia!</h1>
          <input className="search-bar" onChange={handleChange} name="searchBar" autocomplete="off" placeholder="Find your favourite doggie!"/>
          <div className="dictionary">
            {dogList.map((item, index) => {
              return (
                <Card
                  key={index}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  fullDescription={item.fullDescription}
                />
              );
            })}
          </div>
          </div>
          } />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
