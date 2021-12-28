import React, { useState } from 'react';
import Modal from 'react-modal';
import jsonData from '../mapping/areas.json'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const customStyles = {
    content: {
        zIndex: 1,
        borderRadius: 10,
        width: '70%',
        height: '75%',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

// @ts-ignore
export const CustomModal = ({showModal, setShowModal, currentArea}) => {

    return (
            <Container>
                <Modal
                    isOpen={showModal}
                    style={customStyles}
                >
                    <h2 className='text-center'> {currentArea.title} </h2>
                    <p className='text-sm-center'> Current Area {currentArea.id} </p>
                    <h6 className="mt-3 ms-4 me-4 mb-3">
                        What is Lorem Ipsum?

                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </h6>
                    <Container>
                    <button className="btn btn-dark" onClick={() => {setShowModal((prev:any) => !prev)}}>close</button>
                    </Container>
                </Modal>
            </Container>
    )
}