import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCardHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';


import './header.style.scss';

const Header = ({ currentUser, hidden }) =>(
    <div className='header'>
        <Link to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to="/shop">SHOP</Link>
            <Link className='option' to="/shop">CONTACT</Link>
            {currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>
                SIGN OUT
                </div>
            ) : (
                <Link className='option' to='/signin'>
                SIGN IN
                </Link>
            )}
            <CartIcon />
        </div>
        { hidden ? null : <CartDropdown />}
    </div>
);

const mapSateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCardHidden
});

export default connect(mapSateToProps) (Header);