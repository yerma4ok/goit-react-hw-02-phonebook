import styled from 'styled-components';

export const ContList = styled.ul`
  /* list-style: none; */
  margin-left: 70px;
`;

export const DeleteBtn = styled.button`
    width: 60px;
    height: 20px;
    margin-left: 15px;
    border: 1px solid lightgray;
    border-radius: 2px;
    font-size: 14px;
    letter-spacing: 0.03em;
    background-color: white;
    cursor: pointer;
    transition: background-color  250ms cubic-bezier(0.4, 0, 0.2, 1);
    transition: color  250ms cubic-bezier(0.4, 0, 0.2, 1);
    :hover, :focus{
        background-color: #2196F3;
        color: white;
    }
`
