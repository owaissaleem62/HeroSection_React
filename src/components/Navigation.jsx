const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src="/images/brand_logo.png" alt="logo" />
      </div>
      <ul>
        <li href="#"><a href="#">Menu</a></li>
        <li href="#"><a href="#">Location</a></li>
        <li href="#"><a href="#">About</a></li>
        <li href="#"><a href="#">Contact</a></li>
      </ul>

      <button>login</button>
    </nav>
  );
};

export default Navigation;
