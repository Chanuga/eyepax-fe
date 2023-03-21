import React, { useState } from 'react';
import './Carousel.css'

const Carousel = ({ imgArray }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    {/* Next button */}
    const next = () => {
        setCurrentIndex((currentIndex + 1) % imgArray.length);
    };

    {/* Previous button */}
    const prev = () => {
        setCurrentIndex((currentIndex - 1 + imgArray.length) % imgArray.length);
    };

    return (
        <>
            <div className='slider-container'>
                {imgArray.map((photo) => (
                    <div
                        key={photo.id}
                        className={
                            imgArray[currentIndex].id === photo.id ? 'fade' : 'slide fade'
                        }
                    >
                        <img src={photo.image} alt={photo.title} className='photo' />
                        <div className='caption'>{photo.title}</div>
                    </div>
                ))}

                {/* Previous button */}
                <button onClick={() => prev()} className='prev'/>

                {/* Next button */}
                <button onClick={() => next()} className='next'/>
            </div>

            <div className='dots'>
                {imgArray.map((photo) => (
                    <span
                        key={photo.id}
                        className={
                            imgArray[currentIndex].id === photo.id ? 'dot active' : 'dot'
                        }
                        onClick={() => setCurrentIndex(imgArray.indexOf(photo))}
                    ></span>
                ))}
            </div>

        </>
    )
}

export default Carousel