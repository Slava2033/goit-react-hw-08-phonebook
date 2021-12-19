import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors } from 'redux/contacts';
import * as contactsActions from 'redux/contacts';
import InputBase from '@material-ui/core/InputBase';
import PropTypes from 'prop-types';
import FormContainer from '../FormComponents/FormContainer';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {},
  searchInput: {
    opacity: '0.9',
    '&:hover': {
      backgroundColor: '#fff',
      borderRadius: '5px',
      boxShadow: '1px 1px 10px 1px rgba(241,132,98,1)',
    },
    '& .MuiSvgIcon-root': {
      marginRight: '8px',
    },
  },
});

const Filter = () => {
  const styles = useStyles();
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  return (
    <FormContainer>
      <InputBase
        className={styles.searchInput}
        startAdornment={<SearchIcon fontSize="small" color="secondary" />}
        placeholder="find your contacts"
        type="text"
        value={value}
        onChange={e => dispatch(contactsActions.changeFilter(e.target.value))}
      />
    </FormContainer>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
