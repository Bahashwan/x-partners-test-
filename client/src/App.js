import './App.css';
// import RegistrationForm from './components/RegForm/RegistrationForm';
import Header from './components/Header/Header';
import UserProfile from './components/UserProfile/UserProfile';
import UsersList from './components/UsersList/UsersList';
import AuthPage from './components/authComponents/AuthPage';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <AuthPage />
        <UsersList />
        <UserProfile />
      </div>
    </div>
  );
}

export default App;
