import styled from 'styled-components';

export const StatsList = styled.ul`
display: flex;
margin-top:20px;
justify-content: center;
align-items: center;
list-style: none;
`;

export const StatsItem = styled.li`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 5%;
border: 2px solid #808080;
padding: 10px;
width: 100%;
`;

export const Label = styled.span`
margin-bottom: 5px;
`;
export const Quantity = styled.span`
margin-bottom: 5px;
`;