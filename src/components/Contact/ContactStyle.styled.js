import styled from '@emotion/styled';

export const ContactStyle = styled.li`
  position: relative;
  display: flex;
  /* color: #00b9ff; */
  color: yellow;

  font-size: 20px;
  margin-top: 15px;
  font-weight: 500;
  letter-spacing: 1px;
  .delete-icon {
    margin-left: 20px;
    cursor: pointer;
    &:hover {
      color: red;
    }
  }
  p:hover {
    color: transparent;
    cursor: pointer;
    transition-property: all;
    transition-duration: 250ms;
    transition-timing-function: ease-in-out;
    &::before {
      content: 'редагувати контакт';
      position: absolute;
      top: 0;
      left: 0;
      color: blue;
    }
  }
`;
