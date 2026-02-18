## Progress Log

### Commit 1 – Project creation + github connection

### Commit 2 – Components
- Created Header Footer and Places components + pages.
- base layout (nav bar + main section + footer).
- Learned how React composes UI using components.
- migrating and adapting applicable code parts (main + nav) from previous 
  project, created in II semester (web design practicum)
  (main from html with repeatebla elements + imgs => component opraviane na tag />)
- migrated the gallery but cannot test - routing is needed

### Problems I had
- React Router not installed → white screen
- Missing imports broke the application

  ### Commit 3 - Prepare project for routing (cleanup + navigation adjustments)

- Installed and configured React Router.
- Created routes for Places and Gallery.
- Navigation -> NavLink.
- issue:  leftover <main> tags inside the Places page. Conflict with the layout.  
- No '/' yet, will be implemented with login/reg pages 
- Gallery: - too many repeating blocks → moving to a component + data array.
- renaming pages/components ( caused import conflicts).
- video not loading  - mixing destructuring and props + missing type/video
- Fixing layout on zoom (header/footer). (It turned out that I couldn't fix zoom not to affect the header at all.)
- Placecard component - many repeating blocks - optimization needed (array/map)
- Fixing Places grid (dropping on the next row @  zoom in)
- Have to add <img ..loading="lazy" & decoding="async" />

  ### Commit 4 - Adjusting components & adding Add/Delete options (hooks for places)
- placesData.js creation - moving all images from placecard
- css za add/delete button
- (UseState)
- setPlaces((oldPlaces) => [...oldPlaces, newPlace]); (hard conception to me)
    oldPlaces = arrai in update moment  ->  onAdd(newPlace) - updated
          *New state -> *React checks .map() -> *new  PlaceCard rendered!!!
- Issue: if all cards are deleted - no add button.. 
- Issue - no Add button if all elements are deleted 

