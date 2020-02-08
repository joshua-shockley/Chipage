import React from "react";
import { Image } from "semantic-ui-react";
import logo from "../images/unsplashLogo.png";

export default function Footer() {
  return (
    <div>
      <section className="footerSec partA">things</section>
      <section className="footerSec partB">stuff</section>
      <section className="footerSec partC">thingy</section>
      <section className="footerSec partD">stuff</section>
      <section className="footerSec partE">
        <div className="little-box">
          <Image className="u-logo" src={logo} alt="unsplash logo" wrapped />
          <p className="logo-text">
            some images were used from unsplash under the following names:
          </p>
        </div>
        <a
          href="https://unsplash.com/photos/wn-KYaHwcis"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jesus Kiteque
        </a>
        <a
          href="https://unsplash.com/photos/Q8HfuO9udts"
          target="_blank"
          rel="noopener noreferrer"
        >
          Robin Worrall
        </a>
        <a
          href="https://unsplash.com/photos/Z2ImfOCafFk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Agence Olloweb
        </a>
        <a
          href="https://unsplash.com/photos/OyCl7Y4y0Bk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Element5 Digital
        </a>
      </section>
      <section className="footerSec partF">
        this is the footer where there will be small print info or additional
        links for references...
      </section>
    </div>
  );
}
