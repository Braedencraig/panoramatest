import React, { useEffect, useState, useRef } from "react";
import * as PANOLENS from "panolens";
import * as THREE from "three";
import Typed from "typed.js";
import one from "../assets/spheres/one.jpg";
import two from "../assets/spheres/two.jpg";
import three from "../assets/spheres/three.jpg";
import four from "../assets/spheres/four.jpg";
import five from "../assets/spheres/five.jpg";
import six from "../assets/spheres/six.jpg";

export default function Guided() {
  const [progressEl, setProgessEl] = useState(null);
  const spanEl = useRef(null);

  var panorama1,
    panorama2,
    panorama3,
    panorama4,
    panorama5,
    panorama6,
    viewer,
    typed;

  var meterInfospot,
    valveInfospot,
    seatInfospot,
    topboxInfospot,
    endingInfospot;

  useEffect(() => {
    setProgessEl(document.querySelector("#progress"));
  }, [setProgessEl]);

  var tweeningDelay = 300,
    typeStartDelay = 1000,
    typeSpeed = 50;

  var paragraphs = {
    welcome: [
      "Here is some text, welcome!",
      "Buckle up! <strong>Yahoooooo</strong>",
      "Here we go",
    ],
    meter: [
      "One of the common meter that you can see on a train",
      "it is not specially eye-catching but it just can get your attention",
      "it indicates how fast the train is currently going",
      "Let us continue",
    ],
    valve: [
      "A Valve",
      "solid looking and quite decent color",
      "here shows the evidence that time would leaves marks on everything",
      "same thing applies to our face...",
    ],
    seat: [
      "Alright. Here we have a seat. The green pad looks quite comfortable",
      "when you are on a train",
      "OK. Move on to next one",
    ],
    box: [
      "There is a box over there",
      "probably some fuse or electronic devices",
      "Hmmmm............",
      "Anyway",
      "Let's keep moving",
    ],
    ending: [
      "This is our last stop",
      "Please continue your journey with this wonder train...",
    ],
  };

  // Patch for typed.js of cutting back-to-back words
  for (var section in paragraphs) {
    if (paragraphs.hasOwnProperty(section)) {
      paragraphs[section].unshift("");
      paragraphs[section].push("");
    }
  }

  function delayExecute(func, delay) {
    setTimeout(func, delay);
  }

  function onLoad() {
    const options = {
      strings: paragraphs.welcome,
      typeSpeed: 50,
      backSpeed: 50,
      showCursor: false,
    };
    if (spanEl.current) {
      typed = new Typed(spanEl.current, options);
    }
    setTimeout(() => {
      onWelcomeComplete();
    }, 8000);
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
    delayExecute(meterInfospot.focus.bind(meterInfospot), tweeningDelay);
    setTimeout(() => {
      onMeterTourComplete();
    }, 5000);
  }

  function onMeterTourComplete() {
    delayExecute(valveInfospot.focus.bind(valveInfospot), tweeningDelay);
    setTimeout(() => {
      onValveTourComplete();
    }, 5000);
  }

  function onValveTourComplete() {
    delayExecute(seatInfospot.focus.bind(seatInfospot), tweeningDelay);
    setTimeout(() => {
      onSeatTourComplete();
    }, 4000);
  }

  function onSeatTourComplete() {
    delayExecute(topboxInfospot.focus.bind(topboxInfospot), tweeningDelay);
    setTimeout(() => {
      onTopboxTourComplete();
    }, 4000);
  }

  function onTopboxTourComplete() {
    delayExecute(endingInfospot.focus.bind(endingInfospot), tweeningDelay);
    setTimeout(() => {
      // viewer.OrbitControls.enabled = true;
      viewer.setPanorama(panorama2);
    }, 5000);
  }

  // function type(stringArray, onComplete, startDelay) {
  //   onComplete = onComplete || function () {};
  //   startDelay = startDelay >= 0 ? startDelay : typeStartDelay;

  //   const options = {
  //     strings: stringArray,
  //     typeSpeed: 50,
  //     backSpeed: 50,
  //     startDelay: startDelay,
  //     onComplete: onComplete,
  //     showCursor: false,
  //   };

  //   if (spanEl.current) {
  //     typed = new Typed(spanEl.current, options);
  //   }
  // }

  // Infospots
  meterInfospot = new PANOLENS.Infospot();
  valveInfospot = new PANOLENS.Infospot();
  seatInfospot = new PANOLENS.Infospot();
  topboxInfospot = new PANOLENS.Infospot();
  endingInfospot = new PANOLENS.Infospot(10e-7); // Make it not visible

  meterInfospot.position.set(4610.04, 1280.07, 1431.29);
  valveInfospot.position.set(4637.61, -798.12, -1671.24);
  seatInfospot.position.set(1934.61, -2611.69, -3792.91);
  topboxInfospot.position.set(-3348.82, 3705.92, 45.54);
  endingInfospot.position.set(-3461.4, -3592.37, -241.38);

  meterInfospot.addHoverText("Speedometer", 50);
  valveInfospot.addHoverText("Valve", 50);
  seatInfospot.addHoverText("Seat", 50);
  topboxInfospot.addHoverText("Box", 50);

  // Panorama
  panorama1 = new PANOLENS.ImagePanorama(one);
  panorama2 = new PANOLENS.ImagePanorama(two);
  panorama3 = new PANOLENS.ImagePanorama(three);
  panorama4 = new PANOLENS.ImagePanorama(four);
  panorama5 = new PANOLENS.ImagePanorama(five);
  panorama6 = new PANOLENS.ImagePanorama(six);
  // panorama1.link(panorama2, new THREE.Vector3(-807.5, 604.88, -5000.0));
  // panorama2.link(panorama3, new THREE.Vector3(-807.5, 604.88, -5000.0));
  // panorama3.link(panorama4, new THREE.Vector3(-807.5, 604.88, -5000.0));
  // panorama4.link(panorama5, new THREE.Vector3(-807.5, 604.88, -5000.0));
  // panorama5.link(panorama6, new THREE.Vector3(-807.5, 604.88, -5000.0));
  // panorama6.link(panorama1, new THREE.Vector3(-807.5, 604.88, -5000.0));
  panorama1.addEventListener("progress", onProgress);
  panorama1.addEventListener("load", onLoad);
  panorama1.addEventListener("enter", onEnter);
  panorama1.add(
    meterInfospot,
    valveInfospot,
    seatInfospot,
    topboxInfospot,
    endingInfospot
  );

  // Viewer
  viewer = new PANOLENS.Viewer({
    controlBar: false,
    initialLookAt: new THREE.Vector3(0, 0, 5000),
  });
  viewer.OrbitControls.enabled = false;
  viewer.add(panorama1, panorama2, panorama3, panorama4, panorama5, panorama6);

  return (
    <div>
      <div className="wrap">
        <div id="dialog" className="type-wrap">
          <span id="typed" style={{ whiteSpace: "pre" }} ref={spanEl} />
        </div>
      </div>
    </div>
  );
}
