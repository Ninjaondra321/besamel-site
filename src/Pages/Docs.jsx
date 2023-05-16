import { useLocation } from "@solidjs/router";
import { createResource, onMount } from "solid-js";
import { compile } from '@mdx-js/mdx'


import { MDXProvider } from '@mdx-js/react';

import { render } from "solid-js/web";


import { A } from "@solidjs/router";

const fetchSidebar = async (language) => {
    const response = await fetch(`https://raw.githubusercontent.com/Ninjaondra321/docs-sketch/master/Sidebar/${language}.mdx`);
    console.log(response)
    const data = await response.text();
    console.log(data);
    return data;
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
                "innerHtml": "Introduction"
            },
            {
                "type": "p",
                "innerHtml": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam porro quas officia consectetur maiores, ipsam totam minus? Mollitia libero harum esse nam! Vel nesciunt delectus blanditiis ut explicabo veritatis fuga?"
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

}

function Docs({ language }) {

    const location = useLocation();

    console.log(location)

    const [sidebar] = createResource(language(), fetchSidebar)

    const [page] = createResource([language(), location.pathname], fetchPage)


    function helloWorld() {
        if (page.state === "ready") {
            render(page(), document.getElementById("contentHalloooooo"))
        }
    }





    return (<div className="sections">
        <div className="sidebar left nice-scroll  padding-medium scroll">
            {sidebar.state === "errored" && <h3>404</h3>
            }
            {
                sidebar.loading ? <div className="loading">
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

                </div> : <div>{sidebar()}</div>
            }

        </div>



        <div className="sections-small">
            <button onClick={() => console.log(page().value)}>Ahoj</button>
            <button onClick={() => helloWorld()}>Ahoj</button>

            <div id="contentHalloooooo"></div>




            {page()}
            {page.state === "errored" && <h3>Error</h3>}
            {
                page.loading && <div className="loading">
                    <h1>Lodaing</h1></div>
            }

            {page.state === "ready" && <div className="content">


                {page().value}


                <MDXProvider jsxImportSource="solid-jsx" components={page().value}>
                    {page().value}

                </MDXProvider>


            </div>
            }

        </div>




        <h1>Docs</h1>
    </div >);
}

export default Docs;