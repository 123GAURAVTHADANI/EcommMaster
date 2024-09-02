function Header() {
  return (
    <header className="header">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVrlGor4LTzp6Bx3GFSo_tdd2Vms4A4OxhBXVByyS9v6sHn-rK3f4ZaQZq3oYoD-xLmFs&usqp=CAU"
        alt="logo"
        className="header__logo"
      />
      <input type="text" placeholder="Search Me" className="search__field" />
      <div className="icons__section">
        <i class="fa fa-user-circle faUser" aria-hidden="true"></i>
        <button>Sign Up</button>
      </div>
    </header>
  );
}
export default Header;
