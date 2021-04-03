import React from "react";
import * as PANOLENS from "panolens";
import * as THREE from "three";
import one from "../assets/spheres/one.jpg";
import two from "../assets/spheres/two.jpg";
import three from "../assets/spheres/three.jpg";
import four from "../assets/spheres/four.jpg";
import five from "../assets/spheres/five.jpg";
import six from "../assets/spheres/six.jpg";

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
  viewer.add(panorama1, panorama2, panorama3, panorama4, panorama5, panorama6);

  return <></>;
}
