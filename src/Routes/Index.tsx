import React from "react";
import PercentageCircles from "../Circle/PercentageCircles";
import Button from "../Button/Button";

export default function Index() {
  return (
    <>
      <section className="toplook">
        <h1>Odbavujte zákazníky jedním klikem v reálném čase.</h1>
        <p>
          LiveSupp je multifunkční platforma pro vzdálený prodej a zákaznickou
          péči.
        </p>
        <div></div>
        <Button type="primary" href="XXX">
          Ukázka a pilot zdarma
        </Button>
        <img src="/images/toplook-image.png" alt="ukazka UI na telefonu a pc" />
      </section>
      <section className="circles">
        <ul className="circlesUL">
          <li>
            <PercentageCircles percentage={200} color="#40b1ba" /> Až 2x více
            konverzí z webu a volání.
          </li>
          <li>
            <PercentageCircles percentage={300} delay={200} color="#40b1ba" />{" "}
            Až 3x efektivnější než text chaty a chatboti.
          </li>
          <li>
            <PercentageCircles percentage={140} delay={400} color="#40b1ba" />{" "}
            Až 40% zvýšení hodnoty objednávek.
          </li>
          <li>
            <PercentageCircles percentage={160} delay={600} color="#40b1ba" />{" "}
            Až 60% zefektivnění práce zaměstnanců.
          </li>
          <li>
            <PercentageCircles percentage={190} delay={800} color="#40b1ba" />{" "}
            Až 90% urychlení obchodních procesů.
          </li>
        </ul>
      </section>
      <section className="communication">
        <ul className="communicationUL">
          <li>
            Hlasové a video hovory zdarma přes internet, textový chat, nahrávky.
          </li>
          <li>
            Jedním klikem bez jakékoli instalace, registrace nebo přihlašování.
          </li>
          <li>
            Nejen sdílení obrazu (screen sharing), ale společné ovládání
            webových stránek a dokumentů (cobrowsing).
          </li>
        </ul>
        <div className="btn_primary"></div>
      </section>
      <section className="carousel"></section>
      <section className="effectvity">
        <img
          src="/images/effectivity-image.png"
          className="effectivity_img"
          alt="obrazek efektivita"
        />
      </section>
      <section className="Carousel">
        <div id="slide_1">
          Hiaggggggggggggg, archivace nahrávek a hodnocení po spojení.
        </div>
        <div id="slide_2">
          Historie všech akcí, archivace nahrávek a hodnocení po spojení.
        </div>
        <div id="slide_3">Analýza výsledků a výkonnosti operátorů.</div>
      </section>
      <div className="Carousel_btn">
        <a href="#slide_1"> </a>
        <a href="#slide_2"> </a>
        <a href="#slide_3"> </a>
      </div>
      <section className="happiness">
        <ul className="happinessUL">
          <li>
            Hlasové a video hovory zdarma přes internet, textový chat, nahrávky.
          </li>
          <li>
            Jedním klikem bez jakékoli instalace, registrace nebo přihlašování.
          </li>
          <li>
            Nejen sdílení obrazu (screen sharing), ale společné ovládání
            webových stránek a dokumentů (cobrowsing).
          </li>
        </ul>
        <div className="btn_primary"></div>
      </section>
      <section className="effectivity"></section>
      <section className="programming"></section>

      <section className="references">
        <div className="clients_items">
          <a
            href="https://www.globalpayments.cz/cs-cz"
            target="_blank"
            rel="noreferrer nofollow"
          >
            <img src="/logos/bm.png" alt="Bondster" title="Bondster" />
          </a>
          <a
            href="https://www.globalpayments.cz/cs-cz"
            target="_blank"
            rel="noreferrer nofollow"
          >
            <img src="/logos/c.png" alt="Bondster" title="Bondster" />
          </a>
          <a
            href="https://www.globalpayments.cz/cs-cz"
            target="_blank"
            rel="noreferrer nofollow"
          >
            <img src="/logos/me.png" alt="Bondster" title="Bondster" />
          </a>
          <a
            href="https://www.globalpayments.cz/cs-cz"
            target="_blank"
            rel="noreferrer nofollow"
          >
            <img src="/logos/nt.png" alt="Bondster" title="Bondster" />
          </a>
          <a
            href="https://www.globalpayments.cz/cs-cz"
            target="_blank"
            rel="noreferrer nofollow"
          >
            <img src="/logos/zfp.png" alt="Bondster" title="Bondster" />
          </a>
          <a
            href="https://www.globalpayments.cz/cs-cz"
            target="_blank"
            rel="noreferrer nofollow"
          >
            <img src="/logos/ca.png" alt="Bondster" title="Bondster" />
          </a>
          <a
            href="https://www.globalpayments.cz/cs-cz"
            target="_blank"
            rel="noreferrer nofollow"
          >
            <img src="/logos/ced.png" alt="Bondster" title="Bondster" />
          </a>
          <a
            href="https://www.globalpayments.cz/cs-cz"
            target="_blank"
            rel="noreferrer nofollow"
          >
            <img src="/logos/cpz.png" alt="Bondster" title="Bondster" />
          </a>
          <a
            href="https://www.globalpayments.cz/cs-cz"
            target="_blank"
            rel="noreferrer nofollow"
          >
            <img src="/logos/de.png" alt="Bondster" title="Bondster" />
          </a>
        </div>
      </section>
      <section className="Carousel Carousel-ref">
        <div id="ref_1">
          Sledování výsledků a jejich vyhodnocování pro rozvoj webu a obchodních
          procesů.
        </div>
        <div id="ref_2">
          Historie všech akcí, archivace nahrávek a hodnocení po spojení.
        </div>
      </section>
      <div className="Carousel_btn">
        <a href="#ref_1"> </a>
        <a href="#ref_2"> </a>
      </div>
    </>
  );
}
