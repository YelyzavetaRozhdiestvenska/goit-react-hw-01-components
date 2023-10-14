import React from 'react';
import {Table, Thead, Tr, Th, Tbody, Td} from './transactionHistory.style';

export const TransactionHistory = ({items}) => {
    return (
        <Table>
            <Thead>
    <Tr>
      <Th>Type</Th>
      <Th>Amount</Th>
      <Th>Currency</Th>
    </Tr>
  </Thead>
            {items.map((item) => (
                <Tbody>
                <Tr key={item.id} id={item.id}>
                  <Td>{item.type}</Td>
                  <Td>{item.amount}</Td>
                  <Td>{item.currency}</Td>
                </Tr>
                </Tbody>
            ))}
        </Table>
    )
}




/* <TransactionsHistory>
            <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
            {items.map((item) => (
                <tbody>
                <tr key={item.id} id={item.id}>
                  <td>{item.type}</td>
                  <td>{item.amount}</td>
                  <td>{item.currency}</td>
                </tr>
                </tbody>
            ))}
        </TransactionsHistory>
    ) */