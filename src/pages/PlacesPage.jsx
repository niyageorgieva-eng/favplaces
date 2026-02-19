import "../styles/places.css";
// import { useState } from "react";
import PlaceCard from "../components/PlaceCard";
//import { placesData } from "../data/placesData";
import { useState, useEffect } from "react";


const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=1374&auto=format&fit=crop";

  function PlacesPage() {
  //const [places, setPlaces] = useState(placesData);            //slagame si spisuka ot placesdata
  const [places, setPlaces] = useState([]); 

//   useEffect(() => {
//   fetch("http://localhost:3001/places")
//     .then(res => res.json())
//     .then(data => {
//    //   console.log("DATA FROM SERVER:", data); 
//    setPlaces(data); //prenasochvam kum server
//     });
// }, []);

useEffect(() => {

  async function loadPlaces() {
    const response = await fetch("http://localhost:3001/places");
    const data = await response.json();
    setPlaces(data);
  }

  loadPlaces();

}, []);




  //   function addPlace() { // dobaviam krug
  //   const name = prompt("Place name:");
  //   if (!name) return;

  //   const image = prompt("Image URL (optional):") || "";

  //   const newPlace = {
  //     id: Date.now(),
  //     name: name,
  //     image: image || DEFAULT_IMAGE,
  //   };

  //   // setPlaces((oldPlaces) => [...oldPlaces, newPlace]);
  // }


async function addPlace() {
  const name = prompt("Place name:");   if (!name) return;

  const image = prompt("Image URL (optional):") || "";

  const newPlace = {
    name: name,     image: image || DEFAULT_IMAGE,
  };

  const response = await fetch("http://localhost:3001/places", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPlace),
  });

  const createdPlace = await response.json();

  setPlaces(prev => [...prev, createdPlace]); // method Create
}



  // function deletePlace(id) { //maham krug
  //   setPlaces((prev) => prev.filter((p) => p.id !== id));
  // }

async function deletePlace(id) {

  await fetch(`http://localhost:3001/places/${id}`, {
    method: "DELETE",
  });
  setPlaces((prev) => prev.filter((p) => p.id !== id)); //method: Delete
}



    return (
    <section className="placesPage">
      <section className="placeContainer">
        <section className="favPlace">
          <h2 className="placeTitle">My favourite places</h2>
        </section>

        <section className="places">
          {places.map((place) => (
            <PlaceCard
              key={place.id}
              place={place}
              onAdd={addPlace}
              onDelete={deletePlace}
            />
          ))}
        </section>
      </section>
    </section>
  );
}

export default PlacesPage;



// function Places() {
//   return (
//     <section className="placesPage">
//       <PlaceCard />
//     </section>
//   );
// }
// export default Places;