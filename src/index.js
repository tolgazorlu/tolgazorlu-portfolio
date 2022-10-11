import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import $ from 'jquery'

$(window).scroll(function() {
  var scrollPos = $(this).scrollTop();
  if(scrollPos < 200){
    console.log(scrollPos)
    $("#stars").css({
      'top': scrollPos * -0.04 + '%'
    });
    $("#ground").css({
      'top': scrollPos * -0.2 + '%'
    })
    $("#astronaut").css({
      'top': scrollPos * -0.2 + '%'
    })
    $("#neutron").css({
      'top': scrollPos * -0.15 + '%'
    })
  }
});

/*

let stars = document.getElementById('stars');
let ground = document.getElementById('ground');
let astronaut = document.getElementById('astronaut');
let neutron = document.getElementById('neutron');

window.addEventListener('scroll', function(){
  var scrollPos = window.scrollY;
  console.log(scrollPos);
  stars.style.top = scrollPos * -0.04 + '%';
  ground.style.top = scrollPos * -0.2 + '%'
  astronaut.style.top = scrollPos * -0.2 + '%'
  neutron.style.top = scrollPos * -0.15 + '%';
})*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

