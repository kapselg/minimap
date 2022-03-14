import Gallery from "./components/Gallery/Gallery";
import Image from "./components/Image/Image";
import Cursor from "./components/Cursor/Cursor";
import "./App.css"
function App() {
  /**
   *
   * @param {string} name Image placeholder text
   * @param {string} link Link or location of the image
   */
  function Image(name, link){
    this.name = name
    this.link = link
  }
  const imagesArray = [
    new Image(
      "grass",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Grass-JW.jpg/640px-Grass-JW.jpg"
    ),
    new Image(
      "tree",
      "https://upload.wikimedia.org/wikipedia/commons/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg"
    ),
    new Image(
      "flower",
      "https://cdn.britannica.com/84/73184-004-E5A450B5/Sunflower-field-Fargo-North-Dakota.jpg"
    ),
    new Image(
      "flower",
      "https://cdn.britannica.com/84/73184-004-E5A450B5/Sunflower-field-Fargo-North-Dakota.jpg"
    ),
    new Image(
      "flower",
      "https://cdn.britannica.com/84/73184-004-E5A450B5/Sunflower-field-Fargo-North-Dakota.jpg"
    ),
    new Image(
      "flower",
      "https://cdn.britannica.com/84/73184-004-E5A450B5/Sunflower-field-Fargo-North-Dakota.jpg"
    ),
    new Image(
      "flower",
      "https://cdn.britannica.com/84/73184-004-E5A450B5/Sunflower-field-Fargo-North-Dakota.jpg"
    ),
    new Image(
      "flower",
      "https://cdn.britannica.com/84/73184-004-E5A450B5/Sunflower-field-Fargo-North-Dakota.jpg"
    ),
    new Image(
      "flower",
      "https://cdn.britannica.com/84/73184-004-E5A450B5/Sunflower-field-Fargo-North-Dakota.jpg"
    ),
  ];
  return (
    <div className="App">
      <Cursor></Cursor>
      <Gallery images={imagesArray}></Gallery>
    </div>
  );
}

export default App;
