import styled from 'styled-components';

export const Statistic = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 10px;
margin: auto;
width: 360px;
text-align: center;
`;

export const Title = styled.h2`
color: #808080;
margin-bottom: 30px;
`;

export const StatList = styled.ul`
width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const Item = styled.li`
border: 2px solid #808080;
padding: 15px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #ffff00
`;

export const Label = styled.span`

`;
export const Percentage = styled.span`

`;