/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from "react";
import * as PANOLENS from "panolens";
import * as THREE from "three";
import ReactHowler from "react-howler";
import GifLoader from "three-gif-loader";
// Spheres
import one from "../assets/spheres/one.jpg";
import two from "../assets/spheres/two.jpg";
import three from "../assets/spheres/three.jpg";
import four from "../assets/spheres/four.jpg";
import five from "../assets/spheres/five.jpg";
import six from "../assets/spheres/six.jpg";
import seven from "../assets/spheres/seven.jpg";
// Artworks
import imagePlaceholder from "../assets/art/artworkPlaceholder.jpg";
import gifPlaceholder from "../assets/gifs/gifPlaceholder.gif";
// Audio
import audio from "../assets/audio/audio.mp3"

export default function Guided() {
  const [progressEl, setProgessEl] = useState(null);
  const spanEl = useRef(null);

  var panorama1,
      panorama2,
      panorama3,
      panorama4,
      panorama5,
      panorama6,
      panorama7,
      panorama8,
      viewer;

  var sphereOneArt, 
  sphereTwoArt1, 
  sphereTwoArt2, 
  sphereThreeArt, 
  sphereFourArt1, 
  sphereFourArt2, 
  sphereFiveArt1, 
  sphereFiveArt2,
  sphereSixArt,
  sphereSevenArt;

  useEffect(() => {
    setProgessEl(document.querySelector("#progress"));
  }, [setProgessEl]);

  var tweeningDelay = 300;
  
  function delayExecute(func, delay) {
    setTimeout(func, delay);
  }

  function onLoad() {
    setTimeout(() => {
      onWelcomeComplete();
    }, 3000);
  }

  function onEnter(event) {
    if (progressEl) {
      progressEl.style.width = 0;
      progressEl.classList.remove("finish");
    }
  }

  function onProgress(event) {
    var progress = (event.progress.loaded / event.progress.total) * 100;
    if (progressEl) {
      progressEl.style.width = progress + "%";
      if (progress === 100) {
        progressEl.classList.add("finish");
      }
    }
  }

  function onWelcomeComplete() {
    delayExecute(sphereOneArt.focus.bind(sphereOneArt, 10000), tweeningDelay);
    setTimeout(() => {
      moveToSphereTwo();
    }, 5000);
  }

  function moveToSphereTwo() {
    viewer.remove(panorama1)
    viewer.setPanorama(panorama2)
    setTimeout(() => {
      introSphereTwo();
    }, 5000);
  }

  function introSphereTwo() {
    // delayExecute(sphereTwoArt2.focus.bind(sphereTwoArt2, 20000), tweeningDelay);
    // setTimeout(() => {
    //   sphereTwoArtTwo();
    // }, 15000);
  }

  function sphereTwoArtTwo() {
    // delayExecute(sphereTwoArt1.focus.bind(sphereTwoArt1, 20000), tweeningDelay);
  }

  // Infospots
  sphereOneArt = new PANOLENS.Infospot(10e-7);
  sphereTwoArt1 = new PANOLENS.Infospot(10e-7);
  sphereTwoArt2 = new PANOLENS.Infospot(10e-7);
  sphereThreeArt = new PANOLENS.Infospot(10e-7);
  sphereFourArt1 = new PANOLENS.Infospot(10e-7);
  sphereFourArt2 = new PANOLENS.Infospot(10e-7);
  sphereFiveArt1 = new PANOLENS.Infospot(10e-7);
  sphereFiveArt2 = new PANOLENS.Infospot(10e-7);
  sphereSixArt = new PANOLENS.Infospot(10e-7);
  sphereSevenArt = new PANOLENS.Infospot(10e-7);
  // Infospots positioning
  sphereOneArt.position.set(-30, 100, 340);
  sphereTwoArt1.position.set(-160, 220, 420);
  sphereTwoArt2.position.set(10, 210, -440);
  sphereThreeArt.position.set(-450, 130, 90);
  sphereFourArt1.position.set(-350, -10, 10);
  sphereFourArt2.position.set(350, 80, -60);
  sphereFiveArt1.position.set(-350, 100, 10);
  sphereFiveArt2.position.set(350, 80, -60);
  sphereSixArt.position.set(-350, 160, -220);
  sphereSevenArt.position.set(-200, 160, -350);

  // Create spheres
  panorama1 = new PANOLENS.ImagePanorama(one);
  panorama2 = new PANOLENS.ImagePanorama(two);
  panorama3 = new PANOLENS.ImagePanorama(three);
  panorama4 = new PANOLENS.ImagePanorama(four);
  panorama5 = new PANOLENS.ImagePanorama(five);
  panorama6 = new PANOLENS.ImagePanorama(six);
  panorama7 = new PANOLENS.ImagePanorama(seven);
  panorama8 = new PANOLENS.ImagePanorama(one);

  // Link spheres
  panorama1.link(panorama2, new THREE.Vector3(-207.5, 504.88, -6000.0), 600, `${process.env.PUBLIC_URL + 'next.png'}`);
  // Edgecase for bug in panolens for second image useage, has to do with caching on their end.
  panorama2.link(panorama3, new THREE.Vector3(-6907.5, 304.88, 1000.0), 600, `${process.env.PUBLIC_URL + 'next.png'}`);
  panorama2.link(panorama3, new THREE.Vector3(-6907.5, 304.88, 1000.0), 600, `${process.env.PUBLIC_URL + 'next.png'}`);
  panorama3.link(panorama4, new THREE.Vector3(-207.5, 504.88, -6000.0), 600, `${process.env.PUBLIC_URL + 'next.png'}`);
  panorama4.link(panorama5, new THREE.Vector3(-207.5, 504.88, -6000.0), 600, `${process.env.PUBLIC_URL + 'next.png'}`);
  panorama5.link(panorama6, new THREE.Vector3(-207.5, 504.88, -6000.0), 600, `${process.env.PUBLIC_URL + 'next.png'}`);
  panorama6.link(panorama7, new THREE.Vector3(-207.5, 504.88, -6000.0), 600, `${process.env.PUBLIC_URL + 'next.png'}`);
  panorama7.link(panorama8, new THREE.Vector3(-207.5, 504.88, -6000.0), 600, `${process.env.PUBLIC_URL + 'next.png'}`);

  // Fade in for spheres
  const container = document.getElementsByClassName('panolens-container')[0]
  if(container) {
    panorama2.addEventListener( 'enter-fade-start', function(){
      // viewer.tweenControlCenter(new THREE.Vector3(0, 0, 5000), 0)
      container.classList.add('fade-in')
      setTimeout(() => {
        container.classList.remove('fade-in')
      }, 6000)
    });
    panorama3.addEventListener( 'enter-fade-start', function(){
      container.classList.add('fade-in')
      setTimeout(() => {
        container.classList.remove('fade-in')
      }, 6000)
    });
    panorama4.addEventListener( 'enter-fade-start', function(){
      container.classList.add('fade-in')
      setTimeout(() => {
        container.classList.remove('fade-in')
      }, 6000)
    });
    panorama5.addEventListener( 'enter-fade-start', function(){
      container.classList.add('fade-in')
      setTimeout(() => {
        container.classList.remove('fade-in')
      }, 6000)
    });
    panorama6.addEventListener( 'enter-fade-start', function(){
      container.classList.add('fade-in')
      setTimeout(() => {
        container.classList.remove('fade-in')
      }, 6000)
    });
    panorama7.addEventListener( 'enter-fade-start', function(){
      container.classList.add('fade-in')
      setTimeout(() => {
        container.classList.remove('fade-in')
      }, 6000)
    });  
    panorama8.addEventListener( 'enter-fade-start', function(){
      const end = Array.from(document.getElementsByClassName('end'))
      if(end) {
        end[0].style.display = 'flex'
        end[0].classList.add('show')
      }
    });  
  }

  // Gif loader
  const loader = new GifLoader();

  // Sphere one artwork - contains one
  const geometryOne = new THREE.PlaneGeometry(300, 300, 300);
  const loaderOne = new THREE.TextureLoader();
  const materialOne = new THREE.MeshBasicMaterial({
    map: loaderOne.load(imagePlaceholder),
    side: THREE.DoubleSide,
  });
  const planeOne = new THREE.Mesh(geometryOne, materialOne);
  planeOne.position.set(-30, 100, 340);
  panorama1.add(planeOne);

  // Sphere two artwork - contains two & three
  const textureTwo = loader.load(
    gifPlaceholder,
    // onLoad callback
    function (reader) {
      console.log(reader.numFrames());
    },
    // onProgress callback
    function (xhr) {
      console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`);
    },
    // onError callback
    function () {
      console.error("An error happened.");
    }
  );
  const materialTwo = new THREE.MeshBasicMaterial({
    map: textureTwo,
    // transparent: true,
    side: THREE.DoubleSide,
  });
  const geometryTwo = new THREE.PlaneGeometry(300, 300, 300);
  const planeTwo = new THREE.Mesh(geometryTwo, materialTwo);
  planeTwo.position.set(-160, 220, 420);
  planeTwo.rotation.y -= 0.3;
  panorama2.add(planeTwo);

  const geometryThree = new THREE.PlaneGeometry(300, 300, 300);
  const loaderThree = new THREE.TextureLoader();
  const materialThree = new THREE.MeshBasicMaterial({
    map: loaderThree.load(imagePlaceholder),
    side: THREE.DoubleSide,
  });
  const planeThree = new THREE.Mesh(geometryThree, materialThree);
  planeThree.position.set(10, 210, -440);
  panorama2.add(planeThree);

  // Sphere three artwork - contains four
  const geometryFour = new THREE.PlaneGeometry(300, 300, 300);
  const loaderFour = new THREE.TextureLoader();
  const materialFour = new THREE.MeshBasicMaterial({
    map: loaderFour.load(imagePlaceholder),
    side: THREE.DoubleSide,
  });
  const planeFour = new THREE.Mesh(geometryFour, materialFour);
  planeFour.position.set(-450, 130, 90);
  planeFour.rotation.y += 1.8;
  panorama3.add(planeFour);

  // Sphere four artwork - contains five & six
  const geometryFive = new THREE.PlaneGeometry(200, 200, 200);
  const loaderFive = new THREE.TextureLoader();
  const materialFive = new THREE.MeshBasicMaterial({
    map: loaderFive.load(imagePlaceholder),
    side: THREE.DoubleSide,
  });
  const planeFive = new THREE.Mesh(geometryFive, materialFive);
  planeFive.position.set(-350, -10, 10);
  planeFive.rotation.y += 1.7;
  panorama4.add(planeFive);

  const textureSix = loader.load(
    gifPlaceholder,
    // onLoad callback
    function (reader) {
      console.log(reader.numFrames());
    },
    // onProgress callback
    function (xhr) {
      console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`);
    },
    // onError callback
    function () {
      console.error("An error happened.");
    }
  );
  const materialSix = new THREE.MeshBasicMaterial({
    map: textureSix,
    // transparent: true,
    side: THREE.DoubleSide,
  });
  const geometrySix = new THREE.PlaneGeometry(250, 250, 250);
  const planeSix = new THREE.Mesh(geometrySix, materialSix);
  planeSix.position.set(350, 80, -60);
  planeSix.rotation.y += 1.7;
  panorama4.add(planeSix);

  // Sphere five artwork - contains seven & eight
  const geometrySeven = new THREE.PlaneGeometry(300, 300, 300);
  const loaderSeven = new THREE.TextureLoader();
  const materialSeven = new THREE.MeshBasicMaterial({
    map: loaderSeven.load(imagePlaceholder),
    side: THREE.DoubleSide,
  });
  const planeSeven = new THREE.Mesh(geometrySeven, materialSeven);
  planeSeven.position.set(-350, 100, 10);
  planeSeven.rotation.y += 1.7;
  panorama5.add(planeSeven);

  const textureEight = loader.load(
    gifPlaceholder,
    // onLoad callback
    function (reader) {
      console.log(reader.numFrames());
    },
    // onProgress callback
    function (xhr) {
      console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`);
    },
    // onError callback
    function () {
      console.error("An error happened.");
    }
  );
  const materialEight = new THREE.MeshBasicMaterial({
    map: textureEight,
    // transparent: true,
    side: THREE.DoubleSide,
  });
  const geometryEight = new THREE.PlaneGeometry(300, 300, 300);
  const planeEight = new THREE.Mesh(geometryEight, materialEight);
  planeEight.position.set(350, 80, -60);
  planeEight.rotation.y += 1.7;
  panorama5.add(planeEight);

   // Sphere six artwork - contains nine
   const geometryNine = new THREE.PlaneGeometry(300, 300, 300);
   const loaderNine = new THREE.TextureLoader();
   const materialNine = new THREE.MeshBasicMaterial({
     map: loaderNine.load(imagePlaceholder),
     side: THREE.DoubleSide,
   });
   const planeNine = new THREE.Mesh(geometryNine, materialNine);
   planeNine.position.set(-350, 160, -220);
   planeNine.rotation.y += 1;
   panorama6.add(planeNine);

   // Sphere seven artwork - contains ten
   const geometryTen = new THREE.PlaneGeometry(250, 250, 250);
   const loaderTen = new THREE.TextureLoader();
   const materialTen = new THREE.MeshBasicMaterial({
     map: loaderTen.load(imagePlaceholder),
     side: THREE.DoubleSide,
   });
   const planeTen = new THREE.Mesh(geometryTen, materialTen);
   planeTen.position.set(-200, 160, -350);
   planeTen.rotation.y += 0.4;
   panorama7.add(planeTen);


  panorama1.addEventListener("progress", onProgress);
  panorama1.addEventListener("load", onLoad);
  panorama1.addEventListener("enter", onEnter);
  panorama1.add(sphereOneArt);
  panorama2.add(sphereTwoArt1, sphereTwoArt2);

  // Viewer
  viewer = new PANOLENS.Viewer({
    controlBar: false,
    initialLookAt: new THREE.Vector3(0, 0, 5000),
  });
  viewer.OrbitControls.enabled = false;
  viewer.add(panorama1, panorama2, panorama3, panorama4, panorama5, panorama6, panorama7, panorama8);

  return (
    <div>
      <div className="wrap">
        <div id="dialog" className="type-wrap">
          <span id="typed" ref={spanEl} />
        </div>
      </div>
      <ReactHowler
        src={audio}
        playing={true}
        loop={true}
      />
    </div>
  );
}
