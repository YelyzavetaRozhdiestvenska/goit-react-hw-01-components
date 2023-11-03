import React from 'react';
import { StatsList, StatsItem, Label, Quantity } from './statsList.style';


export const Stats = ({stats}) => {
    
    return (
        <StatsList>
        {Object.entries(stats).map(([key, value]) => 
          <StatsItem>
          <Label>{key}</Label>
          <Quantity>{value}</Quantity>
          </StatsItem>)}
        </StatsList>)
  }