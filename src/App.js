import DrawerAppBar from './component/topbar';
import styles from './App.module.scss';

function App() {

  

  return (
    <div>
      <DrawerAppBar />
      <img src="https://s4.gifyu.com/images/DF22_WebsiteHeader_Home_v03.gif" alt="DF22_WebsiteHeader_Home_v03.gif" border="0" className={styles.banner}/>
    </div>
  );
}

export default App;
