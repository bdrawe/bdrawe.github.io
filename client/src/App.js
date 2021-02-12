
import './App.css';
import NavigationBar from './components/Navigation'
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
  <>
    <NavigationBar fixed="top" />
    <Footer  fixed="bottom"/>
  </>
  );
}

export default App;
