import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav'
import MyFooter from './components/myFooter';
import Welcome from './components/welcome';
import AllTheBooks from './components/AllTheBooks';


function App() {
  return (
    <>
    <MyNav />
    <Welcome />
    <AllTheBooks />
    <MyFooter />
    </>
  );
}

export default App;
