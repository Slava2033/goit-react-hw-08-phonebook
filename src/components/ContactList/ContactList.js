import React from 'react';
import PropTypes from 'prop-types';
import s from './contactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';
import { contactsSelectors } from 'redux/contacts';
import { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1, 0, 1),
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
  },
}));

export default function ContactList() {
  const styles = useStyles();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(contactsSelectors.getVisibleContacts);

  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <span className={s.listItemText}>{name}:</span>
          <span className={s.listItemText}>{number}</span>
          <Button
            startIcon={<DeleteIcon fontSize="small" color="white" />}
            className={styles.root}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteContact: PropTypes.func,
};
