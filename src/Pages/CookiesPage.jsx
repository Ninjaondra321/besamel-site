import { createSignal, onMount } from "solid-js";





function CookiesPage({ analyticalCookiesAllowed, setCookies }) {
    document.title = "BESAMEL | Cookies";


    return (<>
        <div className="sections">
            <div className="cookies-section">
                <div className="content">
                    <h1>Cookies</h1>
                    <br />

                    <div className="cookies-checkbox">
                        <div className="flex " style=" display: flex ">


                            <input type="checkbox" id="cookies-checkbox-technicke" checked disabled />
                            <label htmlFor="cookies-checkbox-technicke">
                                <h2 >Technical</h2>
                            </label>
                        </div>
                        <p>
                            Technical cookies are necessary for the website to function properly. They are usually set in response to actions you take on the website, such as setting your privacy preferences, logging in, or filling out forms.

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
                            Analytical cookies help us improve our website by collecting and reporting information about its use.
                        </p>
                        <p>
                            3rd party cookies:
                        </p>
                        <ul>
                            <li>
                                MS Clarity (find more in <a target="blank" href="https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-data">Clarity cata collection</a>)
                            </li>
                            <li>
                                Google Analytics (find more in <a target="blank" href="https://support.google.com/analytics/answer/11593727?hl=en&sjid=13295105114338360632-EU">Google Analytics data collection</a>)
                            </li>
                        </ul>

                    </div>
                    <div className="cookies-checkbox">

                        <div className="flex " style=" display: flex ">
                            <input type="checkbox" id="cookies-checkbox-marketingove" disabled />
                            <label htmlFor="cookies-checkbox-marketingove">
                                <h2 > Marketingové </h2>
                            </label>
                        </div>

                        <p>
                            No marketing cookies are used
                        </p>

                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default CookiesPage;