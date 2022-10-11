import React from 'react';

function Parallax() {
    return (
        <div>
            <section id="parallax" className="parallax">
                <img id="background" className="image" src={require("../assets/background.png")} />
                <img id="stars" className="image" src={require("../assets/stars.png")} />
                <img id="neutron" className="image" src={require("../assets/neutron.png")} />
                <img id="ground" className="image" src={require("../assets/ground.png")} />
                <img id="astronaut" className="image" src={require("../assets/astronaut.png")} />
            </section>
        </div>
    )
}

window.addEventListener('scroll', function(){  
    let stars = document.getElementById('stars');
    let ground = document.getElementById('ground');
    let astronaut = document.getElementById('astronaut');
    let neutron = document.getElementById('neutron');
    
      var scrollPos = window.scrollY;
      stars.style.top = scrollPos * -0.04 + '%';
      ground.style.top = scrollPos * -0.2 + '%';
      astronaut.style.top = scrollPos * -0.2 + '%';
      neutron.style.top = scrollPos * -0.15 + '%';
    })
    

export default Parallax;