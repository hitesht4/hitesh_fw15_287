// import logo from './logo.svg';
import './App.css';
import List1  from './sprint-1/day-1/assignments/Day1/List1';

import List2 from './sprint-1/day-1/assignments/Day1/List2';

import Joinbtn from './sprint-1/day-1/assignments/Day1/Joinus';

import Settingbtn from './sprint-1/day-1/assignments/Day1/Setting';

import Loginbtn from './sprint-1/day-1/assignments/Day1/Login';

import Contactbtn from './sprint-1/day-1/assignments/Day1/Contactusl';

import Searchbtn from './sprint-1/day-1/assignments/Day1/Search';

import Helpbtn from './sprint-1/day-1/assignments/Day1/Help';

import Downloadbtn from './sprint-1/day-1/assignments/Day1/Download';

import Homebtn from './sprint-1/day-1/assignments/Day1/Home';

function App() {
  return (
    <div className="App">
      <List1/>
      <List2/>
      < div className='buttons-cont'>
      <div >
        <Joinbtn/>
         <Settingbtn/>
         </div>
          <div><Loginbtn/>
         <Contactbtn/></div>
         <div><Searchbtn/>
         <Helpbtn/></div>
         <div><Homebtn/>
         <Downloadbtn/> </div>
     
      </div>
    </div>
  );
}

export default App;
