import PropTypes from 'prop-types';

import { FriendListItem } from './FriendListItem';
import { ListItem } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <ListItem>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ListItem>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
