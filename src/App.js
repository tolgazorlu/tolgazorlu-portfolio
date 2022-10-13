import Header from './components/Header'
import Parallax from './components/Parallax'
import RecentPosts from './components/RecentPosts'
import Description from './components/Description';
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Parallax />
      <Description />
      <RecentPosts />
    </div>
  );
}

export default App;

