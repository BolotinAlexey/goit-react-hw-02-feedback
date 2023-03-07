// import user from 'user';
// import data from 'data';
// import transactions from 'transactions';
// import friends from 'friends';
// import Profile from 'components/Profile/Profile';
// import Statistics from 'components/Statistics/Statistics';
// import FriendList from 'components/FriendList/FriendList';
import StatisticElement from 'components/StatisticElement/StatisticElement';
import React, { Component } from 'react';

class App extends Component {
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

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return bad + good + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return this.countTotalFeedback()
      ? Math.round((good * 100) / this.countTotalFeedback())
      : 0;
  };
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
        <StatisticElement
          {...this.state}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </>
    );
  }
}

export default App;
