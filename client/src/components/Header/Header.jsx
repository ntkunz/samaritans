import './Header.scss';
import logo from '../../assets/logo/logo-no-background.png';

function Header() {
  return (
    <div className="header">
        <img className='header__logo' src={logo} alt="log" />
        <div className="header__container">
            <div className="header__sub-container">
                <p className="header__text header__text--bold">Organization</p>
                <p className="header__sub-text">Login/ Sign Up</p>
            </div>
            <div className="header__sub-container">
                <p className="header__text header__text--bold">Volunteer</p>
                <p className="header__sub-text">Login/ Sign Up</p>
            </div>
        </div>
    </div>
  )
}

export default Header