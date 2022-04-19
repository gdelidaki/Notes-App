const Header = ({ handleDarkMode }) => {
    return (
      <div className="header">
        <h1>Notes</h1>
        <div className="toggle">
          <input onClick={() => handleDarkMode((prevState) => !prevState)} type="checkbox" class="checkbox" id="chk" />
          <label class="label" for="chk">
            <i class="fas fa-moon"></i>
            <i class="fas fa-sun"></i>
            <div class="ball"></div>
          </label>
        </div>
      </div>
    );
  };
  
  export default Header;
  