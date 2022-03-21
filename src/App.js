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
      "1",
      "https://i.ibb.co/Bfzt7YP/1.jpg"
    ),
    new Image(
      "3",
      "https://i.ibb.co/g9g1M2X/3.jpg"
    ),
    new Image(
      "4",
      "https://i.ibb.co/86MRSSS/4.jpg"
    ),
    new Image(
      "5",
      "https://i.ibb.co/Jrhm1yf/5.jpg"
    ),
    new Image(
      "6",
      "https://i.ibb.co/rMFqxsm/6.jpg"
    ),
    new Image(
      "7",
      "https://i.ibb.co/ZK7hzHZ/7.jpg"
    ),
    new Image(
      "8",
      "https://i.ibb.co/By9SbfH/8.jpg"
    ),
    new Image(
      "9",
      "https://i.ibb.co/QQRbKHH/9.jpg"
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
