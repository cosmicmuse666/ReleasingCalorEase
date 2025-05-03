import { Link } from "react-router-dom";

function Navbarb5(){
    return (<>
    <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>                        
      </button>
      <Link className="navbar-brand" to="#">WebSiteName</Link>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav">
        <li className="active"><Link to="#">Home</Link></li>
        
        <li><Link to="#">Page 2</Link>Track</li>
        <li><Link to="#">Page 3</Link>Contact</li>
      </ul>
     
    </div>
  </div>
</nav>
    </>)
}

export default Navbarb5;