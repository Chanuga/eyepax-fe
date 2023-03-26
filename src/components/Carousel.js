import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./Carousel.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Carousel({ sliders, infinte }) {
    const [currImg, setCurrImg] = useState(0);
    const [imgArray, setImgArray] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3600/api/carousel?slides=${sliders}`)
            .then(function (response) {
                // handle success
                console.log("response.data", response?.data);
                setImgArray(response?.data)
            })
            .catch(function (error) {
                // handle error 
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }, []);

    useEffect(() => {

        if (infinte) {
            setInterval(() => {
                currImg < imgArray.length - 1 ? setCurrImg(currImg + 1) : setCurrImg(0)
            }, 10000);
        }

    }, [infinte])

    return (
        <div className="carousel">
            <div
                className="carouselInner"
                style={{ backgroundImage: `url(${imgArray[currImg]?.image})` }}
            >
                {imgArray.length >= 2 ?
                    <div
                        className="left"
                        onClick={() => {
                            currImg > 0 && setCurrImg(currImg - 1);
                        }}
                    >
                        <ArrowBackIosIcon style={{ fontSize: 30 }} />
                    </div> : <></>
                }
                <div className="center">
                    <h1>{imgArray[currImg]?.title}</h1>
                    <p>{imgArray[currImg]?.subTitle}</p>
                </div>
                {imgArray.length >= 2 ?
                    <div
                        className="right"
                        onClick={() => {
                            currImg < imgArray.length - 1 && setCurrImg(currImg + 1);
                        }}
                    >
                        <ArrowForwardIosIcon style={{ fontSize: 30 }} />
                    </div> : <></>

                }
            </div>
        </div>
    );
}

export default Carousel;
