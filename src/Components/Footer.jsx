
import { A } from "@solidjs/router";

function Footer() {
    return (<>

        {/* <footer  >
            <div className="content">
                <div className="left">
                    <h5>Info</h5>
                    <ul>
                        <li>Home</li>
                        <li>Menu</li>
                        <li>Order</li>
                        <li>Contacts</li>
                    </ul>
                </div>
                <div className="middle">
                    <h5>Kontakt</h5>

                    <table>
                        <thead style={{ display: "none" }}>
                            <tr>
                                <th>x</th>
                                <th>x</th>
                            </tr>
                        </thead>

                        <tbody>

                            <tr>
                                <td><span class="g-icon ">
                                    call
                                </span></td>
                                <td>+420 123 456 789</td>
                            </tr>

                            <tr>
                                <td><span class="g-icon">
                                    mail
                                </span></td>
                                <td> example@gmail.com </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div className="right">
                    <h5>Adresa</h5>


                </div>

            </div>
        </footer> */}

        <footer class="center column ">
            <div className="content">

                <h4>BEŠAMEL</h4>
                <p></p>

                <ul className="responsive ">
                    <li><A href="/" end> Home</A></li>
                    <li><A href="/docs"> Docs</A></li>
                    <li><A href="/examples"> Examples</A></li>
                    <li><A href="/theme-creator">  Theme creator</A></li>
                </ul>
                <div className="padding-small"></div>
                <ul className="responsive space-evenly  ">
                    <li><A href="https://github.com/Ninjaondra321"> GitHub</A></li>
                    <li><A href="/404"> Instagram</A></li>

                </ul>



                <div className="pos-w w-12">
                    <ul className="plain row">
                        <li><A href="/sitemap.xml">Sitemap</A></li>
                        <li><A href="/cookies">Cookies</A></li>
                    </ul>
                </div>

            </div>

        </footer>




    </>);
}

export default Footer;