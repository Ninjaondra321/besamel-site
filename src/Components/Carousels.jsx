import Img_20 from "../Imgs/Img_0.png";
import Img_1 from "../Imgs/Img_1.png";
import Img_2 from "../Imgs/Img_2.png";
import Img_3 from "../Imgs/Img_3.png";
import Img_4 from "../Imgs/Img_4.png";
import Img_5 from "../Imgs/Img_5.png";
import Img_6 from "../Imgs/Img_6.png";
import Img_7 from "../Imgs/Img_7.png";
import Img_8 from "../Imgs/Img_8.png";
import Img_9 from "../Imgs/Img_9.png";
import Img_10 from "../Imgs/Img_10.png";
import Img_11 from "../Imgs/Img_11.png";
import Img_12 from "../Imgs/Img_12.png";
import Img_13 from "../Imgs/Img_13.png";
import Img_14 from "../Imgs/Img_14.png";
import Img_15 from "../Imgs/Img_15.png";
import Img_16 from "../Imgs/Img_16.png";


import { createSignal, mergeProps, Match, onMount } from "solid-js";


export function ImgCarousel(props) {

    let carouselRef;

    const merged = mergeProps({
        imgs: [
            { "img": Img_20, "alt": "Img_20" },
            { "img": Img_1, "alt": "Img_1" },
            { "img": Img_2, "alt": "Img_2" },
            { "img": Img_3, "alt": "Img_3" },
            { "img": Img_4, "alt": "Img_4" },
            { "img": Img_5, "alt": "Img_5" },
        ]
    }, props);

    function scrollLeft() {
        carouselRef.scrollLeft = carouselRef.scrollLeft - 200;
    }

    function scrollRight() {
        carouselRef.scrollLeft = carouselRef.scrollLeft + 200;
    }

    let pos = { top: 0, left: 0, x: 0, y: 0 };

    function mouseDownHandler(e) {
        pos = {
            left: carouselRef.scrollLeft,
            x: e.clientX
        }

        // carouselRef.style.userSelect = 'none';


        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    }

    const mouseMoveHandler = function (e) {
        // How far the mouse has been moved
        const dx = e.clientX - pos.x;
        carouselRef.scrollLeft = pos.left - dx;
    };

    const mouseUpHandler = function () {
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);

        carouselRef.style.removeProperty('user-select');
    };





    return (<div style="position:relative; height:100%; user-select:none" class="carousel-parent ">
        <div className="left-control m-hidden" onClick={scrollLeft}>
            <button class="carousel-control-l"  >chevron_left</button>
        </div>
        <div className="right-control m-hidden" onClick={scrollRight}>
            <button class="carousel-control-r"  >chevron_right</button>
        </div>

        <div className="carousel fade-edge " ref={carouselRef} onmousedown={mouseDownHandler} >
            {merged.imgs.map((img, index) =>
                <img src={img.img} alt={img.alt} />
            )}
        </div>

    </div>);
}



export function CarouselWrap(props) {
    let carouselRef;
    function scrollLeft() {
        carouselRef.scrollLeft = carouselRef.scrollLeft - 200;
    }

    function scrollRight() {
        carouselRef.scrollLeft = carouselRef.scrollLeft + 200;
    }

    let pos = { top: 0, left: 0, x: 0, y: 0 };

    function mouseDownHandler(e) {
        pos = {
            left: carouselRef.scrollLeft,
            x: e.clientX
        }

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    }

    const mouseMoveHandler = function (e) {
        // How far the mouse has been moved
        const dx = e.clientX - pos.x;
        carouselRef.scrollLeft = pos.left - dx;
    };

    const mouseUpHandler = function () {
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);

        carouselRef.style.removeProperty('user-select');
    };



    return (<div style="position:relative; height:100% " class="carousel-parent">
        <style>
            {`
            .carousel-parent * {
                user-select: none;
            }
            `}
        </style>
        <div className="left-control m-hidden" onClick={scrollLeft}>
            <button class="carousel-control-l"  >chevron_left</button>
        </div>
        <div className="right-control m-hidden" onClick={scrollRight}>
            <button class="carousel-control-r"  >chevron_right</button>
        </div>
        <div className="carousel" ref={carouselRef} onmousedown={mouseDownHandler}>
            {props.children}
        </div>
    </div>);
}
