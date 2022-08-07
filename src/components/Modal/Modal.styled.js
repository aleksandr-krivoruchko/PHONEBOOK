import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1200;
`;

export const ModalStyle = styled.div`
  position: relative;
  display: block;
  width: 500px;
  background-color: #00b9ff;
  padding: 20px;
  border-radius: 10px;
`;
export const CloseButton = styled.button`
  position: absolute;
  right: 20px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid yellow;
  background-color: transparent;
  color: yellow;
  font-size: 20px;
  cursor: pointer;
  :hover {
    color: blue;
    border-color: blue;
  }
`;
