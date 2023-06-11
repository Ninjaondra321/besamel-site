import { onMount, createSignal, Show, createEffect } from "solid-js";
import { A } from "@solidjs/router";



function Cookies() {

    const [showCookies, setShowCookies] = createSignal(false);
    const [cookiesAllowed, setCookiesAllowed] = createSignal(undefined);


    const [prozatimni, setProzatimni] = createSignal(true)


    onMount(() => {
        try {
            let c = JSON.parse(localStorage.getItem('COOKIES-NOTIME'));
            if (c["analytical"] === true) {
                setCookiesAllowed(true);
            } else if (c["analytical"] === undefined) {
                setShowCookies(true);
            }
        } catch (e) {
            setShowCookies(true);

        }

    });



    return (<>
        <script type="text/javascript">
            {`
 <script type="text/javascript">
 (function(c,l,a,r,i,t,y){
     c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
     t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
     y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
 })(window, document, "clarity", "script", "hhtej4ongh");
</script>
    `}

        </script>

        {(showCookies() && prozatimni()) &&

            <div className="cookies-banner center">
                <div className="content light padding-medium responsive-rotate">

                    <div className="head">
                        <h3>Cookies</h3>
                        <p>Tato stránka používá soubory cookies. Pokud souhlasíte s používáním souborů cookies, klikněte na tlačítko Povolit. Pokud ne, klikněte na tlačítko Zakázat.
                            Více informací o souborech cookies naleznete <A href="/cookies">zde</A>.</p>
                    </div>
                    <div className="center w-1000px m-w-12">
                        <button className="primary w-12" onclick={() => setProzatimni(false)}>
                            <span className="g-icon"> done</span>
                            Povolit </button>
                        <button className="secondary w-12" onclick={() => setProzatimni(false)}>
                            <span className="g-icon">close</span>
                            Zakázat </button>







                    </div>
                </div>
            </div>
        }

    </>);
}

export default Cookies;