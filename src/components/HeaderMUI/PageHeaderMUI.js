import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(3, 0, 2),
    textAlign: 'center',
    fontSize: '38px',
    color: '#faa346',
    textShadow: '1px 1px #9c5203',
  },
}));
const PageHeader = props => {
  const { title } = props;
  const styles = useStyles();
  return (
    <Typography className={styles.root} variant="h1">
      {title}
    </Typography>
  );
};

export default PageHeader;
