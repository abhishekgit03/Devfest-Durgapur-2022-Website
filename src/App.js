import DrawerAppBar from "./component/topbar";
import Banner from "./component/banner";
import WhatIs from "./component/whatIs";
import styles from "./App.module.scss";
import Sponsors from "./component/sponsors";
import Countdown from "./component/countdown";
import Team from "./component/Team";
import FAQ from "./component/FaqSection";
function App() {
  return (
    <div className={styles.body}>
      <DrawerAppBar />
      <Banner />
      <Countdown />
      <WhatIs />
      <Sponsors />
      <Team />
      <FAQ />
    </div>
  );
}

export default App;
