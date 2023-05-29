
import { A } from "@solidjs/router";


import { createSignal, onMount } from "solid-js";

import Img_12 from "../../Imgs/pasta.jpg"

import CarouselWrap from "../../Components/Carousels";

import Accordion from "../../Components/Accordion";
import ModalWrap from "../../Components/Modal";
import Offcanvas from "../../Components/Offcanvas";

//import Accordion from "../Components/Accordion";
//import ModalWrap from "../Components/Modal";
//import Offcanvas from "../Components/Offcanvas";

function ComponentsPage() {
    let iframeRef;

    const [activeTab, setActiveTab] = createSignal(0);
    const [openModal, setOpenModal] = createSignal(false);
    const [openModal2, setOpenModal2] = createSignal(false);


    // Offcanvas opened
    const [offCanL, setOffCanL] = createSignal(false)
    const [offCanR, setOffCanR] = createSignal(false)


    onMount(() => {

        hljs.highlightAll();

        // iframeRef.innerHTML = <div className="ahoj">
        //     <h1>ahoj</h1>
        // </div>
        // var innerDoc = iframeRef.contentDocument || iframeRef.contentWindow.document;
        // innerDoc.body.innerHTML = "<h1>Hello World!</h1>";
    });





    return (<>
        <div className="sections">


            <div className="accordion-section">
                <div className="content">
                    <h1>Accordion</h1>
                    <Accordion contents={[
                        { header: "Ahoj", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sequi quaerat. Possimus hic, quaerat ut eos repellat sint minus doloremque beatae fuga mollitia nulla perferendis commodi quibusdam sequi? Saepe, est!" },
                        { header: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sequi quaerat. Possimus hic, quaerat ut eos repellat sint minus doloremque beatae", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sequi quaerat. Possimus hic, quaerat ut eos repellat sint minus doloremque beatae fuga mollitia nulla perferendis commodi quibusdam sequi? Saepe, est!" },
                    ]}
                        oneOpened={true}
                    />
                </div>


            </div>

            <div className="accordion-section-v2">
                <div className="content">

                    <div className="accordion-plain">
                        <div className="accordion-item">
                            <button className="accordion-header"
                                onTouch={(e) => { e.target.parentElement.classList.toggle("closed"); }}
                                onClick={(e) => { e.target.parentElement.classList.toggle("closed"); }}
                            >
                                Ahoooooj
                            </button>

                            <div className="accordion-content">
                                <p>XdxdXdddd</p>
                            </div>


                        </div>
                    </div>

                </div>
            </div>

            <div className="badges-section">
                <div className="content badges">
                    <h1>Badges <span className="badge secondary">NEW</span></h1>
                    <p>Henry McHenry <span className="badge ">NEW</span> tady </p>
                    <h2>Primary<span className="badge primary">15+</span></h2>
                    <h2>Secondary<span className="badge secondary">15+</span></h2>
                    <h2>Terciary<span className="badge terciary">15+</span></h2>
                </div>
            </div>


            <div className="butttons-section">

                <div className="content">

                    <h1>Buttons</h1>
                    <div className="padding flex" style={{ "flex-wrap": "wrap" }}>
                        <button className="primary">Hello Word</button>
                        <button className="secondary">Lorem ipsum</button>
                        <button className="terciary">Lorem ipsum</button>
                        <button className="plain">Lorem ipsum</button>
                    </div>
                    <div className="padding flex">
                        <a href="" className="btn primary">HelloWorld</a>
                        <a href="" className="btn secondary">Lorem ipsum</a>
                        <a href="" className="btn terciary">Lorem ipsum</a>
                        <a href="" className="btn plain">Lorem ipsum</a>
                    </div>

                    <div className="padding flex" style={{ "flex-wrap": "wrap" }}>
                        <button disabled className="primary">Hello Word</button>
                        <button disabled className="secondary">Lorem ipsum</button>
                        <button disabled className="terciary">Lorem ipsum</button>
                        <button disabled className="plain">Lorem ipsum</button>
                    </div>
                    <div className="padding flex" style={{ "flex-wrap": "wrap" }}>
                        <button className="primary"> <span className="g-icon">arrow_forward</span> Hello Word</button>
                        <button className="secondary"><span className="g-icon">arrow_forward</span>Lorem ipsum</button>
                        <button className="terciary">Lorem ipsum</button>
                        <button className="plain">Lorem ipsum</button>
                    </div>
                    <div className="padding flex" style={{ "flex-wrap": "wrap" }}>
                        <button className="primary "> Hello Word  <span className="g-icon">arrow_forward</span></button>
                        <button className="secondary">Lorem ipsum  <span className="g-icon">arrow_forward</span></button>
                        <button className="terciary">Lorem ipsum  <span className="g-icon">arrow_forward</span></button>
                        <button className="plain">Lorem ipsum  <span className="g-icon">arrow_forward</span></button>
                    </div>

                    <div className="padding flex" style={{ "flex-wrap": "wrap" }}>
                        <button className="large primary">Hello Word</button>
                        <button className="large secondary">Lorem ipsum</button>
                        <button className="large terciary">Lorem ipsum</button>
                        <button className="large plain">Lorem ipsum</button>
                    </div>
                </div>
            </div>

            <div className="cards-section">
                <div className="content">
                    <h1>Cards</h1>

                    <div className="card">
                        <h4>Default card</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores autem tempore dolorum nam voluptate a fuga excepturi esse. Ipsum possimus fuga quam esse, quia quae commodi molestias. Obcaecati, quae tempora?</p>
                    </div>
                    <div className="card primary">
                        <h4>Primary card</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus debitis consectetur animi accusantium culpa quae qui dolor, voluptas at omnis tempore odit illum placeat esse. Exercitationem laudantium facere at facilis.   </p>
                    </div>
                    <div className="card secondary">
                        <h4>Secondary card</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum voluptas, exercitationem, dolorum doloribus ullam veniam quis quos ipsa corrupti impedit nulla, fugit sit maxime quod! Dolores in modi voluptate cupiditate.</p>
                    </div>

                    <div className="card terciary">
                        <h4>Terciary card</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores nesciunt, magnam tempora blanditiis, architecto incidunt neque vel earum distinctio animi suscipit laborum fugiat facilis placeat iure voluptatem culpa inventore at.</p>
                    </div>
                </div>
            </div>


            <div className="carousel-section column">

                <div className="content" style="margin-bottom:7px">
                    <h1>Carousels</h1>


                    {/* 
                    <div style="position:relative; height:100%; width:100%" class="carousel-parent ">

                        <div className="carousel fade-edge   ">

                            <div className="card w-500px m-w-12">
                                <h4>Hello World</h4>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum eius enim nostrum, dolorum ex fuga facilis pariatur animi, tempore maiores esse dolor dolore sapiente quaerat repudiandae incidunt reiciendis eveniet explicabo!</p>
                            </div>

                            <div className="card w-500px m-w-12">
                                <h4>Hello World</h4>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum eius enim nostrum, dolorum ex fuga facilis pariatur animi, tempore maiores esse dolor dolore sapiente quaerat repudiandae incidunt reiciendis eveniet explicabo!</p>
                            </div>

                            <div className="card secondary w-500px m-w-12">
                                <h4>Hello World</h4>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum eius enim nostrum, dolorum ex fuga facilis pariatur animi, tempore maiores esse dolor dolore sapiente quaerat repudiandae incidunt reiciendis eveniet explicabo!</p>
                            </div>

                            <div className="card w-500px m-w-12">
                                <h4>Hello World</h4>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum eius enim nostrum, dolorum ex fuga facilis pariatur animi, tempore maiores esse dolor dolore sapiente quaerat repudiandae incidunt reiciendis eveniet explicabo!</p>
                            </div>

                        </div>

                    </div> */}


                    <CarouselWrap>
                        <div className="card w-500px m-w-12">
                            <h4>Hello World</h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum eius enim nostrum, dolorum ex fuga facilis pariatur animi, tempore maiores esse dolor dolore sapiente quaerat repudiandae incidunt reiciendis eveniet explicabo!</p>
                        </div>

                        <div className="card w-500px m-w-12">
                            <h4>Hello World</h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum eius enim nostrum, dolorum ex fuga facilis pariatur animi, tempore maiores esse dolor dolore sapiente quaerat repudiandae incidunt reiciendis eveniet explicabo!</p>
                        </div>

                        <div className="card secondary w-500px m-w-12">
                            <h4>Hello World</h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum eius enim nostrum, dolorum ex fuga facilis pariatur animi, tempore maiores esse dolor dolore sapiente quaerat repudiandae incidunt reiciendis eveniet explicabo!</p>
                        </div>

                        <div className="card w-500px m-w-12">
                            <h4>Hello World</h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum eius enim nostrum, dolorum ex fuga facilis pariatur animi, tempore maiores esse dolor dolore sapiente quaerat repudiandae incidunt reiciendis eveniet explicabo!</p>
                        </div>


                    </CarouselWrap>


                    <h2>Maximised</h2>

                    <CarouselWrap maximised={true} >
                        <div className="item bg dark h-200px " >
                            <img src={Img_12} class="make-section-bg" />
                            <div className="padding-large">

                                <h1>Nadpis</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis facilis quasi minus quis nam perspiciatis hic repellat consequuntur commodi eligendi?</p>
                            </div>
                        </div>
                        <div className="item bg">
                            <img src={Img_12} />
                        </div>
                        <div className="item bg">
                            <img src={Img_12} />
                        </div>

                        <img src={Img_12} />
                        <img src={Img_12} />



                    </CarouselWrap>



                </div>



            </div>

            <div className="chips-section">
                <div className="content">
                    <h1>Chips</h1>
                    <div className="row">
                        <input type="checkbox" id="idkkkasd" />
                        <label htmlFor="idkkkasd" class="chip primary">Ahoj</label>
                        <input type="checkbox" id="idkkkasd1" />
                        <label htmlFor="idkkkasd1" class="chip primary">Ahoj</label>
                        <input type="checkbox" id="idkkkasd2" />
                        <label htmlFor="idkkkasd2" class="chip primary with-close">Ahoj</label>
                        <input type="checkbox" id="idkkkasd21" />
                        <label htmlFor="idkkkasd21" class="chip primary with-close">Ahoj</label>
                        <input type="checkbox" id="idkkkasd22" />
                        <label htmlFor="idkkkasd22" class="chip primary with-close">Ahoj</label>
                    </div>
                    <div className="row">
                        <input type="checkbox" id="ertert1" />
                        <label htmlFor="ertert1" class="chip">Ahoj</label>
                        <input type="checkbox" id="ertert12" />
                        <label htmlFor="ertert12" class="chip">Ahoj</label>
                        <input type="checkbox" id="ertert13" />
                        <label htmlFor="ertert13" class="chip with-close">Ahoj</label>
                        <input type="checkbox" id="ertert14" />
                        <label htmlFor="ertert14" class="chip with-close">Ahoj</label>
                        <input type="checkbox" id="ertert15" />
                        <label htmlFor="ertert15" class="chip with-close">Ahoj</label>
                    </div>
                </div>
            </div>

            <div className="code-section">
                <div className="content">
                    <h1>Code</h1>

                    <h2>Sample</h2>
                    {/* <iframe frameborder="0" ref={iframeRef}></iframe> */}

                    <iframe srcdoc="
                    <h1>Sample</h1>
                    " frameborder="0"></iframe>


                    <pre><code class="hljs css language-css">{"p {color: red }"}</code></pre>


                </div>
            </div>

            <div className="dropdown-sections">
                <div className="content">
                    <h1>Dropdown</h1>

                    <div className="dropdown">
                        <button className="dropdown-heading">Dropdown</button>
                        <div className="dropdown-window">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <hr />
                            <a href="#">Link 3</a>
                        </div>
                    </div>

                    {/* Select */}
                    <div className="select">
                        <select class="primary">
                            <option value="1">Audi</option>
                            <option value="2">BMW</option>
                            <option value="3">Citroen</option>
                            <option value="4">Dacia</option>
                            <option value="5">Fiat</option>
                            <option value="6">Golf</option>
                            <option value="7">Honda</option>
                            <option value="8">Isuzu</option>
                            <option value="9">Jaguar</option>
                            <option value="10">Kia</option>
                        </select>
                        <select class="secondary">
                            <option value="1">Audi</option>
                            <option value="2">BMW</option>
                            <option value="3">Citroen</option>
                            <option value="4">Dacia</option>
                            <option value="5">Fiat</option>
                            <option value="6">Golf</option>
                            <option value="7">Honda</option>
                            <option value="8">Isuzu</option>
                            <option value="9">Jaguar</option>
                            <option value="10">Kia</option>
                        </select>
                        <select class="terciary">
                            <option value="1">Audi</option>
                            <option value="2">BMW</option>
                            <option value="3">Citroen</option>
                            <option value="4">Dacia</option>
                            <option value="5">Fiat</option>
                            <option value="6">Golf</option>
                            <option value="7">Honda</option>
                            <option value="8">Isuzu</option>
                            <option value="9">Jaguar</option>
                            <option value="10">Kia</option>
                        </select>


                        {/* Button dropdown */}




                    </div>
                </div>
            </div>

            <div className="hr-section">
                <div className="content">
                    <h1>Horizontal ruler</h1>

                    <hr />

                </div>
            </div>

            <div className="input-section padding-large">
                <div className="content">
                    <h1>Inputs</h1>

                    <div className="">
                        <div className="inpputs">
                            <h3>Heading 03</h3>

                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia distinctio eveniet excepturi officia possimus cupiditate ratione nesciunt. Exercitationem reprehenderit pariatur quos vero animi quisquam, eligendi voluptatem alias vel autem neque molestias quaerat, consequuntur sequi eaque praesentium nisi quis voluptatibus quasi, itaque iure illo odio accusantium. Ex voluptates incidunt odio quos.
                            </p>

                            <div className="w-7">
                                <div className="input">
                                    <label htmlFor="123654" class="">Input
                                        <div className="tooltip">
                                            *
                                            <div className="tooltip-window top">
                                                Musí být vyplněno
                                            </div>

                                        </div>
                                    </label>
                                    <input type="text" name="Hello" id="123654" placeholder="Hovno v koši" />
                                    <label htmlFor="123654" class="sub" >Heslo musí obsahovat alespoň jednu číslici</label>
                                    <label htmlFor="123654" class="sub" >Heslo musí obsahovat alespoň sedmncáct trpaslíků</label>
                                </div>

                                <div className="padding"></div>



                                <div className="input ">
                                    {/* <label htmlFor="akfjsgafkjgh" class="">Input</label> */}
                                    <span className="icon">search</span>
                                    <span className="icon right">cookie</span>
                                    <input type="text" name="Hello" id="akfjsgafkjgh" placeholder="Hovno v koši" />
                                    <label htmlFor="akfjsgafkjgh" class="sub" >Heslo musí obsahovat alespoň jednu číslici</label>
                                    <label htmlFor="akfjsgafkjgh" class="sub" >Heslo musí obsahovat alespoň sedmncáct trpaslíků</label>
                                </div>
                                <div className="padding"></div>
                                <div className="input">
                                    <label htmlFor="akfjsgafkjgh" class="">Input</label>
                                    <span className="icon">search</span>
                                    <input type="text" name="Hello" id="akfjsgafkjgh" placeholder="Hovno v koši" />
                                    <label htmlFor="akfjsgafkjgh" class="sub danger" >Heslo musí obsahovat alespoň jednu číslici</label>
                                    <label htmlFor="akfjsgafkjgh" class="sub success" >Heslo musí obsahovat alespoň sedmncáct trpaslíků</label>
                                </div>

                                <div className="padding-large"></div>


                                <div className="input danger">
                                    <label htmlFor="eaihfagoivgoghai" class="">Input</label>
                                    <span className="icon">search</span>
                                    <input type="text" name="Hello" id="eaihfagoivgoghai" placeholder="Hovno v koši" />
                                    <label htmlFor="eaihfagoivgoghai" class="sub" >Heslo musí obsahovat alespoň jednu číslici</label>
                                    <label htmlFor="eaihfagoivgoghai" class="sub" >Heslo musí obsahovat alespoň sedmncáct trpaslíků</label>
                                </div>
                                <div className="padding"></div>
                                <div className="input success">
                                    <label htmlFor="oiwhodghvdohbi" class="">Input</label>
                                    <span className="icon">search</span>
                                    <input type="text" name="Hello" id="oiwhodghvdohbi" placeholder="Hovno v koši" />
                                    <label htmlFor="oiwhodghvdohbi" class="sub" >Heslo musí obsahovat alespoň jednu číslici</label>
                                    <label htmlFor="oiwhodghvdohbi" class="sub" >Heslo musí obsahovat alespoň sedmncáct trpaslíků</label>
                                </div>

                                <div className="padding"></div>

                                <div className="input">
                                    <label htmlFor="oihlgsdhgshiol" class="">Additional ingredientes</label>
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                    <label for="vehicle1"> Cheese</label>
                                    <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                                    <label for="vehicle2">Salami
                                        <div className="tooltip">
                                            *
                                            <div className="tooltip-window top">
                                                Pokud je na skladu
                                            </div>
                                        </div>

                                    </label>
                                    <input type="checkbox" id="wsfge68" name="vehicle2" disabled value="Car" />
                                    <label for="wsfge68">Mushrooms</label>
                                </div>

                                <br />

                                <div className="input ">
                                    <label htmlFor="oiwhodghvdohbi" class="">Velikost</label>
                                    <input type="radio" id="vehicle3" name="vehicle" value="Bike" />
                                    <label for="vehicle3"> Malá</label>
                                    <input type="radio" id="vehicle4" name="vehicle" value="Car" />
                                    <label for="vehicle4"> Velká</label>

                                    <label htmlFor="" className="sub">Vyberte, kterou chcete, stejně vám dovezeme tu malou</label>


                                </div>

                                <br />

                                <div className="input ">
                                    <label htmlFor="oiwhodghvdohbi" class="">Range</label>
                                    <input type="range" />
                                    <label htmlFor="" className="sub">Vyberte, kterou chcete, stejně vám dovezeme tu malou</label>


                                </div>




                            </div>

                            <div className="padding"></div>


                        </div>

                    </div>
                </div>
            </div>

            <div className="icons-section">
                <div className="content">
                    <h1>Icons</h1>

                    <h3>Normal icon button</h3>
                    <div className="row">
                        <button className="icon">search</button>
                        <p>Skakal pes pres</p>
                        <button className="icon">mail</button>
                    </div>

                    <h3>In text</h3>
                    <p>
                        Lorem ipsum <span className="icon">cookie</span> dolor sit amet consectetur adipisicing elit. Ex sint veniam dolore enim rerum ab qui recusandae deserunt? Sunt molestias porro tenetur vitae ex placeat non aliquid corporis blanditiis iste.
                    </p>

                    {/* Není v .row protože změna výšky */}
                    <button className="icon small">mail</button>
                    <button className="icon ">mail</button>
                    <button className="icon large">mail</button>

                    <h3>Tool icon button</h3>
                    <div className="row">
                        <button className="icon tool">search</button>
                        <button className="icon tool">mail</button>
                    </div>


                </div>
            </div>

            <div className="tabs-section">
                <div className="content">
                    <h1>Tabs</h1>
                    <div className="tabs" style={{ "flex-wrap": "wrap" }} >

                        <h5 class={"tab " + (activeTab() == 0 ? "active" : " ")} onclick={() => setActiveTab(0)}>Jan</h5>
                        <h5 class={"tab " + (activeTab() == 1 ? "active" : " ")} onclick={() => setActiveTab(1)}>Ámos</h5>
                        <h5 class={"tab " + (activeTab() == 2 ? "active" : " ")} onclick={() => setActiveTab(2)}>Komenský</h5>




                    </div>
                </div>
            </div>

            <div className="tiles-section">
                <div className="content">
                    <h1>Tiles</h1>

                    <div className="center flex static" >
                        <div className="tile primary w-500px m-w-12">
                            <h3>Primary tile</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla omnis placeat totam impedit animi, natus officia quibusdam iure dolore, voluptates earum iste, id blanditiis praesentium quia suscipit voluptatum corrupti pariatur.</p>
                        </div>
                        <div className="tile secondary w-5">
                            <h3>Sec tile</h3>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, qui sunt eum aperiam ducimus explicabo molestias quod voluptatum eveniet veniam rerum, facilis quas incidunt dolorum ullam harum distinctio consequuntur ab.
                            </p>
                        </div>
                        <div className="tile terciary w-5 ">
                            <h3>Ter tile</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus odio beatae explicabo aliquam autem deserunt itaque voluptatum? Commodi eius dignissimos id corrupti. Rem reprehenderit laudantium quia cum magnam eveniet perferendis.</p>
                        </div>
                    </div>


                </div>
            </div>

            <div className="toolbar-section">
                <div className="content">
                    <h1>Toolbar</h1>

                    <div className="toolbar">
                        <div className="left">
                            <A href="#">Ahoj</A>
                            <A href="#"><p class="g-icon">search</p></A>
                            <A href="#"><p class="g-icon">cookie</p></A>
                            <A href="#"><p class="g-icon">mail </p></A>



                        </div>
                        <div className="middle">
                            <input type="text" class="editable" placeholder="FileName" name="ahoj" id="ahoj" />

                        </div>
                        <div className="right">

                            <A href="#">Ahoj</A>
                            <A href="#"><p class="g-icon">search</p></A>
                            <A href="#"><p class="g-icon">cookie</p></A>
                            <A href="#"><p class="g-icon">mail </p></A>


                        </div>
                    </div>

                </div>
            </div>

            <div className="tooltip-section">
                <div className="content">
                    <h1>Tooltip</h1>

                    <div className="tooltip">
                        <button>Default</button>
                        <div className="tooltip-window ">
                            <p>Cookie</p>
                        </div>
                    </div>

                    <div className="tooltip">
                        <button>Left</button>
                        <div className="tooltip-window left">
                            <p>Cookie</p>
                        </div>
                    </div>

                    <div className="tooltip">
                        <button>Right</button>
                        <div className="tooltip-window right">
                            <p>Cookie</p>
                        </div>
                    </div>

                    <div className="tooltip">
                        <button>Bottom</button>
                        <div className="tooltip-window bottom">
                            <p>Cookie</p>
                        </div>
                    </div>

                    <div className="tooltip">
                        {/* <button>Top</button> */}
                        <span className="icon">search</span>
                        <div className="tooltip-window top">
                            <p>Cookie</p>
                        </div>
                    </div>

                </div>
            </div>


            <div className="tables-section">
                <div className="content">
                    <h1>Tables</h1>

                    <table class="striped centered ">
                        <thead>
                            <tr>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Bořek</td>
                                <td>Stavitel</td>
                                <td>24</td>
                            </tr>
                            <tr>
                                <td>Julča</td>
                                <td>Míchačka</td>
                                <td>25</td>
                            </tr>
                            <tr>
                                <td>Štěpán</td>
                                <td>Štěpán</td>
                                <td>18</td>
                            </tr>
                        </tbody>
                    </table>

                    <table class="secondary hover centered striped w-5">
                        <thead>
                            <tr>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Age</th>
                                <th>Action</th>
                                <th>Icon</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Bořek</td>
                                <td>Stavitel</td>
                                <td>24</td>
                                <td><button class="btn primary">Click</button></td>
                                <td><p class="g-icon large">search</p></td>
                            </tr>
                            <tr>
                                <td>Julča</td>
                                <td>Míchačka</td>
                                <td>25</td>
                                <td><button class="btn primary">Click</button></td>
                                <td><p class="g-icon large"> phone </p> </td>
                            </tr>
                            <tr>
                                <td>Štěpán</td>
                                <td>Štěpán</td>
                                <td>18</td>
                                <td><button class="btn primary">Click</button></td>
                                <td><p class="g-icon large"> mail </p> </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>

            <div className="text-section">
                <div className="content">
                    <h1 class="responsive">HelloWorld</h1>
                    <h2 class="responsive">HelloWorld</h2>
                    <h3 class="responsive">HelloWorld</h3>
                    <p className="responsive">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum illo commodi dignissimos dolorum numquam explicabo ipsa quaerat debitis harum doloribus, quisquam saepe ex eligendi temporibus omnis autem est, laborum quam.</p>

                    <h1>HelloWorld</h1>
                    <h2>HelloWorld</h2>
                    <h3>HelloWorld</h3>
                    <h4>HelloWorld</h4>
                    <h5>HelloWorld</h5>
                    <h6>HelloWorld</h6>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi consectetur reiciendis aperiam voluptates quas eius suscipit sunt veritatis, asperiores laboriosam aut libero quia ipsa aliquam cumque distinctio iure reprehenderit.
                    </p>
                </div>
            </div>


            <div className="leader-section">
                <div className="content">
                    <h1>Leaders</h1>

                    <p class="row">Default <span className="leader"></span> span.leader</p>
                    <p class="row">Dashed <span className="leader dashed"></span> span.leader.dashed</p>
                    <p class="row">Solid <span className="leader solid"></span> span.leader.solid</p>

                </div>
            </div>

            <div className="loading-anim-section ">
                <div className="content ">

                    <h1>Loading animation</h1>

                    <h1 className="loading">
                        AHojjjj
                    </h1>

                    <p >
                        <span className="loading">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dicta id dignissimos, neque earum dolores facilis a adipisci, molestias deserunt aliquid animi asperiores fugiat! Itaque vero sit officiis dolorum amet!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dicta id dignissimos, neque earum dolores facilis a adipisci, molestias deserunt aliquid animi asperiores fugiat! Itaque vero sit officiis dolorum amet!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dicta id dignissimos, neque earum dolores facilis a adipisci, molestias deserunt aliquid animi asperiores fugiat! Itaque vero sit officiis dolorum amet!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat tempora blanditiis error optio quisquam cum fugit fugiat deserunt omnis ipsam fuga vero, alias ex aperiam ut veritatis, dignissimos sunt rem?
                        </span>
                    </p>

                </div>
            </div>

            <div className="modals-section">
                <div className="content">
                    <h1>Modals</h1>

                    <button class="primary" onclick={() => setOpenModal2(true)} >ModalWrap</button>

                    <ModalWrap opened={openModal2} setOpened={setOpenModal2} >
                        <h3>Titleeeee</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptatibus nulla doloribus, delectus tenetur veritatis libero enim facilis dolor cumque assumenda praesentium ullam reiciendis, ea ad fuga, animi at sed.</p>
                        <div className="row to-right">
                            <button className="secondary" onclick={() => setOpenModal2(false)}>
                                fwohh
                            </button>
                            <button className="primary">
                                AGJKB
                            </button>
                        </div>
                    </ModalWrap>




                </div>
            </div>

            <div className="offcanvas-sections">
                <div className="content">

                    <h1>Offcanvas</h1>
                    <button onclick={() => setOffCanL(true)}>From scrollLeft</button>

                    <Offcanvas opened={offCanL} setOpened={setOffCanL} >
                        <h1>Offcanvas</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed suscipit libero quibusdam consequatur pariatur necessitatibus sapiente cum dignissimos dicta reprehenderit!</p>
                    </Offcanvas>

                    <button onclick={() => setOffCanR(true)}>From scrollLeft</button>
                    <Offcanvas opened={offCanR} setOpened={setOffCanR} direction={"right"} >
                        <h1>Offcanvas</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed suscipit libero quibusdam consequatur pariatur necessitatibus sapiente cum dignissimos dicta reprehenderit!</p>
                    </Offcanvas>

                </div>
            </div>

            <div className="idk">
                <div className="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique molestias, provident quas sunt possimus quod soluta totam. Et quisquam tempora soluta voluptatem! Esse, cumque dicta nesciunt at sint ex provident! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum optio et quaerat nemo nisi iure amet ipsa debitis accusamus ipsam molestiae, perspiciatis sunt, ducimus repellendus corporis? Sit et asperiores tempore.</p>
                </div>
            </div>
        </div>

    </>);
}

export default ComponentsPage;