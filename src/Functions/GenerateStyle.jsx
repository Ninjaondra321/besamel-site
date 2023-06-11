
function GenerateStyle() {

    var w_i = "" // 12 columns 
    var w_i_px = "" // 12 columns
    var w_i_vw = "" // 12 columns

    var m_w_i = "" // 12 columns
    var m_w_i_px = "" // 12 columns
    var m_w_i_vw = "" // 12 columns

    var h_i_vh = ""
    var h_i_px = ""

    var m_h_i_vh = ""
    var m_h_i_px = ""

    var m_bg_positions = ""

    var padding_size = ""
    var m_padding_size = ""

    var margin_size = ""
    var m_margin_size = ""

    var typography = ""
    var typography_mobile = ""

    var pc = ""

    // TODO! add vertical and horizontal padding ?and margin?

    // TWELVES SYSTEM
    for (let i = 1; i <= 12; i++) {
        let twelves_system = 100 / 12 * i

        w_i += `.w-${i}{width: ${twelves_system}%;}`
        m_w_i += `.m-w-${i}{width: ${twelves_system}%;}`

        pc += `.pc-w-${i}{width: ${twelves_system}%;}`
    }

    // PIXELS SYSTEM
    for (let i = 1; i <= 25; i++) {
        let pixels = i * 50

        w_i_px += `.w-${pixels}px{width: ${pixels}px;}`

        // Ať nemám tolik proměnných
        w_i_px += `.max-w-${pixels}px{max-width: ${pixels}px;}`


        m_w_i_px += `.m-w-${pixels}px{width: ${pixels}px;}`

        h_i_px += `.h-${pixels}px{height: ${pixels}px;}`

        h_i_px += `.min-h-${pixels}px{min-height: ${pixels}px;}`
        h_i_px += `.min-w-${pixels}px{min-width: ${pixels}px;}`


        m_h_i_px += `.m-h-${pixels}px{height: ${pixels}px;}`
    }

    // SIZES
    let sizes = {
        "small": "7px",
        "medium": "15px",
        "large": "30px",
    }



    for (let size in sizes) {
        padding_size += `.padding-${size}{padding: ${sizes[size]};}`
        m_padding_size += `.m-padding-${size}{padding: ${sizes[size]};}`

        margin_size += `.margin-${size}{margin: ${sizes[size]};}`
        m_margin_size += `.m-margin-${size}{margin: ${sizes[size]};}`


    }



    console.log(w_i)
    console.log(m_w_i)

    return (
        <style>
            {w_i}
            {w_i_px}
            {w_i_vw}

            {h_i_px}
            {h_i_vh}

            {padding_size}
            {margin_size}


            {`
            @media only screen and (max-width: 768px) {
                    ${m_w_i}
                    ${m_w_i_px}
                    ${m_h_i_px}
                    ${m_h_i_vh}
                    ${m_padding_size}
                    ${m_margin_size}
            }`}
            {`
            @media only screen and (min-width: 768px) {
                ${pc}
                    
            }`}


        </style>
    )

}

export default GenerateStyle

