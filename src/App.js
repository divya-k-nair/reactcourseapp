import logo from './logo.svg';
import './App.css';
import { Link } from '@material-ui/core';
import Code from './Component/CourseView';
import AddCourse from './Component/AddCourse';
import Header from './Component/Header';
import CourseView from './Component/CourseView';
import { BrowserRouter,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      
      <BrowserRouter>
      <Header/>
      <Route path="/"exact component={AddCourse}/>
      <Route path="/viewcourse" exact component={CourseView}/>
      </BrowserRouter>
      
   </div>
  );
}

export default App;
