// import logo from './logo.svg';
import './App.css';
import List1  from './Component/List1';

import List2 from './Component/List2';

import Joinbtn from './Component/Joinus';

import Settingbtn from './Component/Setting';

import Loginbtn from './Component/Login';

import Contactbtn from './Component/Contactus';

import Searchbtn from './Component/Search';

import Helpbtn from './Component/Help';

import Downloadbtn from './Component/Download';

import Homebtn from './Component/Home';

function App() {
  return (
  
    <div className="App">
      <List1/>
      <List2/>
      < div className='buttons-cont'>
      <div>

         <Joinbtn/>
         <Settingbtn/>
      </div>
        

        <div>
          <Loginbtn/>
         <Contactbtn/>

        </div>

        <div>
        <Searchbtn/>
         <Helpbtn/>
        </div>


        <div>
       <Searchbtn/>
         <Helpbtn/>
         </div>
         
      <div>
          <Homebtn/>
         <Downloadbtn/>  
    
     </div>
        
    
         </div>

</div>      


    
  );
}

export default App;
