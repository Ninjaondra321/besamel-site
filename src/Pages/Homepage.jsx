// Import images from 0 to 35

import Accordion from "../Components/Accordion";

import { createSignal } from "solid-js";

import { A } from "@solidjs/router";

function HomePage() {
    document.title = "A new title";

    const [theme, setTheme] = createSignal("default");

    const themes = {
        "default": ``,
        "port": `--background: #1a4df338;--primary-color: #2235df;--primary-color-muted: #2235df2d;--primary-color-hover: #241ab2;--secondary-color: #1af3c4;--secondary-color-muted: #1ae5f338;--primary-color-static: var(--primary-color);--secondary-color-static: var(--secondary-color);--font-color-light: #f1fcfc;--font-color-light-muted: #f1fcfcb3;--font-color-dark: #1d2d3a;--font-color-dark-muted: #1d293ab3;--font-color: var(--font-color-dark);--bg-light: #f1fcfb;--bg-dark: #1d1d3a;--font-multiplier: 1.12;--font-responsivness: 4.4vw;--border-radius-components: 0px;--border-radius-card: 0px;--border-radius-tiles: 0px;--gray-shadow-small: 0 0 5px 0 rgba(0, 0, 0, 0.2);--gray-shadow-card: 0px 3px 5px 0.5px rgba(0, 0, 0, 0.2);--gray-shadow-card-rissen: 0px calc(3px + var(--card-rise)) 5px 0.5px rgba(0, 0, 0, 0.3);--primary-shadow: 0 1px 5px 0 rgba(34, 53, 223, 0.2);--primary-shadow-small: 0 0 5px 0 rgba(34, 53, 223, 0.2);--primary-shadow-card: 0px 3px 5px 0.5px rgba(34, 53, 223, 0.2);--primary-shadow-card-rissen: 0px calc(3px + var(--card-rise)) 5px 0.5px rgba(34, 53, 223, 0.3);--button-padding: 10px 20px;--card-rise: 5px;--box-shadow: 0px 8px 10px 1px rgba(34, 53, 223, 0.4);`
    }

    function changeTheme(theme) {

        // if theme in themes
        if (theme in themes) {
            setTheme(theme);
            // document.documentElement.style.cssText = themes[theme];
        }
    }



    return (<div class="sections">
        <style>
            {`
                :root {
                    ${themes[theme()]}
                }
                
                
                @keyframes circle1 {
                    0% {
                        transform: rotate(0deg) ;
                    }
                    100% {
                        transform: rotate(360deg) ;
                    }
                }

                .circle {
                    filter: blur(57px);

                    height: min(calc(20vw + 20vh), 500px );
                    width: min(calc(20vw + 20vh + 20px), 540px );

                    background: var(--secondary-color);
                    border-radius: 50%;

                    position: absolute;
                    animation: circle1 10s infinite;
                }

                :root {
                    --circle-distance: max(calc(-8vw - 8vh - 5px), -220px ) ;
                }


            `}
        </style>


        <div className="hero-section bg min-h-500px" >

            <div className="make-section-bg"
                style="background-color:var(--secondary-color-muted)">

            </div>
            <div className="make-section-bg" style="width:100%; height:100%">

                <div className="circle"
                    style={
                        `
                        background: var(--secondary-color);
                        top: var(--circle-distance);
                        left: var(--circle-distance);
                            ` }>
                </div>
                <div className="circle"
                    style={
                        `
                        background: var(--primary-color);
                        bottom:  var(--circle-distance);
                        left:  var(--circle-distance);
                            ` }>
                </div>
                <div className="circle"
                    style={
                        `
                        background: var(--primary-color);
                        top:  var(--circle-distance);
                        right:  var(--circle-distance);
                            ` }>
                </div>
                <div className="circle"
                    style={
                        `
                        background: var(--secondary-color);
                        bottom:  var(--circle-distance);
                        right:  var(--circle-distance);
                            ` }>
                </div>
            </div>


            <div className="content center padding-medium">
                <h1 className="responsive display">BEŠAMEL</h1>
                <h4 className="responsive display"
                    // center the text
                    style={{ "text-align": "center" }}
                >Awesome css framework</h4>
                <div className="responsive-rotate center padding-medium">
                    <A href="/examples" className="btn secondary large">Examples</A>
                    <A href="/docs" className="btn primary large">Documentation</A>
                </div>
            </div>
        </div>

        <div className="joiner"
            style={`
                background: white ;
                width: 100%;
                height: 40px;
                border-radius:  100% 100% 0 0;
                margin:0;
                margin-bottom: -40px;
            `}

        ></div>
        <div className="joiner"
            style={`
                background: var(--secondary-color-muted) ;
                width: 100%;
                height: 40px;
                border-radius:  100% 100% 0 0;
            `}
        ></div>

        <div className="change-theme-section min-h-500px">
            <div className="content">
                <div className="row w-12 responsive-rotate">
                    <div className="left pc-w-6 center">
                        <h2 className="responsive display">Extremely <span></span>
                            <u>customisible</u>

                        </h2>
                        <p>
                            BESAMEL is basicly composed of 3 files:  <i> besamel.css</i> for layout, <i>generated.js</i> for generated classes such as .m-w-200px and last but not least <i>styles.css</i> for your design. This approach allows you to create perfect styles very easily. Try some of those out <span className="icon">east</span>
                        </p>

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
        </div>

        {/* <div className="padding-large"></div> */}

        <div className="comparation-section min-h-500px">
            <style>
                {`
                .comparation>div p {
                    margin: 0;
                }
                .comparation>div:not(.row),
                .comparation .row>div {
                    height: 30px;
                    border-radius: var(--border-radius-components);
                    display: flex;
                    justify-content: space-between;
                    padding: 5px 10px;
                    margin: 3px 0;  
                }


                .comparation {
                    padding: 10px;
                }

                
                `}
            </style>
            <div className="content  responsive-rotate space-between">
                <div className="left w-5 m-w-12 ">
                    <h2 class="responsive display">Ultra <u>light</u></h2>
                    <p class="responsive">The main reason for creating BESAMEL was to make a super lightweight and usable at the same tile css framework.</p>
                </div>
                <div className="right w-6 m-w-12 ">
                    <div className="comparation column dark">
                        <div style="background: #6528e0; width: 100%">
                            <p>Bootstrap</p>
                            <p>275 kB</p>
                        </div>
                        <div style="background: #2190f1; width: 93.4%">
                            <p>UI Kit</p>
                            <p>257 kB</p>
                        </div>
                        <div style="background: #00d1b2; width: 87.2%">
                            <p>Bluma</p>
                            <p>240 kB</p>
                        </div>
                        <div style="background: #2c3840; width: 56.3%">
                            <p>Fundation</p>
                            <p>155 kB</p>
                        </div>
                        <div className="row  " >

                            <div style="background: #9d22df; width: 9.4%" >
                                <p style="padding-right:0;">26&nbsp;kB</p>
                            </div>
                            <p class="center light "> <b class="row"> <span className="icon">west</span> Bešamel</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* <div className="padding-large"></div> */}


        <div className="easy-to-use-section min-h-500px">
            <div className="content">
                <h2>EASY TO USE SECTION</h2>
                <h3>WORK IN PROGRESSSS....</h3>
            </div>
        </div>

        <div className="padding-large"></div>

        <div className="features-section">
            <div className="content">
                <h2 className="responsive">Amazing features</h2>
                <h3>Hover</h3>

                <div className="responsive-rotate">
                    <div className="w-7 m-w-12 ">
                        <div className="card  hover max-w-500px min-h-200px pos-sw pos">
                            <div className="column hover-hide">
                                <h4>I'm visible!</h4>
                                <p>Unless you hover over me...</p>
                            </div>

                            <div className="row to-se ">
                                <div className="hover-show pos">
                                    <p >This arrow shows on hover <br /> <br /></p>

                                    <span className="icon to-se">east</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="w-5 m-w-12 center">
                        <div className="tile terciary center min-h-200px w-12">
                            <h5>There will be code</h5>
                            <p>(when i'll add it...)</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div >);
}

export default HomePage;