import PropTypes from 'prop-types';
import css from 'components/FriendListItem/FriendListItem.module.css';

const FriendListItem = ({ id, avatar, name, isOnline }) => (
  <li key={id} className={css.item}>
    <span
      className={isOnline === true ? css.statusOn : css.statusOff}
      data-status={isOnline}
    ></span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};

export default FriendListItem;
