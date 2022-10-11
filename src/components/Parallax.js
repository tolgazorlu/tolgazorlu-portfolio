import React from 'react';

function Parallax() {
    return (
        <div>
            <section id="parallax" class="parallax">
                <img id="background" className="image" src={require("../assets/background.png")} />
                <img id="stars" className="image" src={require("../assets/stars.png")} />
                <img id="neutron" className="image" src={require("../assets/neutron.png")} />
                <img id="ground" className="image" src={require("../assets/ground.png")} />
                <img id="astronaut" className="image" src={require("../assets/astronaut.png")} />
            </section>
        </div>
    )
}



export default Parallax;