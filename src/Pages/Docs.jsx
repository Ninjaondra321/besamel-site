import { useLocation } from "@solidjs/router";
import { createEffect, createResource, onMount } from "solid-js";

import { createSignal } from "solid-js";

import { A } from "@solidjs/router";

const fetchSidebar = async (language) => {
    // const response = await fetch(`https://raw.githubusercontent.com/Ninjaondra321/docs-sketch/master/Sidebar/${language}.mdx`);
    // console.log(response)
    // const data = await response.text();
    // console.log(data);
    // return data;

    const testFetchResult = [
        {
            "innerHTML": "Introduction",
            "link": "/docs/introduction",
            "children": [
                {
                    "innerHTML": "Sample link",
                    "link": "/docs/introduction/sample-link",
                },
                {
                    "innerHTML": "Sample link 2",
                    "link": "/docs/introduction/sample-link-2",
                }]
        },
        {
            "innerHTML": "Components",
            "link": "/docs/components",
            "children": [
                {
                    "innerHTML": "Accordeon",
                    "link": "/docs/components/accordeon",
                },
                {
                    "innerHTML": "Badge",
                    "link": "/docs/components/badge",
                },
                {
                    "innerHTML": "Buttons",
                    "link": "/docs/components/buttons",
                },
                {
                    "innerHTML": "Cards",
                    "link": "/docs/components/cards",
                },
                {
                    "innerHTML": "Carousels",
                    "link": "/docs/components/carousels",
                },
            ]
        }
    ]

    console.log(testFetchResult)
    return testFetchResult;
}

const fetchPage = async (language, location) => {
    console.log(location)
    // let parts = location.split("/");
    // console.log(parts)

    //     const response = await fetch(`https://raw.githubusercontent.com/Ninjaondra321/docs-sketch/master/Introduction/01-whats.md`);
    //     console.log(response)
    //     const data = await response.text();
    //     console.log(data);
    //   // const js = String(await compile(data, { jsxImportSource: 'solid-js/h', /* otherOptions… */ }))
    //     const js = await compile(data, { jsxImportSource: 'solid-js/h', /* otherOptions… */ })
    //     console.log(js)
    //     return js;

    const testFetchResult = {
        "meta": {
            "title": "Introduction",
            "description": "Introduction to the Sketch Design System",
            "keywords": "sketch, design, system, sketch design system, sketch design, sketch system, sketch design system",
            "author": "NoTime",
            "date": "16.5.2023"
        },
        "page": [
            {
                "type": "h1",
                "innerHTML": "Introduction <span class='badge primary'>New</span>",
            },
            {
                "type": "p",
                "innerHTML": "Lorem ipsum dolor, sit <span class='badge primary'>New</span> amet consectetur adipisicing elit. Nam porro quas officia consectetur maiores, ipsam totam minus? Mollitia libero harum esse nam! Vel nesciunt delectus blanditiis ut explicabo veritatis fuga?"
            },
            {
                "type": "h2",
                "innerHTML": "Sample"
            },
            {
                "type": "iframe",
                "innerHTML": "<h1>Sample heading</h1> <p>Sample text</p>",
            }
        ]
    }
    let counter = 0;


    for (let i = 0; i < testFetchResult.page.length; i++) {

        testFetchResult.page[i].id = "docs-" + counter + "-id";
        counter++;

    }

    // TODO!! Tohle vymaz
    // Make the page tripple as long

    for (let i = 0; i < 15; i++) {

        testFetchResult.page.push(testFetchResult.page[i])

    }



    return testFetchResult;
}

function createRightSidebar(pageJSON) {
    let rightSidebar = []

    for (let i = 0; i < pageJSON.page.length; i++) {

        if (pageJSON.page[i].type === "h1") {
            rightSidebar.push({
                "innerHTML": pageJSON.page[i].innerHTML,
                "link": pageJSON.page[i].id,
                "children": []
            })
        }
        else if (pageJSON.page[i].type === "h2") {

            rightSidebar[rightSidebar.length - 1].children.push({
                "innerHTML": pageJSON.page[i].innerHTML,
                "link": pageJSON.page[i].id,
            })
        }


    }

    console.log(rightSidebar)
    return rightSidebar;
}

function Docs({ language }) {

    const location = useLocation();

    console.log(location)

    const [sidebar] = createResource(language(), fetchSidebar)
    const [page] = createResource([language(), location.pathname], fetchPage)
    const [version, setVersion] = createSignal(undefined)
    const [rightSidebar, setRightSidebar] = createSignal([])

    createEffect(() => {
        if (page.state === "ready") {
            console.log(page())
            setRightSidebar(createRightSidebar(page()))
        }
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
        changeVersion(location.searchParams.get("v") || "latest")
    })


    createEffect(() => {
        console.log("version changed")
        // console.log(version())
        if (version()) {

            changeVersion(version())
        }
    })



    return (<>
        <div className="sidebar left nice-scroll  padding-medium scroll">

            <div className="row">
                <label htmlFor="version">Version:</label>
                <select name="version" value={version()}
                    onChange={(e) => {
                        console.log(e.target.value)
                        // setVersion(e.target.value)
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

                <div class="tooltip">i<div class="tooltip-window bottom"> <p> Více najdete <A href="/versions">zde</A> </p></div></div>

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
                            <h5 innerHTML={item.innerHTML}></h5>
                            <ul>
                                {item.children.map((item) =>
                                    <li><A href={"/" + item.link} innerHTML={item.innerHTML}></A></li>
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

                {
                    page.state === "ready" && <div className="content padding" id="contentHalloooooo">
                        {
                            page().page.map((item) => {
                                switch (item.type) {
                                    case "h1":
                                        return <h1 id={item.id} innerHTML={item.innerHTML}></h1>
                                    case "h2":
                                        return <h2 id={item.id} innerHTML={item.innerHTML}></h2>
                                    case "h3":
                                        return <h3 id={item.id} innerHTML={item.innerHTML}></h3>
                                    case "h4":
                                        return <h4 id={item.id} innerHTML={item.innerHTML}></h4>
                                    case "h5":
                                        return <h5 id={item.id} innerHTML={item.innerHTML}></h5>
                                    case "h6":
                                        return <h6 id={item.id} innerHTML={item.innerHTML}></h6>
                                    case "p":
                                        return <p id={item.id} innerHTML={item.innerHTML}></p>
                                    case "iframe":
                                        return <iframe id={item.id} srcdoc={item.innerHTML}></iframe>
                                }
                            })
                        }

                    </div>
                }

            </div>

            <div className="info-section">
                <div className="content">
                    <hr />
                    {page.state === "ready" && <>
                        <p>Author: {page().meta.author}
                            <br />
                            Last updated: {page().meta.date}
                            <br />
                            {/* TODO! change latest to the actual number */}
                            Version: {version() === "latest" ? "Latest" : version()}

                        </p>
                    </>}
                </div>
            </div>

        </div>


        <div className="sidebar right nice-scroll m-hidden padding-medium scroll" >
            {
                rightSidebar().map((item) => <>
                    <h6 innerHTML={item.innerHTML}  ></h6>
                    <ul>
                        {item.children.map((item) =>
                            <li><A href={"#" + item.link} innerHTML={item.innerHTML}></A></li>
                        )}
                    </ul>

                </>
                )


            }
            <hr />
            <ul>
                <li>
                    <A href="/ahoj">
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
                    <A href="/ahoj">
                        <span className="icon" style="    padding: 0;font-size:  inherit;}">print</span>
                        Print
                    </A>
                </li>
            </ul>


        </div>


    </ >);
}

export default Docs;