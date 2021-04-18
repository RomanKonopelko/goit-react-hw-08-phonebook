import { connect } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors'
import authOperations from '../../redux/auth/auth-operations'
import s from '../../form.module.css'
import defaultAvatar from '../../avatar.jpg';

const { getUserName } = authSelectors


const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        padding: '10px 30px'
    },
    avatar: {
        marginRight: 4,
        width: '60px',
        borderRadius: '50%'

    },
    name: {
        fontWeight: 700,
        marginRight: 12,
    },
};

function UserMenu({ name, onLogout }) {
    const avatar = defaultAvatar;

    return (
        <div style={styles.container}>
            <img src={avatar} alt="" width="32" style={styles.avatar} />
            <span style={styles.name}>Добро пожаловать, {name}</span>
            <button type="button" className={s.button} onClick={onLogout}>
                Выйти
      </button>
        </div>
    );
}

const mapStateToProps = (state) => ({
    name: getUserName(state)
})

const mapDispatchtoProps = {
    onLogout: authOperations.logout
}

export default connect(mapStateToProps, mapDispatchtoProps)(UserMenu)