import React from 'react';
import styled from 'styled-components';

const DeleteModal = props => {
    return (
        <ModalOverlay>
            <Modal>
                <h1>Are you sure you want to delete this?</h1>
                <span>🗑</span>
                <Buttons>
                    <Button onClick={props.deleteToggleModal}>KEEP</Button>
                    <Button red onClick={props.deleteTodo}>DELETE</Button>
                </Buttons>
            </Modal>
        </ModalOverlay>
    )
}

const ModalOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(114, 114, 114, 0.77);
`;

const Modal = styled.div`
  display:flex;
  flex-direction:column;
  background: white;
  z-index: 2;
  h1{
    text-align: center;
    background: #BC4C4C;
    color:#fff;
    align-self:flex-start;
    margin:0;
    padding:10px 10px;
  }
  span{
      font-size: 100px;
  }
`;

const Buttons = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`;
const Button = styled.div`
    width: 120px;
    font-size: 20px;
    background-color: ${ props => props.red ? '#BC4C4C' : '#526CC6' };
    text-transform: uppercase;
    color: #fff;
    align-self: center;
    margin:10px;
    padding: 15px;
`;
export default DeleteModal;
