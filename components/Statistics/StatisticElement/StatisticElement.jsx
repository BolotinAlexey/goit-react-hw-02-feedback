import PropTypes from 'prop-types';
import css from './StatisticElement.module.css';

function StatisticElement({ label, percentage }) {
  return (
    <>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </>
  );
}

StatisticElement.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default StatisticElement;
