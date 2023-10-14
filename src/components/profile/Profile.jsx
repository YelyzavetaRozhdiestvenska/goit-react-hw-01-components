import React from 'react';
import {ProfileCard, Description, Avatar, Name, Tag, Location, StatsList, StatsItem, Label, Quantity } from './profile.style';

// export default function Profile({ user }) {

//   const {username, tag, location, avatar, stats} = user;

//   return (<div className="profile">
//     <div className="description">
//       <img
//         src={avatar}
//         alt="User avatar"
//         className="avatar"
//       />
//       <p className="name">{username}</p>
//       <p className="tag">@{tag}</p>
//       <p className="location">{location}</p>
//     </div>
//     <Stats stats={stats} />
//     </div>)

// };

function Stats({ stats }) {
  return <StatsList>
      {Object.entries(stats).map((key, value) => 
        <StatsItem>
        <Label>{key}</Label>
        <Quantity>{value}</Quantity>
        </StatsItem>)}
      </StatsList>
}

export const Profile = ({item: {username, tag, location, avatar, stats}}) => {
   
    return (<ProfileCard>
    <Description>
      <Avatar
        src={avatar}
        alt="User avatar"/>
      <Name>{username}</Name>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </Description>
    <Stats stats={stats} />
    </ProfileCard>)
}

/* <div className="profile">
    <div className="description">
      <img
        src={avatar}
        alt="User avatar"
        className="avatar"
      />
      <p className="name">{username}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>
    <Stats stats={stats} />
  </div>)
 */



/* <ul className="stats">
    <li>
      <span className="label">Followers</span>
      <span className="quantity">1000</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">2000</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">3000</span>
    </li>
  </ul> */