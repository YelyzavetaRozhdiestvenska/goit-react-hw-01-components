import styled from 'styled-components';
import randColor from 'utils/utils';


export const Statistic = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 10px;
margin: auto;
width: 360px;
text-align: center;
border: 2px solid #808080;
border-radius: 10px;
box-shadow: 3px 3px 20px rgba(0, 0, 0, .5);

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
background-color: ${() => randColor()}

`;

export const Label = styled.span`

`;
export const Percentage = styled.span`

`;