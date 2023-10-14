import React from 'react';
import {FriendsList, Item, Status, Avatar, Name} from './friendList.style';

export const FriendList = ({friends}) => {
    return (
        <FriendsList>
            {friends.map((friend) => (
<Item key={friend.id}>
  <Status isOnline={friend.isOnline}></Status>
  <Avatar src={friend.avatar} alt="User avatar" width="48" />
  <Name>{friend.name}</Name>
</Item>))}
        </FriendsList>
    )
}

// <ul className="friend-list">
// {friends.map((friend) => (
//     <li className="item" key={friend.id}>
//       <span className="status">{friend.isOnline}</span>
//       <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
//       <p className="name">{friend.name}</p>
//     </li>))}
//             </ul>



// export  function FriendList({ friends }) {
//     const {id, name, isOnline, avatar} = friends;
//     return (
//         <ul className="friend-list">
//             {friends.map((friends) => (
// <li className="item" key={id}>
// <span className="status">{isOnline}</span>
//   <img className="avatar" src={avatar} alt="User avatar" width="48" />
//   <p className="name">{name}</p>
// </li>))}
//         </ul>
//     )
// }


// import { render } from "@testing-library/react"
// import { WrappedStatus } from "./friendList.style"

// export default function FriendList({ friends }) {
//     return <ul>{friends.map(friend => <WrappedStatus isOnline={friend.isOnline}></WrappedStatus>)}</ul>
// }


