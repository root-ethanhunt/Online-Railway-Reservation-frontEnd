import SearchTrain from "./components/SearchTrain/NewSearchTrain";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/StaticHomePage/Card";
import Services from "./components/StaticHomePage/Services";
import ImageSlider from "./components/Navbar/ImageSlider";

import "./App.css";
import img1 from "./assets/t5.jpg";
import img2 from "./assets/t6.jpg";
import img3 from "./assets/t7.jpg";
import img4 from "./assets/t8.jpg";

const slides = [
  { url: img1, title: "t1" },
  { url: img2, title: "t2" },
  { url: img3, title: "t3" },
  { url: img4, title: "t4" },
  { url: img1, title: "t1" },
];
const containerStyles = {
  width: "100%",
  height: "480px",
  margin: "0 auto",
};

const Main = () => {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="container" style={containerStyles}>
        <ImageSlider slides={slides} />
        <button className="btn">CHARTS / VACANCY</button>
      </div>

      <SearchTrain className="cont"></SearchTrain>
      <Card></Card>
      <Services></Services>
    </div>
  );
};

export default HomePage;
