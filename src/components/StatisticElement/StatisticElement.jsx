// import PropTypes from 'prop-types';
// import css from './StatisticElement.module.css';

function StatisticElement({ good, neutral, bad, total, positivePercentage }) {
  return (
    <section className="statistics">
      <ul>
        <li>
          <p>Good: {good}</p>
        </li>
        <li>
          <p>Neutral: {neutral}</p>
        </li>
        <li>
          <p>Bad: {bad}</p>
        </li>
        <li>
          <p>Total: {total}</p>
        </li>
        <li>
          <p>Positive feedback: {positivePercentage}%</p>
        </li>
      </ul>
    </section>
  );
}

export default StatisticElement;
