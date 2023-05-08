import { createSignal, onMount } from "solid-js";





function CookiesPage() {

    const [analyticalCookiesAllowed, setAnalyticalCookiesAllowed] = createSignal(false);

    function getCookie() {
        try {
            localStorage.getItem("COOKIES-NOTIME");

            let c = JSON.parse(localStorage.getItem("COOKIES-NOTIME"));

            console.log(c);
            console.log(c["analytical"]);
            setAnalyticalCookiesAllowed(c["analytical"]);
        } catch (e) {
            console.log(e);
            setAnalyticalCookiesAllowed(false);
            localStorage.setItem("COOKIES-NOTIME", JSON.stringify({ "analytical": false }));
        }
    }



    function setCookies(type, value) {
        let c;
        try {
            c = JSON.parse(localStorage.getItem("COOKIES-NOTIME"));
        } catch (e) {
            console.log(e);

            c = { "analytical": false };
        }
        c[type] = value;
        localStorage.setItem("COOKIES-NOTIME", JSON.stringify(c));
    }

    onMount(() => {
        getCookie();
    });


    return (<>
        <div className="sections">
            <div className="cookies-section">
                <div className="content">
                    <h1>Cookies</h1>

                    <br />

                    {/* -checkbox- Technické */}
                    <div className="cookies-checkbox">

                        <div className="flex " style=" display: flex ">


                            <input type="checkbox" id="cookies-checkbox-technicke" checked disabled />
                            <label htmlFor="cookies-checkbox-technicke">
                                <h2 >Technické</h2>
                            </label>
                        </div>
                        <p>
                            Pomocí těchto cookies můžeme sledovat např. návštěvnost webu, délku prohlížení a další statistické informace. Díky nim Vám můžeme poskytovat ještě lepší weby. Můžou obsahovat i cookies třetích stran.
                        </p>

                    </div>

                    <div className="cookies-checkbox">

                        <div className="flex " style=" display: flex ">
                            <input type="checkbox" id="cookies-checkbox-analytické" checked={analyticalCookiesAllowed()} onchange={(e) => setCookies("analytical", e.target.checked)} />
                            <label htmlFor="cookies-checkbox-analytické">
                                <h2 >Analytické</h2>
                            </label>
                        </div>

                        <p>
                            Tento typ cookies nám pomáhá zlepšovat naše webové stránky a služby. Pomáhají nám pochopit, jak naše webové stránky a služby jsou používány a pomáhají nám zlepšovat jejich funkčnost a uživatelské zkušenosti.
                        </p>

                    </div>
                    <div className="cookies-checkbox">

                        <div className="flex " style=" display: flex ">
                            <input type="checkbox" id="cookies-checkbox-marketingove" disabled />
                            <label htmlFor="cookies-checkbox-marketingove">
                                <h2 > Marketingové </h2>
                            </label>
                        </div>

                        <p>
                            Marketingové cookies nepoužíváme                        </p>

                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default CookiesPage;