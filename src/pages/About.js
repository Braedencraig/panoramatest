import { useState } from "react";
import { SocialIcon } from "react-social-icons";
import image from "../assets/mrbean.webp";

export default function About() {
  const [value, setValue] = useState("");
  const [success, setSuccess] = useState(false);
  const [msg, setMsg] = useState("");

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwaxszh9RJCfVBEihLF8TaoTfOJiQXf7MHSWRS-Vb6dC0TkOiIw2qhI6VhEqs1OTemx/exec";
  const form = document.forms["google-sheet"];

  return (
    <div className="fullpage">
      <div className="about-title">
        <h2>The Advantages Of Tender Loving Care</h2>
      </div>
      <div className="about-blurb">
        <p>
          Examining aspects of reciprocal care, Keeling seeks to understand how people form connections with each other and with nature, and how they capture and cherish memories and moments in time. In thinking through these concepts, the artist’s practice has shifted to include not only found images but also plants and flowers that she has grown herself or foraged from neighbours’ garden clippings. Hosted online within a virtual space evocative of a naturalistic outdoor landscape, The Advantages of Tender Loving Care features the first artworks in Keeling’s new series of moving images and collages that merge sourced imagery with scanned floral elements.
        </p>
      </div>
      <div className="divider"></div>
      <div className="about-artist">
        <div className="flex-image">
          <img src={image} alt="The artist, Laura Kay Keeling" />
          <div className="socials">
            <SocialIcon
              fgColor="black"
              bgColor="white"
              url="https://www.instagram.com/laurakaykeeling"
            />
            <SocialIcon
              fgColor="black"
              bgColor="white"
              url="https://twitter.com/laurakaykeeling"
            />
          </div>
        </div>
        <div className="about-blurb-flex about-blurb">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            minus provident, repellat similique suscipit nihil voluptate animi,
            dolores non molestias maxime molestiae amet excepturi hic distinctio
            quos sint, doloremque magni?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            minus provident, repellat similique suscipit nihil voluptate animi,
            dolores non molestias maxime molestiae amet excepturi hic distinctio
            quos sint, doloremque magni? minus provident, repellat similique
            suscipit nihil voluptate animi, dolores non molestias maxime
            molestiae amet excepturi hic distinctio quos sint, doloremque magni?
          </p>
        </div>
      </div>
      <div className="mailing-list">
        <h3>Sign Up For Mailing List</h3>
        <p>{msg}</p>
        {!success && (
          <form method="post" name="google-sheet">
            <div className="form-group">
              <input
                type="text"
                name="Email"
                placeholder="Your Email "
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
            <div className="submit-btn">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                  const validEmail = value.match(emailFormat);
                  if (validEmail === null) {
                    setMsg("Please enter a valid email address");
                  }
                  if (validEmail) {
                    fetch(scriptURL, {
                      method: "POST",
                      body: new FormData(form),
                    })
                      .then((response) => {
                        setMsg("Thanks for subscribing!");
                        setSuccess(true);
                      })
                      .catch((error) => {
                        setMsg("Please enter a valid email address");
                      });
                  } else {
                    setMsg("Please enter a valid email address");
                  }
                }}
                type="submit"
                name="submit"
                value="Submit"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
