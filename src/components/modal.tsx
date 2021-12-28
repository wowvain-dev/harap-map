import React from 'react';
import Modal from 'react-modal';
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
export const CustomModal = ({ showModal, setShowModal, currentArea }) => {

    return (
        <Container>
            <Modal
                isOpen={showModal}
                style={customStyles}
            >
                <h2 className='text-center'> {currentArea.title} </h2>
                <h6 className="mt-3 ms-4 me-4 mb-3">
                    {currentArea.description}
                </h6>
                <Container>
                    <button className="btn btn-dark" onClick={() => { setShowModal((prev: any) => !prev) }}>Închide</button>
                </Container>
            </Modal>
        </Container>
    )
}