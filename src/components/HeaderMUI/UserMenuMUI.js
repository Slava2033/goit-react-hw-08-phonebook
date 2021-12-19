import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import Button from '@material-ui/core/Button';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'baseline',
    color: '#faa346',
  },
  name: {
    fontWeight: 700,
    fontSize: 18,
    marginRight: 12,
  },
  button: {
    color: '#faa346',
    fontWeight: 700,
    fontSize: 18,
    textTransform: 'capitalize',
  },
};

export default function UserMenuMUI() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div style={styles.container}>
      <span style={styles.name}>Добро пожаловать, {name}</span>

      <Button
        type="button"
        style={styles.button}
        endIcon={<PowerSettingsNewIcon fontSize="small" />}
        onClick={() => dispatch(authOperations.logOut())}
      >
        <span>Выйти</span>
      </Button>
    </div>
  );
}
