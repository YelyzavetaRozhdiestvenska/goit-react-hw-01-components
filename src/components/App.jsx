import GlobalStyle from './globalStyle';
import React from 'react';

import {Profile} from "./profile/Profile";
import user from "./profile/user.json"

import { Statistics } from "./statistics/Statistics";
import data from './statistics/data.json'

import {FriendList} from "./friendList/FriendList";
import friends from './friendList/friends.json'

import { TransactionHistory } from "./transactionHistory/TransactionHistory";
import transactions from './transactionHistory/transactions.json'


// export function App() {
//   return (
//   <div>
//       <Profile user={user}/>
//       <Statistics title="Upload stats" stats={data}/>
//       <FriendList friends={friends}/>
//       <TransactionHistory transactions={transactions} />
//       <GlobalStyle />
//     </div>
//   );
// };

// export function App() {
//   return <div><Profile user={user}></Profile><FriendList friends={friends}></FriendList></div>
// }

export const App = () => {
  return (
  <div>
      <Profile item={user}/>
      <Statistics title="Upload stats" stats={data}/>
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions} />
      <GlobalStyle />
    </div>
  );
};