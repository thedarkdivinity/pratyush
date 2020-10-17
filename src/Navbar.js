import React from 'react';
const Navbar=()=>{
return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light addColor">
  <div className="container">
    <a className="navbar-brand" href="#"><i>PRATYUSH REALTECH</i> </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>
    </>
)

}
export default Navbar;