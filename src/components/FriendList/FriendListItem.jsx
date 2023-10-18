import css from './FriendList.module.css';
export const FriendListItem = ({avatar, name, isOnline }) => {
    const isOnlineBg = isOnline ? 'green' : 'red';

  const friendStyles = {
    backgroundColor: isOnlineBg,
  };
    return (
        <li className={css.item}>
        <span className={css.status} style={friendStyles}>&#x25CF;&#x25CF;</span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
      </li>
    );
  };
