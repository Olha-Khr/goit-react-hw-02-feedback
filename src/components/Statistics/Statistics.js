import PropTypes from 'prop-types';
import { Item, List } from './Statistics.styled';

export const Statistics = props => {
    const { good, neutral, bad, total, positivePercentage } = props;
    return (
        <div>
            <List>
                <Item>
                    <span>Good: </span>
                    <span>{good}</span>
                </Item>
                <Item>
                    <span>Neutral: </span>
                    <span>{neutral}</span>
                </Item>
                <Item>
                    <span>Bad: </span>
                    <span>{bad}</span>
                </Item>
                <Item>
                    <span>Total: </span>
                    <span>{total}</span>
                </Item>
                <Item>
                    <span>Positive feedback: </span>
                    <span>{positivePercentage}%</span>
                </Item>
            </List>
        </div>
    );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};