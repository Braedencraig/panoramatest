import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";

import Guided from "./pages/Guided";
import SelfGuided from "./pages/SelfGuided";

import field from "./assets/test360.jpg";
import field2 from "./assets/museum.jpg";
import field3 from "./assets/field.jpg";
import sun from "./assets/sunnobg.png";
import plant from "./assets/plantnobg.png";
import mrbean from "./assets/mrbean.jpg";
import Burger from "./components/Burger";
import test from "./assets/programming.gif";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  // let panorama,
  //   panorama2,
  //   panorama3,
  //   viewer,
  //   infospot,
  //   infospot2,
  //   infospot3,
  //   infospot4,
  //   panorama_video,
  //   infospot32,
  //   infospot33,
  //   infospot42,
  //   infospot43,
  //   infospot44;

  // panorama_video = new PANOLENS.VideoPanorama(
  //   "https://pchen66.github.io/Panolens/examples/asset/textures/video/1941-battle-low.mp4"
  // );

  // infospot = new PANOLENS.Infospot(600, sun);

  // infospot2 = new PANOLENS.Infospot(600, plant);

  // infospot4 = new PANOLENS.Infospot(600, mrbean);

  // infospot4.addHoverText("Text");
  // infospot4.lockHoverElement();

  // infospot42 = new PANOLENS.Infospot(600, mrbean);

  // infospot42.addHoverText("Text");
  // infospot42.lockHoverElement();

  // infospot43 = new PANOLENS.Infospot(600, mrbean);

  // infospot44 = new PANOLENS.Infospot(600, mrbean);

  // infospot.position.set(1000, 100, -2000);
  // // infospot.addHoverText( "Videos & Gifs Examples", 100 );
  // infospot.addEventListener("click", function () {
  //   viewer.setPanorama(panorama2);
  // });

  // infospot2.position.set(100, 100, -2000);
  // // infospot2.addHoverText( "Picture Example", 100 );
  // infospot2.addEventListener("click", function () {
  //   viewer.setPanorama(panorama3);
  // });

  // infospot3 = new PANOLENS.Infospot(300, PANOLENS.DataImage.Info);
  // infospot3.position.set(1000, -600, -2000);
  // setTimeout(() => {
  //   infospot3.addHoverElement(document.getElementById("desc-container"), 200);
  //   panorama2.add(infospot3);
  // }, 1000);

  // infospot32 = new PANOLENS.Infospot(300, PANOLENS.DataImage.Info);
  // infospot32.position.set(-3000, -600, -2000);
  // setTimeout(() => {
  //   infospot32.addHoverElement(
  //     document.getElementById("desc-container-two"),
  //     200
  //   );
  //   panorama2.add(infospot32);
  // }, 1000);

  // infospot33 = new PANOLENS.Infospot(300, PANOLENS.DataImage.Info);
  // infospot33.position.set(-5000, -600, -2000);
  // setTimeout(() => {
  //   infospot33.addHoverElement(
  //     document.getElementById("desc-container-three"),
  //     200
  //   );
  //   panorama2.add(infospot33);
  // }, 1000);

  // infospot4.position.set(400, 100, -2000);
  // infospot42.position.set(2000, 100, -2000);
  // infospot43.position.set(3000, 100, -2000);
  // infospot44.position.set(-1000, 200, -2000);

  // panorama = new PANOLENS.ImagePanorama(field);
  // panorama2 = new PANOLENS.ImagePanorama(field2);
  // panorama3 = new PANOLENS.ImagePanorama(field3);

  // panorama.add(infospot);
  // panorama.add(infospot2);

  // panorama3.add(infospot4);
  // panorama3.add(infospot42);
  // panorama3.add(infospot43);
  // panorama3.add(infospot44);

  // panorama.link(panorama_video, new THREE.Vector3(-807.5, 604.88, -5000.0));
  // panorama_video.link(panorama, new THREE.Vector3(-807.5, 604.88, -5000.0));
  // panorama2.link(panorama, new THREE.Vector3(-807.5, 604.88, -5000.0));
  // panorama3.link(panorama, new THREE.Vector3(-807.5, 604.88, -5000.0));

  // viewer = new PANOLENS.Viewer({ autoHideInfospot: false });
  // viewer.add(panorama, panorama2, panorama3, panorama_video);

  // const style = {
  //   display: "none",
  // };

  // const boxWidth = 100;
  // const boxHeight = 100;
  // const boxDepth = 100;
  // const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
  // const loader = new THREE.TextureLoader();
  // const material = new THREE.MeshBasicMaterial({
  //   map: loader.load(
  //     "https://threejsfundamentals.org/threejs/resources/images/wall.jpg"
  //   ),
  // });
  // const cube = new THREE.Mesh(geometry, material);
  // cube.position.set(-300, 100, 100);
  // panorama.add(cube);

  // viewer.addUpdateCallback(function () {
  //   cube.rotation.y += 0.05;
  //   cube.rotation.x += 0.02;
  // });

  return (
    <>
      <Router>
        <Burger />
        <div className="App">
          {/* <div id="desc-container" style={style}>
            <iframe
              title="asdas"
              src="https://pchen66.github.io/Panolens/examples/asset/textures/video/1941-battle-low.mp4"
            ></iframe>
          </div>
          <div id="desc-container-two" style={style}>
            <iframe
              title="asdas"
              src="https://pchen66.github.io/Panolens/examples/asset/textures/video/1941-battle-low.mp4"
            ></iframe>
          </div>
          <div id="desc-container-three" style={style}>
            <img src={test} alt="Computer man" />
          </div> */}
        </div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/self-guided">
            <SelfGuided />
          </Route>
          <Route path="/guided">
            <Guided />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
