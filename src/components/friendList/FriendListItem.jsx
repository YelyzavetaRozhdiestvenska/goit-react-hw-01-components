import React from 'react';
import {Status, Avatar, Name} from './friendListItem.style';



export default function FriendListItem  ({items: {name, isOnline, avatar}}) {
    return (
<>
  <Status isOnline={isOnline}></Status>
  <Avatar src={avatar} alt="User avatar" width="48" />
  <Name>{name}</Name>
</>
    )
}