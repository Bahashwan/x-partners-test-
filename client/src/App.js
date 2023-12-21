import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
// import RegistrationForm from './components/RegForm/RegistrationForm';
import Header from './components/Header/Header';
import AuthPage from './components/authComponents/AuthPage';
function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <AuthPage />
      </div>
    </div>
  );
}

export default App;
