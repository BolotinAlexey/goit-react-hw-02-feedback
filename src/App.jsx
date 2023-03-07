// import user from 'user';
// import data from 'data';
// import transactions from 'transactions';
// import friends from 'friends';
// import Profile from 'components/Profile/Profile';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import StatisticElement from 'components/StatisticElement/StatisticElement';
import React, { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodIncrement = () =>
    this.setState(({ good }) => ({
      good: ++good,
    }));
  neutralIncrement = () =>
    this.setState(({ neutral }) => ({
      neutral: ++neutral,
    }));
  badIncrement = () =>
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

  onLeaveFeedback = el => this[`${el}Increment`];

  render() {
    return (
      <>
        <Section title="Please leave feadback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          <StatisticElement
            {...this.state}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}

export default App;
