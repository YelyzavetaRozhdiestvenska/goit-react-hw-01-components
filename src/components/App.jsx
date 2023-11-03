import GlobalStyle from './GlobalStyle';
import React from 'react';

import { Profile } from './profile/Profile';
import user from '../data/user.json';

import { Statistics } from './statistics/Statistics';
import data from '../data/data.json';

import { FriendList } from './friendList/FriendList';
import friends from '../data/friends.json';

import { TransactionHistory } from './transactionHistory/TransactionHistory';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile item={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <GlobalStyle />
    </div>
  );
};
