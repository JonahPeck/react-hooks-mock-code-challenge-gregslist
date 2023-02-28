import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";


function App() {
  // const [showListing, setShowListing] = useState(true);
  const [listing, setListing] = useState([]);
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then(setListing);
  }, []);

  function handleRemoveListing(id) {
    const newListing = listing.filter((listing) =>
      listing.id !== id);
    setListing(newListing);

  }

  const listingToDisplay = listing.filter((list) =>
    list.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <Header onSearch={setSearch} />
      <ListingsContainer
        listing={listingToDisplay}
        onRemoveListing={handleRemoveListing}
      />
    </div>
  );
}

export default App;
