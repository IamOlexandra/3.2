import userData from "./data/user.json";
import Profile from "./components/profile/Profile";

import statisticsData from "./data/data.json";
import Statistics from "./components/statistics/Statistics";

import friendsData from "./data/friends.json";
import FriendList from "./components/friend_list/FriendList";

import transactionsData from "./data/transactions.json";
import TransactionHistory from "./components/transaction_history/TransactionHistory";

function App() {
  return (
    <div className="container">
      <Profile data={userData}/>
      <Statistics title="Upload stats" stats={statisticsData}/>
      <FriendList friends={friendsData}/>
      <TransactionHistory items={transactionsData}/>
    </div>
  );
}

export default App;
