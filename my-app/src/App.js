import css from './App';
import HTTPRequests from './components/HTTPRequests';
import HTTPPost from './components/HTTPPost';

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      {/* Lecture 1 and 2 below */}
      {/* <HTTPRequests /> */}
      {/* Lecture 3 */}
      <HTTPPost />
    </div>
  );
}

export default App;