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
import insta from "../assets/insta01.jpg";
import imageTwo from "../assets/Laura Kay Keeling She Speaks In Secrets.jpg";

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

  const loader = new GifLoader();

  const texture = loader.load(
    // resource URL
    "https://memorypearl.s3.us-east-2.amazonaws.com/Pixaloop_02_04_2021_16_56_33_7350000.gif",
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

  const material = new THREE.MeshBasicMaterial({
    map: texture,
    // transparent: true,
    side: THREE.DoubleSide,
  });

  const geometry = new THREE.PlaneGeometry(300, 300, 300);
  const plane = new THREE.Mesh(geometry, material);
  plane.position.set(230, -5, 190);
  plane.rotation.y += 1.2;
  panorama1.add(plane);

  const boxWidth = 100;
  const boxHeight = 100;
  const boxDepth = 100;
  const geometry2 = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
  const loader2 = new THREE.TextureLoader();
  const material2 = new THREE.MeshBasicMaterial({
    map: loader2.load(insta),
  });
  const cube = new THREE.Mesh(geometry2, material2);
  cube.position.set(-160, 10, 10);
  panorama1.add(cube);

  const geometry3 = new THREE.BoxGeometry(boxWidth, 150, boxDepth);
  const loader3 = new THREE.TextureLoader();
  const material3 = new THREE.MeshBasicMaterial({
    map: loader3.load(imageTwo),
  });

  const cube2 = new THREE.Mesh(geometry3, material3);
  cube2.position.set(150, 10, -110);
  cube2.rotation.y += 0.8;
  panorama1.add(cube2);

  var light = new THREE.DirectionalLight(0xffffff);
  light.position.set(1, 1, 1).normalize();
  panorama1.add(light);

  var loaderFont = new THREE.FontLoader();
  loaderFont.load(
    "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
    function (font) {
      var textGeometry = new THREE.TextGeometry("text", {
        font: font,
        size: 10,
        height: 10,
        curveSegments: 4,
        bevelThickness: 1,
        bevelSize: 1,
        bevelEnabled: true,
      });

      var textMaterial = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        flatShading: true,
      });

      var meshFont = new THREE.Mesh(textGeometry, textMaterial);
      meshFont.position.set(-120, 5, -20);
      meshFont.rotation.y += 1.5;
      panorama1.add(meshFont);
    }
  );

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
