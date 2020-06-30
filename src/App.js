import React from 'react';

import Header from './components/Header';
import AddressIP from './components/AddressIP';
import Clock from './components/Clock';
import Navigator from './components/Navigator';
//import Location from './components/Location';
import Screen from './components/Screen';


function App() {
  return (
    <main>
      <Header />
      <Navigator />
      <Screen />
      <AddressIP />
      <Clock />      
      {/* <Location /> */}
    </main>
  );
}

export default App;
