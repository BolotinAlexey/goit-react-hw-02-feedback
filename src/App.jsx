// import data from "data";
// import transactions from "transactions";
// import friends from "friends";
import Feadback from 'components/Feadback/Feadback';
// import Statistics from "components/Statistics/Statistics";
// import FriendList from "components/FriendList/FriendList";
// import TransactionHistory from "components/TransactionHistory/TransactionHistory";

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        // flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Feadback />
    </div>
  );
};
