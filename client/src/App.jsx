import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Header from './components/Header';
import {Toaster} from 'react-hot-toast';
import Register from './pages/Register';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute';
import CreatePost from './pages/CreatePost';
import PostPage from './pages/PostPage';
import UpdatePost from './pages/UpdatePost';

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/sign-in' element={<SignIn/>}></Route>
        <Route path='/sign-up' element={<Register/>}></Route>
        <Route element={<PrivateRoute/>} >
            <Route path='/dashboard' element={<Dashboard/>}></Route>
        </Route>
        <Route element={<OnlyAdminPrivateRoute/>}>
            <Route path='/create-post' element={<CreatePost/>}/>
            <Route path='/update-post/:postId' element={<UpdatePost/>}/>
        </Route>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/post/:postSlug' element={<PostPage/>}/>
      </Routes>
      <Footer/>
      <Toaster/>
    </Router>
  )
}

export default App
