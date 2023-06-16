
function updateMeta(props) {
    console.warn(props)

    if ("title" in props) {
        document.title = props.title;
        // TODO: Try if works
        delete props.title;
    }

    var meta = document.getElementsByTagName("meta");
    for (var i = 0; i < meta.length; i++) {
        if (meta[i].name.toLowerCase() in props) {
            meta[i].content = props[meta[i].name.toLowerCase()];

            delete props[meta[i].name.toLowerCase()];
        }
    }


}

export default updateMeta;