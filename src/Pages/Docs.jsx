import { useLocation } from "@solidjs/router";
import { createEffect, createResource, onMount } from "solid-js";

import updateMeta from "../Functions/MetaManager"

import { createSignal } from "solid-js";

import { A } from "@solidjs/router";
import CodeSample from "../Components/CodeSample";

const fetchSidebar = async () => {
    console.log("fetching sidebar")
    const response = await fetch(`https://raw.githubusercontent.com/Ninjaondra321/besamel-docs/main/sidebar.json`);
    const data = await response.text();
    return JSON.parse(data);
}

function getPageUrl() {
    const location = useLocation();
    console.log(location)

    let urlIdk = location.pathname
    urlIdk = urlIdk.replace("/en/", "").replace("/cs/", "").replace("docs/", "")
    console.log(urlIdk)
    let output = `${urlIdk}.json`
    console.log(output)

    return output;
}


const fetchPage = async () => {
    const location = useLocation();

    let urlIdk = location.pathname
    urlIdk = urlIdk.replace("docs/", "")

    console.log(urlIdk)
    console.log(`https://raw.githubusercontent.com/Ninjaondra321/besamel-docs/main/${urlIdk}.json`)

    let response;
    if (urlIdk === "/") {
        response = await fetch(`https://raw.githubusercontent.com/Ninjaondra321/besamel-docs/main/index.json`);
    } else {
        response = await fetch(`https://raw.githubusercontent.com/Ninjaondra321/besamel-docs/main/${urlIdk}.json`);
    }

    if (!response.ok) {
        return {
            page: [
                { type: "h1", innerHtml: "Page not found" }
            ]
        }
    }

    const data = await response.json();

    let counter = 0;

    for (let i = 0; i < data.page.length; i++) {
        data.page[i].id = "docs-" + counter + "-id";
        counter++;
    }

    console.log(data)

    return data;
}

function createRightSidebar(pageJSON) {
    let rightSidebar = []

    for (let i = 0; i < pageJSON.page.length; i++) {

        if (pageJSON.page[i].type === "h1") {
            rightSidebar.push({
                "innerHtml": pageJSON.page[i].innerHtml,
                "link": pageJSON.page[i].id,
                "children": []
            })
        }
        else if (pageJSON.page[i].type === "h2") {

            rightSidebar[rightSidebar.length - 1].children.push({
                "innerHtml": pageJSON.page[i].innerHtml,
                "link": pageJSON.page[i].id,
            })
        }


    }

    console.log(rightSidebar)


    return rightSidebar;
}

function Docs() {
    const location = useLocation();

    function setSEO(title, description) {
        document.title = title;

        var meta = document.getElementsByTagName("meta");
        for (var i = 0; i < meta.length; i++) {
            if (meta[i].name.toLowerCase() == "description") {
                meta[i].content = description;
            }
        }

    }

    updateMeta({
        title: "BESAMEL | Docs",
        description: "Documentation for BESAMEL, awesome CSS framework designed to be responsive, lightweight, customizable and easy to use. It's also open source and free to use!"
    })




    const [sidebar, { mutate: ahoj, refetch: refetchSidebar }] = createResource(fetchSidebar)
    const [page, { mutate, refetch }] = createResource(fetchPage)
    const [version, setVersion] = createSignal(undefined)
    const [sidebarOpened, setSidebarOpened] = createSignal(false)
    const [rightSidebar, setRightSidebar] = createSignal([])

    const [lastUrl, setLastUrl] = createSignal(location.pathname)

    // Load the right sidebar every time the page changes
    createEffect(() => {
        if (page.state === "ready") {
            console.log(page())
            setRightSidebar(createRightSidebar(page()))
        }
    })

    createEffect(() => {
        console.log("page changed")
        console.log(page())
        if (lastUrl() !== location.pathname) {
            refetch()
            setLastUrl(location.pathname)
        }
    })

    createEffect(() => {
        updateMeta({
            title: page().meta.title + " | Bešamel",
            description: page().meta.description
        })
    })



    function changeVersion(version) {
        // The version is in the URL
        if (version == "latest") {
            setVersion("latest")
            window.history.pushState({}, "", location.pathname)
        } else {
            setVersion(version)
            // Set url to the version
            window.history.pushState({}, "", location.pathname + "?v=" + version)
        }


    }

    createEffect(() => {
        try {

            changeVersion(location.searchParams.get("v") || "latest")
        } catch (error) {
            console.log(error)
        }

    })


    createEffect(() => {
        console.log("version changed")
        // console.log(version())
        if (version()) {

            changeVersion(version())
        }
    })







    return (<>
        <div className={"sidebar left nice-scroll  padding-medium scroll " + (sidebarOpened() ? "open" : "closed")}>

            <div className="row">
                <label htmlFor="version">Version:</label>
                <select name="version" value={version()}
                    onChange={(e) => {
                        changeVersion(e.target.value)
                    }}

                    id="version" class="secondary" style="border: none;
    padding: 0;
    margin: 0;
    margin-left:5px" >
                    <option value="latest">Latest</option>
                    <option value="0.02">v 0.02</option>
                    <option value="0.01">v 0.01</option>
                    <option value="beta">Beta</option>
                </select>

                <div class="tonpoltip">i<div class="tooltip-window bottom"> <p> Více najdete <A href="/versions">zde</A> </p></div></div>

            </div>

            <br />



            {/* <div className="input padding">
                <label htmlFor="fdhasfuahiuafiugafh" class="">Verze</label>

                <select name="" class="terciary" id="fdhasfuahiuafiugafh">
                    <option value="das">Lastest</option>
                    <option value="a">v 0.02</option>
                    <option value="a">v 0.01</option>
                    <option value="sad">Beta</option>
                </select>
            </div> */}



            {sidebar.state === "errored" && <h3>404</h3>
            }
            {
                sidebar.loading && <div className="loading">
                    <h5>Sidebar - L</h5>
                    <ul>
                        <li>Accordeon</li>
                        <li>Badge</li>
                        <li>Buttons</li>
                        <li>Cards</li>
                        <li>Carousels</li>
                        <li>Chips</li>
                        <li>Dropdown</li>
                        <li>Horizontal ruler</li>
                        <li>Inputs</li>
                        <li>Tabs</li>
                        <li>Tiles</li>
                        <li>Tables</li>
                        <li>Text</li>
                        <li>Leaders</li>
                        <li>Loading animation</li>
                        <li>Modals</li>

                    </ul>

                    <h5>Pokračování příště</h5>
                    <ul>

                        <li>D</li>
                        <li>D</li>
                        <li>D</li>
                        <li>D</li>
                        <li>D</li>
                        <li>D</li>
                        <li>D</li>
                        <li>D</li>
                        <li>D</li>
                        <li>D</li>
                        <li>D</li>
                        <li>D</li>
                        <li>D</li>
                    </ul>

                </div>
            }

            {
                sidebar.state === "ready" && <div>
                    {sidebar().map((item) =>
                        <>
                            <h5 innerHTML={item.innerHtml}></h5>

                            <ul>
                                {item.children.map((item) =>
                                    <li><A href={"/docs" + item.link} innerHTML={item.innerHtml}></A></li>
                                )}
                            </ul>
                        </>
                    )}


                </div>
            }

        </div>


        <div className="sections small">
            <div className="page-section">

                {page()}
                {page.state === "errored" && <h3>Error</h3>}
                {
                    page.loading && <div className="loading">
                        <h1>Lodaing</h1></div>
                }

                {/* {
                    page.state === "ready" && <div className="content padding" >
                        <h1>Ready</h1>
                        {page().page.map((item) => <p>{item.type}</p>)}
                        {page().page.map((item) => <p>{item.id}</p>)}
                        {page().page.map((item) => <p>{item.innerHTML}</p>)}
                    </div>
                } */}



                {
                    page.state === "ready" && <div className="content padding" id="contentHalloooooo">
                        <div className="row">

                            <button className="icon-btn secondary pc-hidden" onClick={() => setSidebarOpened(true)} >list</button>
                            <ul className="breadcrumb">
                                <li><A href="/docs">Docs</A></li>
                                <li><A href="/docs">Components</A></li>
                                <li><A href="/docs">Accordion</A></li>

                            </ul>

                        </div>

                        {
                            page().page.map((item) => {
                                switch (item.type) {
                                    case "h1":
                                        return <h1 id={item.id} innerHTML={item.innerHtml}></h1>
                                    case "h2":
                                        return <h2 id={item.id} innerHTML={item.innerHtml}></h2>
                                    case "h3":
                                        return <h3 id={item.id} innerHTML={item.innerHtml}></h3>
                                    case "h4":
                                        return <h4 id={item.id} innerHTML={item.innerHtml}></h4>
                                    case "h5":
                                        return <h5 id={item.id} innerHTML={item.innerHtml}></h5>
                                    case "h6":
                                        return <h6 id={item.id} innerHTML={item.innerHtml}></h6>
                                    case "p":
                                        return <p id={item.id} innerHTML={item.innerHtml}></p>
                                    case "iframe":
                                        return <iframe id={item.id} srcdoc={item.innerHtml}></iframe>
                                    case "code":
                                        return <>
                                            {/* {console.log(item)}
                                            {item.sample &&
                                                <div className="example" innerHTML={item.innerHtml}>
                                                </div>
                                            } */}

                                            <CodeSample language={item.language} code={item.innerHtml} type={item.type} />

                                            {/* <div className="w-12">
                                                <pre><code id={item.id} onclick={hljs.highlightAll} class={`hljs ${item.language} language-${item.language}`}>{item.innerHtml}</code>  </pre>
                                            </div> */}
                                        </>



                                    // <div className="w-12">
                                    //     <pre><code id={item.id} onclick={hljs.highlightAll} class={`hljs ${item.language} language-${item.language}`}>{item.innerHtml}</code>  </pre>
                                    // </div>
                                    // case "sample":
                                    //     return <>
                                    //         <div className="example" innerHTML={item.innerHtml}>

                                    //         </div>
                                    //         <pre><code id={item.id} onclick={hljs.highlightAll} class={`hljs ${item.language} language-${item.language}`}>{item.innerHtml}</code>  </pre>
                                    //     </>
                                }
                            })
                        }

                    </div>
                }

            </div>

            <div className="info-section">
                <div className="content">
                    <hr />
                    {(page.state === "ready" && page().meta) && <>
                        <p>Author: {page().meta.author}
                            <br />
                            Last updated: {page().meta.date}
                            <br />
                            {/* TODO! change latest to the actual number */}
                            {console.log(version())}
                            Version: {["latest", "", undefined].includes(version()) ? "Latest" : version()}

                        </p>
                    </>}
                </div>
            </div>

        </div>


        <div className="sidebar right nice-scroll m-hidden padding-medium scroll" >
            {
                rightSidebar().map((item) => <>
                    <A href={location.pathname + "#" + item.link}>

                        <h6 innerHTML={item.innerHtml}  ></h6>
                    </A>
                    <ul>
                        {item.children.map((item) =>
                            <li><A href={location.pathname + "#" + item.link} innerHTML={item.innerHtml}></A></li>
                        )}
                    </ul>

                </>
                )


            }
            <hr />
            <ul style="padding:0">
                <li>
                    <A href={"https://github.com/Ninjaondra321/besamel-docs/blob/main/" + getPageUrl()}>
                        <span className="icon" style="    padding: 0;font-size:  inherit;}">edit</span>
                        Edit on GitHub
                    </A>
                </li>
                <li>
                    <A href="/ahoj">
                        <span className="icon" style="    padding: 0;font-size:  inherit;}">share</span>
                        Share
                    </A>
                </li>
                <li>
                    <A href="" activeClass="" onClick={() => print()}>
                        <span className="icon" style="    padding: 0;font-size:  inherit;}">print</span>
                        Print
                    </A>
                </li>
            </ul>


        </div>


    </ >);
}

export default Docs;