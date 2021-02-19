import React from 'react';


function Header() {
  const headerStyles = {
    textAlign: 'center'
  }
  return(
    <React.Fragment>
      <div style={headerStyles}>
          M
          <h1>Taproom Keg Tracker</h1>
      </div>
    </React.Fragment>
  );
}

export default Header;