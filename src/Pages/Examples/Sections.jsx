import pasta from "../../Imgs/pasta.jpg"

function Sections() {
    return (<div className="sections">

        <div className="hero-01" style={{ background: "var(--secondary-color)" }}>
            <div className="content center padding-large">
                <h1 className="responsive display">BEŠAMEL</h1>
                <h4 className="responsive display"
                    // center the text
                    style={{ "text-align": "center" }}

                >Skvělý css framework</h4>
                <div className="responsive-rotate center padding-medium">
                    <button className="secondary large">Ukázky</button>
                    <button className="primary large">Dokumentace</button>
                </div>
            </div>
        </div>

        <div className="padding">
            <hr />
        </div>

        <div className="hero-02 bg dark h-600px">
            <img src={pasta} alt="pubImg" class="make-section-bg darken-more" />
            <div className="content center padding-large">
                <h1 className="responsive display">Restaurace Paříž</h1>
                <h4 className="responsive display"
                    // center the text
                    style={{ "text-align": "center" }}

                >Nejlepší pivo v okolí</h4>
            </div>
        </div>

        <div className="padding">
            <hr />
        </div>

        <div className="hero-03 bg  " style="background: #f5ad4338">
            <div className="content responsive-rotate">
                <div className="w-6 h-12 center-v ">
                    <h1 className="responsive display">Restaurace Paříž</h1>
                    <h4 className="responsive display ">Nejlepší pivo v okolí</h4>
                </div>

                <div className="w-6 m-w-11 bg padding-large">
                    <img src={pasta} alt="pubImg" style="position: relative; border-radius:9px" class="make-section-bg" />
                </div>
            </div>
        </div>



        <div className="padding">
            <hr />
        </div>


        <div className="hero-04 bg  " style="background: #f5ad4338">
            <div className="make-section-bg to-right bg w-6" >
                <img src={pasta} alt="pubImg" class="make-section-bg" />
            </div>

            <div className="content row padding-large">
                <div className="w-6 h-12 center-v ">
                    <h1 className="responsive display">Restaurace Paříž</h1>
                    <h4 className="responsive display ">Nejlepší pivo v okolí</h4>
                </div>

            </div>
        </div>

        <div className="padding">
            <hr />
        </div>



        <div className="hero-04 bg  " style="background: #f5ad4338">
            <div className="make-section-bg to-right bg w-7" >
                <img src={pasta} alt="pubImg" class="make-section-bg" style="border-radius:500px 0 0 500px" />
            </div>

            <div className="content row padding-large">
                <div className="w-6 h-12 center-v ">
                    <h1 className="responsive display">Restaurace Paříž</h1>
                    <h4 className="responsive display ">Nejlepší pivo v okolí</h4>
                </div>

            </div>
        </div>

        <div className="padding">
            <hr />
        </div>


        <div className="section-1 bg">
            <div className="content  bg padding-large responsive-rotate">
                <div className="make-section-bg">
                    <h6 style={{ color: "rgba(0,0,0,0.4)", "font-size": "calc(10vw + 50px )" }}>#1</h6>
                </div>

                <div className="w-5 m-w-12 h-12 center padding">
                    <h1>Section one</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quae aspernatur, incidunt quibusdam vero deleniti unde voluptatibus perferendis illo dolorem odit ea fugiat qui adipisci possimus iusto eligendi similique officia?</p>
                    <div className="w-12 to-right">
                        <button className="primary large m-w-12 center">Button</button>
                    </div>
                </div>

                <div className="w-7 m-w-12 padding">
                    <img src={pasta} alt="pubImg" />
                </div>

            </div>
        </div>

        <div className="section-1 bg">
            <div className="content  bg padding-large responsive-rotate  m-reversed">
                <div className="make-section-bg to-right" style={{ "flex-direction": "column-reverse" }}>
                    <h6 style={{ color: "rgba(0,0,0,0.4)", "font-size": "calc(10vw + 50px )" }}>#2</h6>
                </div>

                <div className="w-7 m-w-12 padding">
                    <img src={pasta} alt="pubImg" />
                </div>

                <div className="w-5 m-w-12 h-12 center padding">
                    <h1>Section two</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quae aspernatur, incidunt quibusdam vero deleniti unde voluptatibus perferendis illo dolorem odit ea fugiat qui adipisci possimus iusto eligendi similique officia?</p>
                    <div className="w-12 ">
                        <button className="primary large m-w-12 center">Button</button>
                    </div>
                </div>
            </div>
        </div>


    </div>);
}

export default Sections;