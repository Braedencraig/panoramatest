import './App.css';
import * as PANOLENS from 'panolens'
// import * as THREE from 'three'
import px from './assets/px.jpg'
import py from './assets/py.jpg'
import pz from './assets/pz.jpg'
import nx from './assets/nx.jpg'
import nz from './assets/nz.jpg'
import ny from './assets/ny.jpg'



function App() {
  let panorama, viewer;

  // const path = './assets/'
  // const format = '.png';
  panorama = new PANOLENS.CubePanorama( [
      px, nx,
      py, ny,
      pz, nz
  ] );

  // panorama2 = new PANOLENS.ImagePanorama( 'asset/textures/equirectangular/field.jpg' );

  // panorama.link( panorama2, new THREE.Vector3( -807.50, 604.88, -5000.00 ) );
  // panorama2.link( panorama, new THREE.Vector3( -807.50, 604.88, -5000.00 ) );

  viewer = new PANOLENS.Viewer();
  viewer.add( panorama );
  // viewer.add( panorama, panorama2 );

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
