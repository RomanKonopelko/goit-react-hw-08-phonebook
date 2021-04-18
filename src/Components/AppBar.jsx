import { connect, useSelector } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import authSelectors from '../redux/Auth/auth-selectors'

const { getIsAuthenticated } = authSelectors

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};

const AppBar = ({ IsAuthenticated }) => {
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header style={styles.header}>
      <Navigation />
      {IsAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
}

const mapStateToProps = (state) => ({
  IsAuthenticated: getIsAuthenticated(state)
})

export default connect(mapStateToProps)(AppBar)