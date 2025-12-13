import "./style.css"

function Logout({setIsLoggedIn}) {
  return (
    
      <div className="navbar-right">
       <button className="button login-btn" onClick={() => setIsLoggedIn(false)}>Log Out</button>
      </div>
    
  )
}

export default Logout;