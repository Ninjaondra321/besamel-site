
import { useLocation } from "@solidjs/router";
import { useNavigate } from "@solidjs/router";


function Redirecting() {

    const location = useLocation();
    const navigate = useNavigate();


    console.log(location)

    let s = location.search;
    if (location.search.startsWith("?redirect=")) {
        s = s.substring(10);
        console.log(s);

        const urlWithoutRedirect = s + location.hash;
        window.history.replaceState(null, "", urlWithoutRedirect); // Clear the redirect parameter from the URL


        navigate(s); // Redirect to the specified URL


    } else {
        console.log("no redirect");
    }



    return (<>
    </>);
}

export default Redirecting;