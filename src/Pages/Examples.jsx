import { A } from "@solidjs/router";

function Examples() {
    // SEO
    document.title = "BESAMEL | Sections";

    var meta = document.getElementsByTagName("meta");
    for (var i = 0; i < meta.length; i++) {
        if (meta[i].name.toLowerCase() == "description") {
            meta[i].content = "Example of websites, sections and components created with BESAMEL";
        }
    }
    return (<div className="sections">
        <div className="header">
            <div className="content">
                <h1>Examples</h1>

            </div>
        </div>

        <div className="examples">
            <div className="content responsive-rotate">
                <A className="card w-6 m-w-11 column" href="/examples/components">
                    <h2>All components</h2>
                    <p>
                        Page featuring all defautl BESAMEL components
                    </p>
                </A>
                <A className="card w-6 m-w-11 column" href="/examples/sections">
                    <h2>Sections</h2>
                    <p>
                        Showcase of what sections you can create with BESAMEL
                    </p>
                </A>

            </div>
        </div>



    </div>);
}

export default Examples;