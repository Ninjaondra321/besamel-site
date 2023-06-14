import { createEffect, createResource, onMount, createSignal } from "solid-js";


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



        <div style={{ "overflow-x": "scroll" }}>
            <pre><code contentEditable="true" class={`w-12 hljs ${language} language-${language}`}>{useThisCode()}</code>  </pre>
            {/* <textarea name="" id="asdddd" cols="30" rows="10" value={useThisCode()} onchange={e => updateCode(e.value)} ></textarea> */}
        </div>

    </>);
}

export default CodeSample;