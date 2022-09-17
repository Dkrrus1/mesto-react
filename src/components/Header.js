import logo from '../images/logo.svg';

export function Header() {
    return (
        <header className="header">
        <a href="https://dkrrus1.github.io/mesto/" className="header__link"><img src={logo} className="header__logo" alt="Логотип" /></a>
      </header>
    )
}