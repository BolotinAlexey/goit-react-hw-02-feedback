import PropTypes from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <section className="btns">
      <ul className="buttons">
        {options.map(el => (
          <li key={el}>
            <button onClick={onLeaveFeedback(el)}>{el}</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
