import React, { Component } from 'react';

class Feadback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodInc = () =>
    this.setState(({ good }) => ({
      good: ++good,
    }));
  neutralInc = () =>
    this.setState(({ neutral }) => ({
      neutral: ++neutral,
    }));
  badInc = () =>
    this.setState(({ bad }) => ({
      bad: ++bad,
    }));

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <section className="btns">
          <h2>Please leave feadback</h2>
          <ul className="buttons">
            <li>
              <button onClick={this.goodInc}>Good</button>
            </li>
            <li>
              <button onClick={this.neutralInc}>Neutral</button>
            </li>
            <li>
              <button onClick={this.badInc}>Bad</button>
            </li>
          </ul>
        </section>
        <section className="statistics">
          <h2>Statisticks</h2>
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
          </ul>
        </section>
      </>
    );
  }
}

export default Feadback;
