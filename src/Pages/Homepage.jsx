// Import images from 0 to 35

import Accordion from "../Components/Accordion";

import { createSignal } from "solid-js";

import { A } from "@solidjs/router";

function HomePage() {
    document.title = "A new title";

    const [theme, setTheme] = createSignal("default");

    const themes = {
        "default": `--background: #f3ef1a38;--primary-color: #9d22df;--primary-color-muted: #9d22df2d;--primary-color-hover: #7a1ab2;--secondary-color: #f3ef1a;--secondary-color-muted: #f3ef1a38;--primary-color-static: var(--primary-color);--secondary-color-static: var(--secondary-color);--font-color-light: #f7fcf1;--font-color-light-muted: #f7fcf1b3;--font-color-dark: #1e1d3a;--font-color-dark-muted: #1e1d3ab3;--font-color: var(--font-color-dark);--bg-light: #f7fcf1;--bg-dark: #1e1d3a;--font-multiplier: 1.04;--font-responsivness: 5vw;--border-radius-components: 5px;--border-radius-card: 20px;--border-radius-tiles: 50px;--gray-shadow-small: 0 0 5px 0 rgba(0, 0, 0, 0.2);--gray-shadow-card: 0px 3px 5px 0.5px rgba(0, 0, 0, 0.2);--gray-shadow-card-rissen: 0px calc(3px + var(--card-rise)) 5px 0.5px rgba(0, 0, 0, 0.3);--primary-shadow: 0 1px 5px 0 rgba(157, 34, 223, 0.2);--primary-shadow-small: 0 0 5px 0 rgba(157, 34, 223, 0.2);--primary-shadow-card: 0px 3px 5px 0.5px rgba(157, 34, 223, 0.2);--primary-shadow-card-rissen: 0px calc(3px + var(--card-rise)) 5px 0.5px rgba(157, 34, 223, 0.3);--button-padding: 10px 20px;--card-rise: 5px;--box-shadow: 0px 8px 10px 1px rgba(157, 34, 223, 0.4);`,
        "port": `--background: #1a4df338;--primary-color: #2235df;--primary-color-muted: #2235df2d;--primary-color-hover: #241ab2;--secondary-color: #1af3c4;--secondary-color-muted: #1ae5f338;--primary-color-static: var(--primary-color);--secondary-color-static: var(--secondary-color);--font-color-light: #f1fcfc;--font-color-light-muted: #f1fcfcb3;--font-color-dark: #1d2d3a;--font-color-dark-muted: #1d293ab3;--font-color: var(--font-color-dark);--bg-light: #f1fcfb;--bg-dark: #1d1d3a;--font-multiplier: 1.12;--font-responsivness: 4.4vw;--border-radius-components: 0px;--border-radius-card: 0px;--border-radius-tiles: 0px;--gray-shadow-small: 0 0 5px 0 rgba(0, 0, 0, 0.2);--gray-shadow-card: 0px 3px 5px 0.5px rgba(0, 0, 0, 0.2);--gray-shadow-card-rissen: 0px calc(3px + var(--card-rise)) 5px 0.5px rgba(0, 0, 0, 0.3);--primary-shadow: 0 1px 5px 0 rgba(34, 53, 223, 0.2);--primary-shadow-small: 0 0 5px 0 rgba(34, 53, 223, 0.2);--primary-shadow-card: 0px 3px 5px 0.5px rgba(34, 53, 223, 0.2);--primary-shadow-card-rissen: 0px calc(3px + var(--card-rise)) 5px 0.5px rgba(34, 53, 223, 0.3);--button-padding: 10px 20px;--card-rise: 5px;--box-shadow: 0px 8px 10px 1px rgba(34, 53, 223, 0.4);`
    }

    function changeTheme(theme) {

        // if theme in themes
        if (theme in themes) {
            setTheme(theme);
            document.documentElement.style.cssText = themes[theme];
        }
    }


    return (<div class="sections">


        <div className="hero-section padding-large" style={{ background: "var(--secondary-color)" }}>
            <div className="content center padding-medium">
                <h1 className="responsive display">BEŠAMEL</h1>
                <h4 className="responsive display"
                    // center the text
                    style={{ "text-align": "center" }}
                >Skvělý css framework</h4>
                <div className="responsive-rotate center padding-medium">
                    <A href="/examples" className="btn secondary large">Ukázky</A>
                    <A href="/docs" className="btn primary large">Dokumentace</A>
                </div>
            </div>
        </div>

        <div className="change-theme-section padding">
            <div className="row w-12 responsive-rotate">
                <div className="left pc-w-6 center">
                    <h4 className="responsive display">Neskutečně upravitelné!</h4>
                </div>
                <div className="right pc-w-6 center ">
                    <div className="tabs wrap center-all">
                        <button className={" w-5 " + (theme() == "default" ? "primary" : "secondary")} onclick={() => changeTheme("default")}><h3 class="padding">Default</h3></button>
                        <button className={" w-5 " + (theme() == "port" ? "primary" : "secondary")} onclick={() => changeTheme("port")}><h3 class="padding">Port</h3></button>
                        <button className=" w-5 secondary"><h3 class="padding">Default</h3></button>
                        <button className=" w-5 secondary"><h3 class="padding">Default</h3></button>
                    </div>
                </div>
            </div>
        </div>


    </div>);
}

export default HomePage;