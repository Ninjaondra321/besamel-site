import { createSignal, mergeProps, Match, onMount } from "solid-js";


function ModalWrap(props) {
    // Merge props
    const merged = mergeProps({
        closeOnClickAway: true,
        opened: false,
    }, props);



    function handleClose() {
        if (merged.closeOnClickAway) {
            merged.setOpened(false);
        }
    }

    return (<>

        {merged.opened() &&
            <div class="modal-parent" >
                <button className="modal-background invisible" onclick={handleClose}  >
                </button>
                <div className="modal">
                    {props.children}
                </div>
            </div>
        }






    </>
    );
}

export default ModalWrap;