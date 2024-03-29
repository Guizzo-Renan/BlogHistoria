import React, { useRef }  from "react";
import { useParams } from "react-router-dom";
import './main.css'
import Carrosel from '../components/carrosel/carrosel';
//import aboutImg from './img/about.jpg';

function About ()  {
  //  const upToTopRef = useRef(null);

 //   const scrollToTop = () => {
 //     if (upToTopRef.current) {
  //      upToTopRef.current.scrollIntoView({ behavior: 'smooth' });
  //    }
 //   };
    const { id } = useParams();
   // window.addEventListener("scroll", function () {
    //    const upToTop = document.querySelector('a.bottom__to__top');
      //  upToTop.classList.toggle("active", window.scrollY > 0)
   // });
    return (
        
            <div className="about component__space" id="About">
                <div className="container_principal">
                    <div className="row">
                        <div className="col__2">
                            <img src= 'https://img.freepik.com/fotos-premium/melhor-foto-aleatoria_865967-77712.jpg' alt='' className='about__img' />
                        </div>
                        <div className="col__2">
                            <h1 className="about__heading">About Me</h1>
                            <div className="about__meta">
                            <p className="about__text p__color">
              For instance, whenever I go back to the guest house during
              the morning to copy out the contract, these gentlemen are always
              still sitting there eating their breakfasts. I ought to just try 
              that with my boss; I'd get kicked out on the spot.
              For instance, whenever I go back to the guest house during
              the morning to copy out the contract, these gentlemen are always
              still sitting there eating their breakfasts. I ought to just try 
              that with my boss; I'd get kicked out on the spot.
              For instance, whenever I go back to the guest house during
              the morning to copy out the contract, these gentlemen are always
              still sitting there eating their breakfasts. I ought to just try 
              that with my boss; I'd get kicked out on the spot.
              For instance, whenever I go back to the guest house during
              the morning to copy out the contract, these gentlemen are always
              still sitting there eating their breakfasts. I ought to just try 
              that with my boss; I'd get kicked out on the spot.
              For instance, whenever I go back to the guest house during
              the morning to copy out the contract, these gentlemen are always
              still sitting there eating their breakfasts. I ought to just try 
              that with my boss; I'd get kicked out on the spot.
              For instance, whenever I go back to the guest house during
              the morning to copy out the contract, these gentlemen are always
              still sitting there eating their breakfasts. I ought to just try 
              that with my boss; I'd get kicked out on the spot.
              </p>
              <p className="about__text p__color">
              But who knows, maybe that would be the best thing for me. He'd fall 
              right off his desk! And it's a funny sort of business to be sitting up 
              there at your desk, 
              </p>
              <p className="about__text p__color">
              talking down at your subordinates. I ought to just try 
              that witht my boss; I'd get kicked out on the spot. 
              But who knows, maybe that would be the best thing for me. 
              He'd fall right off his desk! And it's a funny sort of 
              business to be sitting up there at your desk, talking down at your subordinates.
              </p>
                 <div className="about__button d__flex align__items__center">
                    <a href="#">
                        <button className="about btn pointer">Download CV</button>
                    </a>
                    <a href="#">
                        <button className="about btn pointer">Download CV</button>
                    </a>
                 </div>
                            </div>
                        </div>
                    </div>
                    <div className="up__to__top__btn">
                        <a href="#" className="bottom__to__top">
                        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
                        </a>
                    </div>
                </div>


<Carrosel/>


            </div>
    )
}

export default About;
