import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState} from 'react';
import LoginForm from "./components/LoginForm";

function App() {

const adminUser = {
  email:'admin@admin.com',
  password: 'admin'
}

const [user, setUser] = useState({name:'', email:''});
const [error, setError]= useState('');


const Login = details => {
  console.log(details)
  if (details.email == adminUser.email && details.password == adminUser.password){
    console.log('logged in')
  }else{
    console.log('error ')
  }
}

const LogOut = () => {
  console.log('logout');
};

  return (
    <div className="App">
      {
      (user.email != '') ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
        </div>
      ) : (
        <LoginForm Login = {Login} error = {error} />
      )
    }
     
    </div>
  );
}

export default App;
