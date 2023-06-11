
import { useLocation } from "@solidjs/router";
import { useNavigate } from "@solidjs/router";


function Redirecting() {
    // ! MUSÍ BÝT ZVLAŠTNÍ COMPONENT - ABY TENTO KÓD BYL UVNITŘ ROUTERU
    const location = useLocation();
    const navigate = useNavigate();

    let s = location.search;
    if (location.search.startsWith("?redirect=")) {
        s = s.substring(10);

        const urlWithoutRedirect = s + location.hash;
        window.history.replaceState(null, "", urlWithoutRedirect); // Clear the redirect parameter from the URL
        navigate(s); // Redirect to the specified URL

    }
    // if (!supprotedLanguages.includes(location.pathname.substring(1, 3))) {
    //     console.log(!supprotedLanguages.includes(location.pathname.substring(1, 3)));

    //     const newLocation = "/" + supprotedLanguages[0] + location.pathname + location.search + location.hash;
    //     console.log(newLocation);

    //     window.history.replaceState(null, "", newLocation);
    //     navigate(newLocation);
    // }

    return (<>
    </>);
}

export default Redirecting;