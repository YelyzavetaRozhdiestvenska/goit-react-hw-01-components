import styled from 'styled-components'




export const Status = styled.span`
display: block;
margin-left: 10px;
margin-top: auto;
margin-bottom: auto;
width: 14px;
height: 14px;
border-radius: 50%;
background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;

export const Avatar = styled.img`
margin-left: 20px;
margin-right: 20px;
`;

export const Name = styled.p`
margin-top: auto;
margin-bottom: auto;
`;
