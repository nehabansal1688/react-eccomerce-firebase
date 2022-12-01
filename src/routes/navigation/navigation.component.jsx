import React, { useContext } from 'react';

import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import SVG from 'react-inlinesvg';
import { UserContext } from '../../contexts/user.context';
import './navigation.styles.scss';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CardIcon from '../../components/card-icon/card-icon.component';

const Navigation = () => {
  //whenever we use context it makes the component rerun the complete code. doesnt mattter if the code has actualy changed or not. code will re run. re render depends upon change in any parameter.

  //if 100 component are using UserContext that mean code for those 100 components will run on any single component change  which can be a performance bottle neck
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const signOutHandler = async () => {
    await signOutUser();
    // setCurrentUser(null);
  };
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <SVG
            className="shopping-icon"
            src={require('../../assets/crown.svg')}
            width={50}
          />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/authentication">
              SIGN IN
            </Link>
          )}
          <CardIcon />
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
