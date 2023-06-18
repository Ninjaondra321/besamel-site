// SolidJS
import { createSignal, onMount, Show, lazy, createEffect } from "solid-js";
import { Router, Routes, Route } from "@solidjs/router"

// Styles
// import '../Styles/besamel_02.css';
// import '../Styles/besamel_03.css';
// import '../Styles/components.css';
// import '../Styles/components_01.css';
import GenerateStyle from './Functions/GenerateStyle';

// import '../Styles/style.css';
import '../Styles/besamel_04.css';
import '../Styles/component_styles_02.css';



//Pages
// import HomePage from './Pages/Homepage';
// import NavbarsPage from './Pages/NavbarsPage';
// import NavBar from './Components/NavBar';
// import Abc from './Pages/Abc';
// import Footer from './Components/Footer';
// import CookiesPage from './Pages/CookiesPage';
// import ComponentsPage from './Pages/Components';

const HomePage = lazy(() => import('./Pages/Homepage'));

const CookiesPage = lazy(() => import('./Pages/CookiesPage'));



// Components

import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";


// Functions
import Cookies from './Functions/Cookies';
import Page404 from "./Pages/page404";
import Docs from "./Pages/Docs";
import Examples from "./Pages/Examples";
import ThemeCreator from "./Pages/ThemeCreator";
import Redirecting from "./Functions/Redirecting";
import ComponentsPage from "./Pages/Examples/Components";
import Sections from "./Pages/Examples/Sections";

const cookiesLocation = "COOKIES-BESAMEL-DOCS";


function App() {

  const [analyticalCookiesAllowed, setAnalyticalCookiesAllowed] = createSignal(null);
  function setCookies(type, value) {
    let c = JSON.parse(localStorage.getItem(cookiesLocation));
    c[type] = value;
    if (type === "analytical") {
      setAnalyticalCookiesAllowed(value);
    } else {
      console.error("Unknown cookie type");
    }
    localStorage.setItem(cookiesLocation, JSON.stringify(c));
  }


  onMount(() => {
    try {
      let c = JSON.parse(localStorage.getItem(cookiesLocation));
      setAnalyticalCookiesAllowed(c["analytical"]);
    } catch (e) {
      console.log(e);
      localStorage.setItem(cookiesLocation, JSON.stringify({ "analytical": undefined }));
      setAnalyticalCookiesAllowed(undefined);
    }

  })





  return (
    <>

      <GenerateStyle />
      <Router  >
        <Redirecting />
        <NavBar />
        <div className="main">
          <Routes >
            <Route path="/" element={<HomePage />} />
            <Route path="/docs/*" element={<Docs />} />
            <Route path="/examples" element={<Examples />} />
            <Route path="/theme-creator" element={<ThemeCreator />} />

            <Route path="/examples/components" element={<ComponentsPage />} />
            <Route path="/examples/sections" element={<Sections />} />

            <Route path="/cookies" element={<CookiesPage setCookies={setCookies} analyticalCookiesAllowed={analyticalCookiesAllowed} />} />

            <Route path="*" element={<Page404 />} />
          </Routes>

        </div>
        <Footer />

        <Cookies cookiesAllowed={analyticalCookiesAllowed} setCookies={setCookies} />
      </Router>


    </>
  );
}

export default App;
