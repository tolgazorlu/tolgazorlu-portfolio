import React from 'react';

function Parallax() {
    return (
        <div>
            <section id="parallax" className="parallax">
                <img id="background" alt="background" className="image" src={require("../assets/background.png")} />
                <img id="stars" alt="stars" className="image" src={require("../assets/stars.png")} />
                <img id="neutron" alt="neutron" className="image" src={require("../assets/neutron.png")} />
                <img id="ground" alt="ground" className="image" src={require("../assets/ground.png")} />
                <img id="astronaut" alt="astronaut" className="image" src={require("../assets/astronaut.png")} />
                <div id="welcome" className="welcome">
                    <span id="created-title" className="created-title">This Website created with</span><span id="tech-title" className="tech-title">Html, Css, Js, React and Tailwind</span>
                </div>
            </section>
        </div>
    )
}

window.addEventListener('scroll', function(){  
    let stars = document.getElementById('stars');
    let ground = document.getElementById('ground');
    let astronaut = document.getElementById('astronaut');
    let neutron = document.getElementById('neutron');
    let createdTitle = document.getElementById('created-title');
    let techTitle = document.getElementById('tech-title');

      var scrollPos = window.scrollY;
      console.log("Scroll position: " + scrollPos);
      if(scrollPos < 200){

        stars.style.top = 10 + scrollPos * -0.01 + '%';
        ground.style.top = 10 + scrollPos * -0.2 + '%';
        astronaut.style.top = 10 + scrollPos * -0.2 + '%';
        neutron.style.top = 10 + scrollPos * -0.15 + '%';
  
      }
      if(scrollPos < 250){
        createdTitle.style.opacity = scrollPos * 0.01;
      }
      else{
       createdTitle.style.opacity = 0;
      }

      if(20 < scrollPos && scrollPos < 300){
        techTitle.style.opacity = -1 + scrollPos * 0.02;
      }
      else{
        
        techTitle.style.opacity = 0;
      }

    })

export default Parallax;