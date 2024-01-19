import css from './App';
import HTTPRequests from './components/HTTPRequests';
import HTTPPost from './components/HTTPPost';
import HTTPHooks from './components/HTTPHooks';

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      {/* Lecture 1 and 2 below */}
      {/* <HTTPRequests /> */}
      {/* Lecture 3 */}
      {/* <HTTPPost /> */}
      {/* Lecture 4, coverting to hooks */}
      <HTTPHooks />
    </div>
  );
}

export default App;