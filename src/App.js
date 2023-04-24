import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Nav from './components/Nav';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';

import YourPosts from './pages/YourPosts';
import AllPosts from './pages/AllPosts';
import CuratedContent from './pages/CuratedContent';
import ViewPost from './pages/ViewPost';

import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';

import NotFound from './pages/NotFound';
import CreatePost from './pages/CreatePost';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='container'>
          <Footer />
          <h1>Storia</h1>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            <Route path="/yourposts" element={<YourPosts />} />
            <Route path="/allposts" element={<AllPosts />} />
            <Route path="/curatedcontent" element={<CuratedContent />} />
            <Route path="/posts/:postId" element={<ViewPost />} />
            <Route path="/createpost" element={<CreatePost />} />

            <Route path="/login" element={<LoginPage />} />
            <Route path="/createaccount" element={<CreateAccountPage />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
