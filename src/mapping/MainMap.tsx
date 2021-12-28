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

    const IMG = "http://www.bjbv.ro/concurs/harta.jpg";
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
        <div className="container-fluid mainMap">

            { !showModal ? <ImageMapper src={IMG} map={MAP} onClick={(area) => {
                setCurrentArea(area);
                openModal();
            }} /> : null}
            <CustomModal showModal={showModal} setShowModal={setShowModal} currentArea={currentArea}/>
            <GlobalStyles />
        </div>
    )
}

export default MainMap;
