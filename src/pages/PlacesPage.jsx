import "../styles/places.css";
// import { useState } from "react";
import PlaceCard from "../components/PlaceCard";
//import { placesData } from "../data/placesData";
import { useState, useEffect } from "react";


const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=1374&auto=format&fit=crop";

  

  function PlacesPage() {
  //const [places, setPlaces] = useState(placesData);            //slagame si spisuka ot placesdata
  const [places, setPlaces] = useState([]);  // nasochvam kum masiva

//   useEffect(() => {
//   fetch("http://localhost:3001/places")
//     .then(res => res.json())
//     .then(data => {
//    //   console.log("DATA FROM SERVER:", data); 
//    setPlaces(data); //prenasochvam kum server
//     });
// }, []);


  async function loadPlaces() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser) return;
    // const response = await fetch("http://localhost:3001/places");
      //   const response = await fetch(
      // `http://localhost:3001/places?userId=${currentUser.id}`
      const responseDefault = await fetch("http://localhost:3001/places?isDefault=true"); // Default places
      const defaultPlaces = await responseDefault.json();

      const personalPlaces = await fetch(
      `http://localhost:3001/places?userId=${currentUser.id}` // personal places
    );
    const myPlaces = await personalPlaces.json();
    // const combined = [...defaultPlaces, ...myPlaces]; // adding both in one array
    // const data = await response.json();
    // setPlaces(data);


    const responseHidden = await fetch(
  `http://localhost:3001/hiddenPlaces?userId=${currentUser.id}` // hidden places ONLY for this user
);
const hiddenPlaces = await responseHidden.json();
const hiddenIds = new Set(hiddenPlaces.map(h => String(h.placeId))); // place IDs - hiden
const visiblePlaces = defaultPlaces.filter(p => !hiddenIds.has(String(p.id))); // filtering

setPlaces([...visiblePlaces, ...myPlaces]); // combining
    // setPlaces(combined);
  }
useEffect(() => {
  loadPlaces();
  window.addEventListener("auth-changed", loadPlaces);
  return () => window.removeEventListener("auth-changed", loadPlaces);

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

  // const newPlace = {
  //   name: name,     image: image || DEFAULT_IMAGE,
  // };
const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const newPlace = {
    name: name,
    image: image || DEFAULT_IMAGE,
    userId: currentUser.id,   // ← ЕТО ТУК
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
  loadPlaces();
}



  // function deletePlace(id) { //maham krug
  //   setPlaces((prev) => prev.filter((p) => p.id !== id));
  // }

async function deletePlace(id) {
    // const place = places.find(p => p.id === id);
    const place = places.find(p => String(p.id) === String(id));

  if (!place) return;
const currentUser = JSON.parse(localStorage.getItem("currentUser")); //"hidden" for this user
  if (!currentUser) return;
    if (place.isDefault) {
    await fetch("http://localhost:3001/hiddenPlaces", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: String(currentUser.id),
        placeId: String(place.id)
      })
    })



    setPlaces(prev => prev.filter(p => String(p.id) !== String(id)));  // removing from UI
    return;
    
  }
 // Actual place deleting 
  await fetch(`http://localhost:3001/places/${id}`, { method: "DELETE" });

  setPlaces(prev => prev.filter(p => String(p.id) !== String(id)));
  }
  //           // If default -> do not delete from db, just remove from  UI (temporary) !!!!
  // if (place.isDefault) {
  //   setPlaces(prev => prev.filter(p => p.id !== id));
  //   return;
  // } 
  //           // If personal -> delete from db              !!!!!!!!!
  // await fetch(`http://localhost:3001/places/${id}`, {
  //   method: "DELETE",
  // });
  // setPlaces((prev) => prev.filter((p) => p.id !== id)); //method: Delete
// }



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