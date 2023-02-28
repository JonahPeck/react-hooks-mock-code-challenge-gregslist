import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listing, onRemoveListing }) {


  const listings = listing.map((list) => (
    <ListingCard key={list.id} listing={list} onRemoveListing={onRemoveListing} />
  ))
  return (
    <main>
      <ul className="cards">
        {listings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
