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
export default FeedbackOptions;
