import React from 'react';
import {Statistic, Title, StatList, Item, Label, Percentage} from './statistics.style';

export const Statistics = ({stats, title}) => {
    return (
        <Statistic>
            <Title>{title}</Title>
            <StatList>{stats.map((item, index) => (
                <Item key={item.id} id={item.id}>
                    <Label>{item.label}</Label>
                    <Percentage>{item.percentage}%</Percentage>
                </Item>))}
            </StatList>
        </Statistic>
    )
}




 