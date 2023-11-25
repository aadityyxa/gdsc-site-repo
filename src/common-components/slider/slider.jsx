import { useState, useEffect } from 'react';
import Icon from '@mdi/react';
import { mdiChevronRight, mdiChevronLeft } from '@mdi/js';

import sliderImg1 from '../../assets/homepage-images/slide-img-1.svg'
import sliderImg2 from '../../assets/homepage-images/slide-img-2.svg'
import sliderImg3 from '../../assets/homepage-images/slide-img-3.svg'
import './slider.css';

export default function Slider() {

    let [translateValue, setTranslateValue] = useState(0); 
    let [currentSlide, setCurrentSlide] = useState(1); 
    
    // console.log(translateValue);

    
    function expandCentralImage() {
        
        const centralImage = document.querySelector(`.img${currentSlide}`); 

        centralImage.classList.add('slide-image-expanded')
    }

    useEffect(() => {
        expandCentralImage(); 
    })

    function slideToTheLeft() {

        if(translateValue < 0) {
            const images = document.querySelector('.images'); 
            const newTranslateValue = translateValue + 136; 
            images.style.transform = `translateX(${newTranslateValue}%)`; 
            setTranslateValue(newTranslateValue); 
            setCurrentSlide(currentSlide - 1); 
            console.log('current slide', currentSlide)
            const nextImage = document.querySelector(`.img${currentSlide}`);
            nextImage.classList.remove('slide-image-expanded');

        }

    }

    function slideToTheRight() {
            if(translateValue > -272) {
                const images = document.querySelector('.images'); 
                const newTranslateValue = translateValue - 136; 
                images.style.transform = `translateX(${newTranslateValue}%)`;  
                setTranslateValue(newTranslateValue)
                setCurrentSlide(currentSlide + 1)
                const previousImage = document.querySelector(`.img${currentSlide}`);
                previousImage.classList.remove('slide-image-expanded');
 
            }
    }


    return(
        <div className="image-slider-wrapper">
                <div className="image-container fade-right" >
                    <div className="center-image">
                        <div className="images">

                            <div className='slider-image img1'>
                                <img src={sliderImg1}/>
                                <span>Events</span>
                            </div>
                            <div className='slider-image img2'>
                                <img src={sliderImg2}/>
                                <span>View Projects</span>
                            </div>
                            <div className='slider-image img3'>
                                <img src={sliderImg3}/>
                                <span>Listen To Podcasts</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slide-buttons">
                    <button className="slide-button" onClick={slideToTheLeft}>
                        <Icon path={mdiChevronLeft} size={1} ></Icon>
                    </button>
                    <button className="slide-button" onClick={slideToTheRight}>
                        <Icon path={mdiChevronRight} size={1}></Icon>
                    </button>
                </div>
                
            </div>
    )
}