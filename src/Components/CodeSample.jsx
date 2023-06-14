import { createEffect, createResource, onMount, createSignal } from "solid-js";


function CodeSample({ code, type, language }) { // Type = "code" || "sample" || "both"

    const [useThisCode, updateCode] = createSignal(code);

    onMount(() => {
        hljs.highlightAll();
    });

    return (<>

        {
            (language == "html" || type == "sample" || type == "both") &&
            <div className="example-window" innerHTML={useThisCode()}></div>
        }



        <div className="w-12">
            <pre><code contentEditable="true" class={`hljs ${language} language-${language}`}>{useThisCode()}</code>  </pre>
            {/* <textarea name="" id="asdddd" cols="30" rows="10" value={useThisCode()} onchange={e => updateCode(e.value)} ></textarea> */}
        </div>

    </>);
}

export default CodeSample;