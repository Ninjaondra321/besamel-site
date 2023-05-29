import { A } from "@solidjs/router";

function Examples({ language }) {
    return (<div className="sections">
        <div className="header">
            <div className="content">
                <h1>Examples</h1>

            </div>
        </div>

        <div className="examples">
            <div className="content">
                <A className="card w-6 m-w-12 column" href="/examples/components">
                    <h2>All components</h2>
                    <p>
                        Page featuring all defautl BESAMEL components
                    </p>
                </A>
            </div>
        </div>



    </div>);
}

export default Examples;