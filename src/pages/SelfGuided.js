import React from "react";
import * as PANOLENS from "panolens";
import * as THREE from "three";
import GifLoader from "three-gif-loader";
import ReactHowler from "react-howler";
import one from "../assets/spheres/one.jpg";
import two from "../assets/spheres/two.jpg";
import three from "../assets/spheres/three.jpg";
import four from "../assets/spheres/four.jpg";
import five from "../assets/spheres/five.jpg";
import six from "../assets/spheres/six.jpg";
import testGif from "../assets/programming.gif";

export default function SelfGuided() {
  let panorama1, panorama2, panorama3, panorama4, panorama5, panorama6, viewer;
  panorama1 = new PANOLENS.ImagePanorama(one);
  panorama2 = new PANOLENS.ImagePanorama(two);
  panorama3 = new PANOLENS.ImagePanorama(three);
  panorama4 = new PANOLENS.ImagePanorama(four);
  panorama5 = new PANOLENS.ImagePanorama(five);
  panorama6 = new PANOLENS.ImagePanorama(six);
  panorama1.link(panorama2, new THREE.Vector3(-807.5, 604.88, -5000.0));
  panorama2.link(panorama3, new THREE.Vector3(-807.5, 604.88, -5000.0));
  panorama3.link(panorama4, new THREE.Vector3(-807.5, 604.88, -5000.0));
  panorama4.link(panorama5, new THREE.Vector3(-807.5, 604.88, -5000.0));
  panorama5.link(panorama6, new THREE.Vector3(-807.5, 604.88, -5000.0));
  panorama6.link(panorama1, new THREE.Vector3(-807.5, 604.88, -5000.0));

  viewer = new PANOLENS.Viewer({ autoHideInfospot: false });

  // const boxWidth = 100;
  // const boxHeight = 100;
  // const boxDepth = 1;
  // const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
  // const geometry = new THREE.PlaneGeometry(5, 20, 32);

  // instantiate a loader
  const loader = new GifLoader();

  // // load a image resource
  const texture = loader.load(
    // resource URL
    "https://memorypearl.s3.us-east-2.amazonaws.com/programming.gif",
    // onLoad callback
    function (reader) {
      // You probably don't need to set onLoad, as it is handled for you. However,
      // if you want to manipulate the reader, you can do so here:
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

  const material = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
    side: THREE.DoubleSide,
  });

  // const loader = new THREE.TextureLoader();
  // const material = new THREE.MeshBasicMaterial({
  //   map: loader.load(
  //     "https://threejsfundamentals.org/threejs/resources/images/wall.jpg"
  //   ),
  // });

  // const cube = new THREE.Mesh(geometry, material);
  // cube.position.set(-300, 50, 450);
  // panorama1.add(cube);

  const geometry = new THREE.PlaneGeometry(5, 10, 32);
  // const material = new THREE.MeshBasicMaterial({
  //   color: 0xffff00,
  //   side: THREE.DoubleSide,
  // });
  const plane = new THREE.Mesh(geometry, material);
  plane.position.set(10, 10, 10);
  panorama1.add(plane);

  viewer.add(panorama1, panorama2, panorama3, panorama4, panorama5, panorama6);

  return (
    <>
      <ReactHowler
        src="https://memorypearl.s3.us-east-2.amazonaws.com/269570__vonora__cuckoo-the-nightingale-duet.mp3"
        playing={true}
        loop={true}
      />
    </>
  );
}
