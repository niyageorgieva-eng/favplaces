import "../styles/gallery.css";
import GalleryImg from "../components/GalleryImg";

const galleryData = [ 
  // suzdavam si masiv za snimkite v gallery
  {
    id: 1,
    type: "image",
    img: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=2070&auto=format&fit=crop",
    alt: "A serene beach with gentle waves and a sunset in the background.",
    className: "galleryitem1",
  },
  {
    id: 2,
    type: "image",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop",
    alt: "A tropical paradise with turquoise water and palm trees on a white sandy beach.",
    className: "galleryitem2",
  },
  {
    id: 3,
    type: "image",
    img: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?q=80&w=2070&auto=format&fit=crop",
    alt: "A wooden pier extending into the calm ocean under a clear blue sky.",
    className: "galleryitem3",
  },
  {
    id: 4,
    type: "image",
    img: "https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?q=80&w=2048&auto=format&fit=crop",
    alt: "Majestic cliffs overlooking the deep blue ocean with waves crashing against the rocks.",
    className: "galleryitem4",
  },
  {
    id: 5,
    type: "image",
    img: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=2070&auto=format&fit=crop",
    alt: "A golden sunset casting warm colors over the ocean and sandy shore.",
    className: "galleryitem5",
  },
  {
    id: 6,
    type: "video",
    video: "https://www.youtube.com/embed/DGIXT7ce3vQ",
    className: "galleryitem6",
  },
  {
    id: 7,
    type: "image",
    img: "https://images.unsplash.com/photo-1503756234508-e32369269deb?q=80&w=2070&auto=format&fit=crop",
    alt: "A wooden path leading to a quiet beach with a cloudy sky overhead.",
    className: "galleryitem7",
  },
  {
    id: 8,
    type: "image",
    img: "https://images.unsplash.com/photo-1517384084767-6bc118943770?q=80&w=1600&auto=format&fit=crop",
    alt: "Seagulls soaring above the ocean waves with a clear blue sky.",
    className: "galleryitem8",
  },
  {
    id: 9,
    type: "image",
    img: "https://images.unsplash.com/photo-1506252374453-ef5237291d83?q=80&w=1974&auto=format&fit=crop",
    alt: "A peaceful sunrise over the calm ocean, reflecting golden hues on the water.",
    className: "galleryitem9",
  },
  {
    id: 10,
    type: "image",
    img: "https://images.unsplash.com/photo-1561571994-3c61c554181a?q=80&w=1972&auto=format&fit=crop",
    alt: "Powerful deep ocean waves rolling towards the shore under a cloudy sky.",
    className: "galleryitem10",
  },
  {
    id: 11,
    type: "image",
    img: "https://images.unsplash.com/photo-1511545922313-ff50d69d1173?q=80&w=2074&auto=format&fit=crop",
    alt: "Rolling sand dunes at the beach with a bright blue sky and scattered clouds.",
    className: "galleryitem11",
  },
];

function GalleryPage() {
  return (
   <section className="galleryPage">
  <div className="galleryMain">
    <div className="gallery-container">
      <section className="gallery">
        {galleryData.map((item) => (
          <GalleryImg
  key={item.id}
  type={item.type}
  img={item.img}
  video={item.video}
  alt={item.alt}
  className={item.className}
          />
        ))}
      </section>
    </div>
  </div>
</section>
  );
}

export default GalleryPage;

// function Gallery() {
//   return (
//     <>
     
//       <main className="gallery-container galleryPage"> 
//         <section className="gallery">
//           <figure className="galleryitem1">
//             <a
//               href="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=2070&auto=format&fit=crop"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=2070&auto=format&fit=crop"
//                 alt="A serene beach with gentle waves and a sunset in the background."
//                 className="galleryimg"
//               />
//             </a>
//           </figure>

//           <figure className="galleryitem2">
//             <a
//               href="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop"
//                 alt="A tropical paradise with turquoise water and palm trees on a white sandy beach."
//                 className="galleryimg"
//               />
//             </a>
//           </figure>

//           <figure className="galleryitem3">
//             <a
//               href="https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?q=80&w=2070&auto=format&fit=crop"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?q=80&w=2070&auto=format&fit=crop"
//                 alt="A wooden pier extending into the calm ocean under a clear blue sky."
//                 className="galleryimg"
//               />
//             </a>
//           </figure>

//           <figure className="galleryitem4">
//             <a
//               href="https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?q=80&w=2048&auto=format&fit=crop"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?q=80&w=2048&auto=format&fit=crop"
//                 alt="Majestic cliffs overlooking the deep blue ocean with waves crashing against the rocks."
//                 className="galleryimg"
//               />
//             </a>
//           </figure>

//           <figure className="galleryitem5">
//             <a
//               href="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=2070&auto=format&fit=crop"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=2070&auto=format&fit=crop"
//                 alt="A golden sunset casting warm colors over the ocean and sandy shore."
//                 className="galleryimg"
//               />
//             </a>
//           </figure>

//           <figure className="galleryitem6">
//             <iframe
//               src="https://www.youtube.com/embed/DGIXT7ce3vQ"
//               className="galleryimg"
//               loading="lazy"
//               allowFullScreen
//               referrerPolicy="no-referrer-when-downgrade"
//               title="YouTube video"
//             />
//           </figure>

//           <figure className="galleryitem7">
//             <a
//               href="https://images.unsplash.com/photo-1503756234508-e32369269deb?q=80&w=2070&auto=format&fit=crop"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1503756234508-e32369269deb?q=80&w=2070&auto=format&fit=crop"
//                 alt="A wooden path leading to a quiet beach with a cloudy sky overhead."
//                 className="galleryimg"
//               />
//             </a>
//           </figure>

//           <figure className="galleryitem8">
//             <a
//               href="https://images.unsplash.com/photo-1517384084767-6bc118943770?q=80&w=1600&auto=format&fit=crop"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1517384084767-6bc118943770?q=80&w=1600&auto=format&fit=crop"
//                 alt="Seagulls soaring above the ocean waves with a clear blue sky."
//                 className="galleryimg"
//               />
//             </a>
//           </figure>

//           <figure className="galleryitem9">
//             <a
//               href="https://images.unsplash.com/photo-1506252374453-ef5237291d83?q=80&w=1974&auto=format&fit=crop"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1506252374453-ef5237291d83?q=80&w=1974&auto=format&fit=crop"
//                 alt="A peaceful sunrise over the calm ocean, reflecting golden hues on the water."
//                 className="galleryimg"
//               />
//             </a>
//           </figure>

 
//           <figure className="galleryitem10">
//             <a
//               href="https://images.unsplash.com/photo-1561571994-3c61c554181a?q=80&w=1972&auto=format&fit=crop"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1561571994-3c61c554181a?q=80&w=1972&auto=format&fit=crop"
//                 alt="Powerful deep ocean waves rolling towards the shore under a cloudy sky."
//                 className="galleryimg"
//               />
//             </a>
//           </figure>

//           <figure className="galleryitem11">
//             <a
//               href="https://images.unsplash.com/photo-1511545922313-ff50d69d1173?q=80&w=2074&auto=format&fit=crop"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1511545922313-ff50d69d1173?q=80&w=2074&auto=format&fit=crop"
//                 alt="Rolling sand dunes at the beach with a bright blue sky and scattered clouds."
//                 className="galleryimg"
//               />
//             </a>
//           </figure>
//         </section>
//       </main>
//     </>
//   );
// }
// export default Gallery;