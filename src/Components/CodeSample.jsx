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



        <div className="w-12">
            <Highlight language={language}>
                {useThisCode()}
            </Highlight>

            <pre><code contentEditable="true" class={`hljs ${language} language-${language}`}>{useThisCode()}</code>  </pre>
            {/* <textarea name="" id="asdddd" cols="30" rows="10" value={useThisCode()} onchange={e => updateCode(e.value)} ></textarea> */}
        </div>

    </>);
}

export default CodeSample;