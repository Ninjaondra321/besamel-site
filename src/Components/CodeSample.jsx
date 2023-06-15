import { createEffect, createResource, onMount, createSignal } from "solid-js";

import Highlight from "solid-highlight";
import "highlight.js/styles/stackoverflow-dark.css";


function CodeSample({ code, type, language }) { // Type = "code" || "sample" || "both"

    const [useThisCode, updateCode] = createSignal(code);

    onMount(() => {
        hljs.highlightAll();
    });

    createEffect(() => {
        console.log("Code changed");
        console.log(useThisCode());

    });




    return (<>

        {
            (language == "html" || type == "sample" || type == "both") &&
            <div className="example-window" innerHTML={useThisCode()}></div>
        }



        <div className="my-code-window hover">
            <Highlight class="" language={language}>
                {useThisCode()}
            </Highlight>
            <div className="hover-show menu">
                <button className="icon-btn icon small" onClick={() => navigator.clipboard.writeText(useThisCode())}>
                    content_copy
                </button>
            </div>
        </div>

    </>);
}

export default CodeSample;