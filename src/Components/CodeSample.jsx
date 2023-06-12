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
            <pre><code class={`hljs ${language} language-${language}`}>{code()}</code>  </pre>
        </div>

    </>);
}

export default CodeSample;