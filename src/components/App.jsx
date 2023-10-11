import GlobalStyle from './globalStyle';

import  {Profile}  from "./profile/Profile";
import user from "./profile/user.json"

import data from './statistics/data.json'
import { Statistics } from "./statistics/Statistics";

import friends from './friendList/friends.json'
import { FriendList } from "./friendList/FriendList";

import transactions from './transactionHistory/transactions.json'
import { TransactionHistory } from "./transactionHistory/TransactionHistory";



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
