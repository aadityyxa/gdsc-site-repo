import { useState } from 'react';
import Icon from '@mdi/react';
import { mdiChevronRight, mdiChevronLeft } from '@mdi/js';
import projectImage from '../../../assets/events-images/Rectangle 50.png'; 

export default function ProjectSlider() {

    let [translateValue, setTranslateValue] = useState(0); 
    let [currentSlide, setCurrentSlide] = useState(1); 

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
        <div className="project-image-slider-wrapper">
                <div className="image-container fade-right" >
                    <div className="center-image">
                        <div className="images">

                            <div className='join-slider-image img1'>
                                <img src={projectImage}/>
                            </div>
                            <div className='join-slider-image img2'>
                                <img src={projectImage}/>
                            </div>
                            <div className='join-slider-image img3'>
                                <img src={projectImage}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project-slide-buttons">
                    <button className="project-slide-button" onClick={slideToTheLeft}>
                        <Icon path={mdiChevronLeft} size={1} ></Icon>
                    </button>
                    <button className="project-slide-button" onClick={slideToTheRight}>
                        <Icon path={mdiChevronRight} size={1}></Icon>
                    </button>
                </div>
                
            </div>
    )
}