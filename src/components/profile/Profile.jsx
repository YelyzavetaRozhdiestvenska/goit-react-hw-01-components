import React from 'react';
import {ProfileCard, Description, Avatar, Name, Tag, Location} from './profile.style';
import { Stats } from './StatsList';



export const Profile = ({item: {username, tag, location, avatar,stats}}) => {
    
    return (<ProfileCard>
    <Description>
      <Avatar
        src={avatar}
        alt="User avatar"/>
      <Name>{username}</Name>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </Description>
    <Stats stats={stats}/>
    </ProfileCard>)
}

