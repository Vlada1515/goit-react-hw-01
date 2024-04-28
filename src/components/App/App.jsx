import './App.css'
import Profile from '../Profile/Profile';
import userData from '../../data/userData.json';
import Friends from '../../data/Friends.json';
import FriendList from '../FriendList/FriendList';

export const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList Friends={Friends} />
    </>
  );
};
export default App;
