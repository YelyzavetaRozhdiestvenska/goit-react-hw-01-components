import styled from 'styled-components';

export const ProfileCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 10px;
margin: auto;
width: 360px;
height: 420px;
text-align: center;
margin-bottom: 40px;
border: 2px solid #808080;
border-radius: 10px;
box-shadow: 3px 3px 20px rgba(0, 0, 0, .5);
`;

export const Description = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 10px;
`;

export const Avatar = styled.img`
display: flex;
align-items: center;
justify-content: center;

height: 150px;
width: 150px;
border-radius: 50%;
`;

export const Name = styled.p`
font-size: 26px;
color: black;
font-weight: 900;

}
`;

export const Tag = styled.p`
color: #808080;
`;

export const Location = styled.p`
color: #808080;
`;

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

`;
export const Quantity = styled.span`

`;