import './App.css';
import {List1,List2,Joinbtn,Settingbtn,Loginbtn,Contactbtn,Searchbtn,Helpbtn,Homebtn,Downloadbtn}  from './Component/List1';





function App() {
  return (
    <div className="App">
      <List1 head="Mobile Operating System" l1="Android" l2="Blackberry" l3="iphone" l4="Windows phone"/>
      <List2  head="Mobile Manufacturers" l1="Samsung" l2="HTC" l3="Micromax" l4="Apple"/>
      < div className='buttons-cont'>
      <div >
        <Joinbtn text="JOIN US"/>
         <Settingbtn text="SETTINGS"/>
         </div>
          <div><Loginbtn  text="LOGIN"/>
         <Contactbtn  text="CONTACT US"/></div>
         <div><Searchbtn  text="SEARCH"/>
         <Helpbtn  text="HELP"/></div>
         <div><Homebtn  text="HOME"/>
         <Downloadbtn  text="DOWNLOAD"/> </div>
     
      </div>
    </div>
  );
}

export default App;
