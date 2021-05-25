import "./App.css";
import "./carousel.css";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./Header/Header";
import Index from "./Routes/Index";
import React, { useCallback, useState } from "react";
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <Router>
      <div className="app">
        <Header
          isMenuOpen={isMenuOpen}
          onMenuToggle={() => setIsMenuOpen((previousValue) => !previousValue)}
        />

        <main onClick={closeMenu}>
          <Route path="/" exact>
            <Index />
          </Route>
          <Route path="/news">
            <br />
            <br />
            <br />
            <br />
            <br />
            news
          </Route>
        </main>
        <section className="footerSection">
          <footer>
            <div>
              <p>
                © 2021 ATOM RTC s.r.o. <br />
                +420 731 505 625 <br />
                info@livesupp.com
              </p>
            </div>
          </footer>
        </section>
      </div>
    </Router>
  );
}
