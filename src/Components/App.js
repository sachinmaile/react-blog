import {Routes,Route} from 'react-router-dom';
import {Navbar,CreatePost,Home,PostDetail} from './';

function App() {
  return (
    <div className="container">
      <Navbar/>
      <Routes>
        <Route exact path='/' Component={Home}></Route>
        <Route exact path='/post/:postId' Component={PostDetail}></Route>
        <Route exact path='/create-post' Component={CreatePost}></Route>
      </Routes>
    </div>
  );
}

export default App;
