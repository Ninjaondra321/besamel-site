import { useLocation } from "@solidjs/router";
import { createResource, onMount } from "solid-js";
import { compile } from '@mdx-js/mdx'


import { MDXProvider } from '@mdx-js/react';

import { render } from "solid-js/web";


import { A } from "@solidjs/router";

const fetchSidebar = async (language) => {
    // const response = await fetch(`https://raw.githubusercontent.com/Ninjaondra321/docs-sketch/master/Sidebar/${language}.mdx`);
    // console.log(response)
    // const data = await response.text();
    // console.log(data);
    // return data;

    const testFetchResult = [
        {
            "title": "Introduction",
            "link": "/docs/introduction",
            "children": [
                {
                    "title": "Sample link",
                    "link": "/docs/introduction/sample-link",
                },
                {
                    "title": "Sample link 2",
                    "link": "/docs/introduction/sample-link-2",
                }]
        },
        {
            "title": "Components",
            "link": "/docs/components",
            "children": [
                {
                    "title": "Accordeon",
                    "link": "/docs/components/accordeon",
                },
                {
                    "title": "Badge",
                    "link": "/docs/components/badge",
                },
                {
                    "title": "Buttons",
                    "link": "/docs/components/buttons",
                },
                {
                    "title": "Cards",
                    "link": "/docs/components/cards",
                },
                {
                    "title": "Carousels",
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
                "innerHtml": "Introduction <span class='badge primary'>New</span>",
            },
            {
                "type": "p",
                "innerHtml": "Lorem ipsum dolor, sit <span class='badge primary'>New</span> amet consectetur adipisicing elit. Nam porro quas officia consectetur maiores, ipsam totam minus? Mollitia libero harum esse nam! Vel nesciunt delectus blanditiis ut explicabo veritatis fuga?"
            },
            {
                "type": "h2",
                "innerHtml": "Sample"
            },
            {
                "type": "iframe",
                "innerHtml": "<h1>Sample heading</h1> <p>Sample text</p>",
            }
        ]
    }

    let sidebar = [
        {
            "innerHtml": "Introduction",
            "id": "introduction",
            "children": [
                {
                    "innerHtml": "Sample link",
                    "id": "sample-link",
                },
                {
                    "innerHtml": "Sample link 2",
                    "id": "sample-link-2",
                }
            ]
        },
        {
            "innerHtml": "Components",
            "id": "components",
            "children": []
        },

    ]

    let counter = 0;

    for (let i = 0; i < testFetchResult.page.length; i++) {
        testFetchResult.page[i].id = "docs-" + counter + "-id";
        counter++;
    }

    return testFetchResult;
}

function Docs({ language }) {

    const location = useLocation();

    console.log(location)

    const [sidebar] = createResource(language(), fetchSidebar)
    const [page] = createResource([language(), location.pathname], fetchPage)


    return (<>
        <div className="sidebar left nice-scroll  padding-medium scroll">
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
                    {JSON.stringify(sidebar())}
                    {sidebar()}
                    {sidebar().map((item) => {
                        <>
                            <h4>{item.title}</h4>
                            {console.log(item)}
                            <p>
                                AHOJ
                                {JSON.stringify(item)}
                            </p>
                        </>
                    })}
                </div>
            }



        </div>



        <div className="sections-small">

            {page()}
            {page.state === "errored" && <h3>Error</h3>}
            {
                page.loading && <div className="loading">
                    <h1>Lodaing</h1></div>
            }

            {
                page.state === "ready" && <div className="content" id="contentHalloooooo">
                    <h1>Ahoj</h1>
                    {String(page().page)}
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

                            }
                        })
                    }

                </div>
            }


        </div>


        <div className="sidebar right nice-scroll m-hidden padding-medium scroll" >
            <h5>Sidebar - R</h5>
            <ul>
                <li>B</li>
                <li>C</li>
                <hr />
                <li>D</li>
                <li>
                    <A href="/ahoj">
                        <span className="icon" style="    padding: 0;font-size:  inherit;}">search</span>
                        Ahoj
                    </A>
                </li>
            </ul>


        </div>


    </ >);
}

export default Docs;