import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

// @ts-ignore
export const CustomModal = ({ showModal, setShowModal, currentArea }) => {
    return (
    	<div>
		<Modal open={showModal} onClose={() => { setShowModal((prev: any) => !prev) }} center> 
			<h2 className="text-center"> {currentArea.title} </h2>
			<br/>
			<h3 className="text-center fw-normal"> {currentArea.description} </h3>
		</Modal>
	</div>
    )
}
