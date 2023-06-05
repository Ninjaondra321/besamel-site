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
import '../Styles/besamel_03.css';
import '../Styles/component_styles.css';



import logo from './logo.svg';


//Pages
// import HomePage from './Pages/Homepage';
// import NavbarsPage from './Pages/NavbarsPage';
// import NavBar from './Components/NavBar';
// import Abc from './Pages/Abc';
// import Footer from './Components/Footer';
// import CookiesPage from './Pages/CookiesPage';
// import ComponentsPage from './Pages/Components';

const HomePage = lazy(() => import('./Pages/Homepage'));
const NavBar = lazy(() => import('./Components/NavBar'));
const Footer = lazy(() => import('./Components/Footer'));
const CookiesPage = lazy(() => import('./Pages/CookiesPage'));


// Components


// Functions
import Cookies from './Functions/Cookies';
import Page404 from "./Pages/page404";
import Docs from "./Pages/Docs";
import Examples from "./Pages/Examples";
import ThemeCreator from "./Pages/ThemeCreator";
import Redirecting from "./Functions/Redirecting";
import ComponentsPage from "./Pages/Examples/Components";
import Sections from "./Pages/Examples/Sections";

const supprotedLanguages = ["cs", "en"];

function App() {

  const [analyticalCookiesAllowed, setAnalyticalCookiesAllowed] = createSignal(false);

  const [language, setLanguage] = createSignal("cs");



  function setCookies(type, value) {
    let c;
    try {
      c = JSON.parse(localStorage.getItem("COOKIES-NOTIME"));
    } catch (e) {
      console.log(e);

      c = { "analytical": false };
    }
    c[type] = value;
    localStorage.setItem("COOKIES-NOTIME", JSON.stringify(c));
  }

  createEffect(() => {
    // Change language in html
    document.documentElement.lang = language();
  })


  return (
    <>

      <GenerateStyle />
      <Router  >
        <Redirecting />
        <NavBar language={language} setLanguage={setLanguage} languages={supprotedLanguages} />
        <div className="main ">
          <Routes >
            {/*  */}
            <Route path="/" element={<HomePage language={language} />} />
            <Route path="/docs" element={<Docs language={language} />} />
            <Route path="/docs/*" element={<Docs language={language} />} />
            <Route path="/examples" element={<Examples language={language} />} />
            <Route path="/theme-creator" element={<ThemeCreator language={language} />} />

            <Route path="/examples/components" element={<ComponentsPage language={language} />} />
            <Route path="/examples/sections" element={<Sections language={language} />} />

            <Route path="/cookies" element={<CookiesPage language={language} />} />

            <Route path="*" element={<Page404 language={language} />} />
          </Routes>

        </div>
        <Footer language={language} />
        <Cookies cookiesAllowed={analyticalCookiesAllowed} />
      </Router>


    </>
  );
}

export default App;
