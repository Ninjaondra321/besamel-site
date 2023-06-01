import { createSignal, mergeProps, Match, onMount } from "solid-js";



export function CarouselWrap({ maximised = false, children }) {
    let carouselRef;
    function scrollLeft() {
        carouselRef.scrollLeft = carouselRef.scrollLeft - carouselRef.clientWidth + 50;
    }

    function scrollRight() {
        carouselRef.scrollLeft = carouselRef.scrollLeft + carouselRef.clientWidth - 50;
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
        <div className={"carousel " + (maximised ? " maximised" : "")} ref={carouselRef} onmousedown={mouseDownHandler}>
            {/* {props.children} */}
            {children}
        </div>
    </div>);
}


export default CarouselWrap;