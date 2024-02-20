import logo from  '../src/Logo.png'

function Header() {
    return (
      <header className="Header">
        <a href='/'>
            <img src={logo} alt='logo'/>
        </a>
      </header>
    );
  }

  export default Header;