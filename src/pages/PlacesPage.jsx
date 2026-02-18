import "../styles/places.css";
import { useState } from "react";
import PlaceCard from "../components/PlaceCard";
import { placesData } from "../data/placesData";


const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=1374&auto=format&fit=crop";

  function PlacesPage() {
  const [places, setPlaces] = useState(placesData); //slagame si spisuka ot data

  

    function addPlace() { // dobaviam krug
    const name = prompt("Place name:");
    if (!name) return;

    const image = prompt("Image URL (optional):") || "";

    const newPlace = {
      id: Date.now(),
      name: name,
      image: image || DEFAULT_IMAGE,
    };

    setPlaces((oldPlaces) => [...oldPlaces, newPlace]);
  }

  function deletePlace(id) { //maham krug
    setPlaces((prev) => prev.filter((p) => p.id !== id));
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