import { onMount, createSignal, Show, createEffect } from "solid-js";
import { A } from "@solidjs/router";


const cookiesScripts = `
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XLHK85G7Q4"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-XLHK85G7Q4');
</script>


<script type="text/javascript">

    (function (c, l, a, r, i, t, y) {
        c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
        t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
        y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", "hhtej4ongh")


</script>

`


function Cookies({ cookiesAllowed, setCookies }) {


    return (<>

        {
            cookiesAllowed() &&
            <>

                <script type="text/javascript">
                    {
                        (function (c, l, a, r, i, t, y) {
                            c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
                            t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
                            y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
                        })(window, document, "clarity", "script", "hhtej4ongh")
                    }

                </script>

                <script async src="https://www.googletagmanager.com/gtag/js?id=G-XLHK85G7Q4"></script>
                <script>
                    {
                        `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                      
                        gtag('config', 'G-XLHK85G7Q4');
                        `
                    }


                </script>

            </ >
        }



        {
            cookiesAllowed() === undefined
            &&
            <div className="cookies-banner center">
                <div className="content light padding-medium responsive-rotate">
                    <div className="head">
                        <h3>Cookies</h3>

                        <p>
                            This website uses cookies. If you agree with the use of cookies, click on the Allow button. If you do not, click on the Disable button. More information about cookies can be found in the <A href="/cookies">cookies page</A>.
                        </p>

                    </div>
                    <div className="center w-1000px m-w-12">
                        <button className="primary w-12" onclick={() => setCookies("analytical", true)}>
                            <span className="icon"> done</span>
                            Allow </button>
                        <button className="secondary w-12" onclick={() => setCookies("analytical", false)}>
                            <span className="icon">close</span>
                            Disable
                        </button>







                    </div>
                </div>
            </div>
        }

    </>);
}

export default Cookies;