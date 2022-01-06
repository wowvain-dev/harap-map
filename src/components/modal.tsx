import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

const Description = styled.p`
  font-size: 16px;
  position: relative;
  top: 50%;
  -ms-transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
`

const customStyles = {
    content: {
        zIndex: 1,
        borderRadius: 10,
        width: '45%',
        height: '75%',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        overflow: 'hidden'
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
                <div style={{
                    height: '85%'
                }}>
                    <Description className="mt-3 ms-4 me-4 mb-3">
                        {currentArea.description}
                    </Description>
                </div>
                <Container>
                    <button className="btn btn-dark"
                            onClick={
                                () => { setShowModal((prev: any) => !prev) }
                            }
                    >
                        Închide
                    </button>
                </Container>
            </Modal>
        </Container>
    )
}