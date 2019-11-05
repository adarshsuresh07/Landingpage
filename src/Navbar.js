import React from 'react';
import Style from './Landingpage.module.css';
class Navi extends React.Component {
render(){
 return (
    <div className={Style.but}>
  <div className={Style.more}>
 <div className={Style.dropdown}>
  <span>More</span>
  <div className={Style.dropdownContent}>
  <a href="#">Link 1</a>
  <a href="#">Link 2</a>
  <a href="#">Link 3</a>
  </div>
  </div>
  </div>
  <div className={Style.bigscreen}>
  <a href= 'https://google.com/'><button>Login</button></a>
 <a href= 'https://google.com/'><button>Register</button></a>
    </div>
    <div className={Style.responsive}>
  <div className={Style.dropdownresponsive}>
  <img src={require("./A42.png")} />
  <div className={Style.dropdownContentres}>
  <a href= 'https://google.com/'>Login</a>
  <a href= 'https://google.com/'>Register</a>
  <div className={Style.dropdowninside}>
  <span>More</span>
  <div className={Style.dropdownContentinside}>
  <a href="#">Link 1</a>
  <a href="#">Link 2</a>
  <a href="#">Link 3</a>
  </div>
</div>
  </div>
   </div>
    </div>
    </div>

  );
}
}

export default Navi;
