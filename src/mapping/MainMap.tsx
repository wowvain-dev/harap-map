import React from 'react'
import ImageMapper from 'react-img-mapper';
import jsonData from './areas.json'
import "./MainMap.css"


console.log(jsonData)
const loadData = JSON.parse(JSON.stringify(jsonData));
console.log(loadData)

const MainMap = () => {
    const IMG = "http://www.bjbv.ro/concurs/harta.jpg";
    const MAP = {
        name: 'main-map',
        areas: jsonData
    };
    return (
        <div className="container-fluid mainMap">
            <ImageMapper src={IMG} map={MAP}/>
        </div>
    )
}

export default MainMap;
