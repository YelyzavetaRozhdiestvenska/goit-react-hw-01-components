import React from 'react';
import { FriendsList, Item } from './friendList.style';
import FriendListItem from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(friend => (
        <Item key={friend.id}>
          <FriendListItem items={friend} />
        </Item>
      ))}
    </FriendsList>
  );
};
