import styled from '@emotion/styled';

export const ContactStyle = styled.li`
  display: flex;
  color: #00b9ff;
  font-size: 20px;
  margin-top: 15px;
  font-weight: 500;
  letter-spacing: 1px;
`;

export const ButtonStyle = styled.button`
  margin-right: 20px;
  color: blue;
  background-color: transparent;
  border-color: blue;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  &:hover {
    border: 2px solid blue;
    color: blue;
  }
`;
