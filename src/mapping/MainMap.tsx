import React, { useState } from 'react'
import ImageMapper from 'react-img-mapper';
import { CustomModal } from "../components/modal";
import jsonData from './areas.json'
import "./MainMap.css"
import { GlobalStyles } from "../globalStyles";

const MainMap = () => {
    let showModal: boolean;
    let setShowModal: any;
    [ showModal, setShowModal ] = useState<boolean>(false);

    const openModal = () => {
        setShowModal((prev:any) => !prev);
    }

    const IMG = "https://github.com/wowvain-dev/harap-map/blob/master/assets/harta_harap_alb9(1).png?raw=true"
    const MAP = {
        name: 'main-map',
        areas: jsonData
    };

    interface MapAreas {
        id?: number;
        shape: string;
        description?: string;
        coords: number[];
        active?: boolean;
        disabled?: boolean;
        href?: string;
        fillColor?: string;
        strokeColor?: string;
        lineWidth?: number;
        preFillColor?: string;
    }
    interface CustomArea extends MapAreas {
        scaledCoords: number[];
        center?: [number, number];
    }

    const [ currentArea, setCurrentArea ] = useState<CustomArea>( {coords: [], scaledCoords: [], shape: "", "description": "Harta"} );

    return (
        <div style={{width: '75%', height: '60%'}} className="container-fluid mainMap mt-5">
            <CustomModal showModal={showModal} setShowModal={setShowModal} currentArea={currentArea}/>
            { !showModal ? <ImageMapper src={IMG} map={MAP} onClick={(area) => {
                setCurrentArea(area);
                openModal();
            }} /> : <div style={{opacity: 0}}><ImageMapper src={IMG} map={MAP} onClick={(area) => {
                setCurrentArea(area);
                openModal();
            }} /></div>}
            <GlobalStyles />
        </div>
    )
}

export default MainMap;
