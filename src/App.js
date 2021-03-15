import './App.css';
import * as PANOLENS from 'panolens'
import * as THREE from 'three'
import field from './assets/test360.jpg'
import field2 from './assets/museum.jpg'
import field3 from './assets/field.jpg'
import sun from './assets/sunnobg.png'
import plant from './assets/plantnobg.png'
import mrbean from './assets/mrbean.jpg'
import Burger from './components/Burger'
import test from './assets/programming.gif'



function App() {
  let panorama, panorama2, panorama3, viewer, infospot, infospot2, infospot3, infospot4, panorama_video;

  panorama_video = new PANOLENS.VideoPanorama( 'https://pchen66.github.io/Panolens/examples/asset/textures/video/1941-battle-low.mp4' );

  infospot = new PANOLENS.Infospot( 
    600, 
    sun
  );

  infospot2 = new PANOLENS.Infospot( 
    600, 
    plant
  );

  infospot4 = new PANOLENS.Infospot( 
    600, 
    mrbean
  );
  
  infospot.position.set( 1000, 100, -2000 );
  infospot.addHoverText( "here comes da sun", 100 );
  infospot.addEventListener( 'click', function(){
    viewer.setPanorama( panorama2 );
  } );
  
  infospot2.position.set( 100, 100, -2000 );
  infospot2.addHoverText( "woah funky plant", 100 );
  infospot2.addEventListener( 'click', function(){
    viewer.setPanorama( panorama3 );
  } );


  // infospot3.position.set( 1000, 100, -2000 );  
  infospot4.position.set( 400, 100, -2000 );

  panorama = new PANOLENS.ImagePanorama( field );
  panorama.add( infospot );
  panorama.add( infospot2 );

  panorama.link( panorama_video, new THREE.Vector3( -807.50, 604.88, -5000.00 ) );
  panorama_video.link( panorama, new THREE.Vector3( -807.50, 604.88, -5000.00 ) );  

  panorama2 = new PANOLENS.ImagePanorama( field2 );
  panorama3 = new PANOLENS.ImagePanorama( field3 );

  // panorama2.add( infospot3 );
  panorama3.add( infospot4 );

  
  panorama3.link( panorama, new THREE.Vector3( -807.50, 604.88, -5000.00 ) );
  panorama2.link( panorama, new THREE.Vector3( -807.50, 604.88, -5000.00 ) );

  infospot3 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
  infospot3.position.set( 1000, -600, -2000 );
  setTimeout(() => {
    infospot3.addHoverElement( document.getElementById( 'desc-container' ), 200 );
    panorama2.add( infospot3 );
  }, 1000)

  viewer = new PANOLENS.Viewer({autoHideInfospot: false});
  viewer.add( panorama, panorama2, panorama3, panorama_video);

  const style = {
    display: 'none'
  }


  const boxWidth = 100;
  const boxHeight = 100;
  const boxDepth = 100;
  const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
  const loader = new THREE.TextureLoader();
  const material = new THREE.MeshBasicMaterial({
    map: loader.load('https://threejsfundamentals.org/threejs/resources/images/wall.jpg'),
  });
  const cube = new THREE.Mesh(geometry, material);
  cube.position.set(-300, 100, 100);
  panorama.add( cube );


viewer.addUpdateCallback(function(){
  cube.rotation.y += 0.05;
  cube.rotation.x += 0.02;
});






  return (
    <>
      <Burger />
      <div className="App">
        <div id="desc-container" style={style}>
            <iframe src="https://www.youtube.com/embed/D7icsuamx5E"></iframe>
            <div className="title">China's Forgotten War</div>
            <img src={test} alt="Computer man" />
            <div className="text">WWII came to the small town of Tai’erzhuang in central China – and it was never the same again. The town was strategically placed, on the north-south transport railway corridor and the ancient Grand Canal, and so was a focus of the Japanese Imperial army as it advanced. Li Jing Shan was only a child when his family fled the fighting. They returned to find their home, and most of the town, in ruins.</div>
        </div>
      </div>
    </>
  );
}

export default App;
