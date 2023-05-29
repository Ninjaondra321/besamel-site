import { createSignal, mergeProps, Match, onMount } from "solid-js";


function Offcanvas(props) {
    // Merge props
    const merged = mergeProps({
        closeOnClickAway: true,
        opened: false,
        direction: "left",
    }, props);



    function handleClose() {
        if (merged.closeOnClickAway) {
            merged.setOpened(false);
        }
    }

    return (<>
        {merged.opened() &&
            <div class="offcanvas-parent" >
                <button className="" onclick={handleClose}  >
                </button>
                <div className={"offcanvas " + merged.direction}>
                    {props.children}
                </div>
            </div>
        }
    </>
    );
}

export default Offcanvas;