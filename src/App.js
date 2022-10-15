import DrawerAppBar from "./component/topbar";
import Banner from "./component/banner";
import WhatIs from "./component/whatIs";
import Sponsors from "./component/sponsors";

function App() {
  return (
    <div>
      <DrawerAppBar />
      <Banner />
      <WhatIs />
      <Sponsors />
    </div>
  );
}

export default App;
