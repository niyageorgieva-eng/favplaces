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

 ### Commit 5 -  Create Start page, login/register forms and profile navigation 
 - Creating / Start page, updating Routes
 - Creating login/Reg pages + forms 
 - Create svg profile icon in Nav + Logout menu(not functioning yet)
 - Adjusing css styles

 ### Commit 6 - Adding REST API 
 - install npm install -g json-server // json-server --watch db.json --port 3001
 - create db.json for places // remove placesData.js
   <!-- useState	react data box, fetch	take the data, setPlaces put in the box, update -->
- UseEffect fetch create / delete 

- useState

- updating db.json with users []
- Register form - REST (POST /users)
- Login form check user in REST (GET /users?email=...&password=...) 
- adding error ("authError">{error}) message

 ### Commit 7 -  Auth + ProtectedRoute + user places (default + hidden)
 - installing npm i js-cookie biblioteka
 - Adding Name/Family name to the login form(+ db)-  fixing Header f-n
 - Profile icon - Displaying user name, adjusting logout button functionality 
   Issue1 - only after page refresh the user name is visible, looking for a fix
   -> Workaround - Win. dispatch event + listener in Header
        * Fix header not updating after login — added custom auth-changed event and state reload 
          from localStorage to display username without refresh. ((js-cookie / localStorage))

- Issue2: accessing Places without login - fixes ProtectedRoute (guard) for routes
    *Creating components/ProtectedRoute.jsx, Ading Protected Route for Places & Gallery in app.jsx
- Issue3: adding/removing place applies to each user -fix userId  field in laces + userId filtering
   - subissue - i want the available places in db.json to be initially visible for everyone 
      * all places in db - default ("isDefault": true ), personalized ones - adding userId (creating new array) 
      * fixing delete places (to be deleted per user! ) 
      * adding array "hiddenPlaces" for deleted places from default ones

      *Cannot fix the issue, will create completely new logic 

TO DO - gallery [] / registration Form + name/f.name required (add new fields)
+ add button (if all plaeces are deleted)
 