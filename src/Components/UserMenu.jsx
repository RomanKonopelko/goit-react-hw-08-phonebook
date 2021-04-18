import { connect, useDispatch, useSelector } from 'react-redux';
import authSelectors from '../redux/Auth/auth-selectors'

const { getUserName } = authSelectors

// import defaultAvatar from './default-avatar.png';

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
    },
    avatar: {
        marginRight: 4,
    },
    name: {
        fontWeight: 700,
        marginRight: 12,
    },
};

function UserMenu({ name }) {
    // const avatar = defaultAvatar;

    return (
        <div style={styles.container}>
            {/* <img src={avatar} alt="" width="32" style={styles.avatar} /> */}
            <span style={styles.name}>Добро пожаловать, {name}</span>
            <button type="button">
                Выйти
      </button>
        </div>
    );
}

const mapStateToProps = (state) => ({
    name: getUserName(state)
})

export default connect(mapStateToProps)(UserMenu)