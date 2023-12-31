import styled from 'styled-components'


export const FriendsList = styled.ul`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 5px;
margin-top: 30px;
margin-left: auto;
margin-right: auto;
width: 600px;
text-align: center;
list-style: none;
`;

export const Item = styled.li`
display: flex;
border: 2px solid #808080;
border-radius: 5px;
box-shadow: 3px 3px 20px rgba(0, 0, 0, .5);
width: 200px;
padding: 5px;
`;





// export const WrappedStatus = styled(Status)`
//     color: ${({ isOnline }) => isOnline ? "#BF4F74" : "#000000"}; 
//     font-weight: bold;
// `

// function Status({ isOnline, className }) {
//     return <span className={className}>"HEEEEELLLLOOOO"</span>
// }