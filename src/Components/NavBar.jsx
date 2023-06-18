import { createSignal, createEffect } from "solid-js";
import { A, useNavigate } from "@solidjs/router";

import Icon from "../assets/besamel-siluette.png"

function NavBar() {


    const [showBanner, setShowBanner] = createSignal(true);
    const [drawerShown, setDrawerShown] = createSignal(false);

    function updateHeight() {
        document.documentElement.style.setProperty('--navbar-height', `${document.querySelector("nav").clientHeight - 6}px`);
    }


    createEffect(() => {
        updateHeight(showBanner());
    });

    const navigate = useNavigate();

    function myRedirect(url) {
        // CLose the drawer
        setDrawerShown(false);

        // Redirect
        navigate(url);


    }

    return (<>
        <nav class='always-on-top '>
            {showBanner() &&
                <div className="banner">
                    <div className="left">
                    </div>
                    <div className="center">
                        <p>

                            Tahle stránka je zatím v development verzi - nemusí fungovat správně
                        </p>
                    </div>
                    <div className="right row">
                        <button className="icon-btn icon small " onClick={() => setShowBanner(false)} >
                            close
                        </button>
                    </div>
                </div>
            }

            <div className="navbar ">
                <div className="left " style={{ padding: 0, height: "100%" }}>
                    <A href="/#" activeClass="" end={true} style={{ padding: 0, height: "100%" }}>

                        <header class="center row" style={{ padding: 0, height: "100%", "font-size": "1.4rem" }}>
                            {/* <span className="icon" style={{ color: "var(--secondary-color)" }}>
                                bug_report
                            </span> */}
                            <img src={Icon} alt="" style="transform: scale(0.85);" />
                            BEŠAMEL
                        </header>

                    </A>
                </div>

                <div className="center"></div>

                <div className="right">
                    <div className="m-hidden">

                        <A href={"#"} end={true}>Home</A>
                        <A href={"/docs"} > Docs </A>
                        <A href={"/examples"} >Examples</A>
                        <A href={"/theme-creator"}>Theme creator</A>
                    </div>
                    <div className="pc-hidden">
                        <button className="icon-btn large " id="menu-opener" style="color:var(--secondary-color)" onclick={() => setDrawerShown(!drawerShown())}>
                            menu
                        </button>
                    </div>
                </div>

            </div >
            <div className={"nav-drawer fullscreen center pos " + (drawerShown() ? " opened" : " closed")}>
                <div className="drawer-content center " >

                    <ul class="responsive">
                        <li>
                            <A href={"/"} onclick={() => myRedirect("/")} end={true}>Home</A>
                        </li>
                        <li>
                            <A href={"/docs"} onclick={() => myRedirect("/docs")} > Docs </A>
                        </li>
                        <li>
                            <A href={"/examples"} >Examples</A>
                        </li>
                        <li>
                            <A href={"/theme-creator"}>Theme creator</A>
                        </li>
                    </ul>

                </div>

                <div className="to-s padding-large" style="height: fit-content !important;">
                    <A href="https://github.com/Ninjaondra321/Besamel" class="">Github</A>
                </div>
            </div>


        </nav >

    </>);
}

export default NavBar;