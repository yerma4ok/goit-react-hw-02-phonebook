import styled from 'styled-components';

export const ContList = styled.ul`
  list-style: none;
  margin-left: 20px;
`;

export const DeleteBtn = styled.button`
    width: 50px;
    height: 15px;
    margin-left: 15px;
    border: none;
    border-radius: 2px;
    font-size: 12px;
    letter-spacing: 0.03em;
    cursor: pointer;
    transition: background-color  250ms cubic-bezier(0.4, 0, 0.2, 1);
    transition: color  250ms cubic-bezier(0.4, 0, 0.2, 1);
    :hover, :focus{
        background-color: #2196F3;
        color: white;
    }
`
