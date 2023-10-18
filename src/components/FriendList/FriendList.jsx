import css from './FriendList.module.css';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
    return (
      <div className={css.container}>
        <ul className={css.friendList}>
        {friends.map(friend => {
            return (
              <FriendListItem
                key={friend.name}
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
              />
            );
          })}
        </ul>

  
      </div>
    );
  };