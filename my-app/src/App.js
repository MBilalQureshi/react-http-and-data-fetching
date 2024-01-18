import css from './App';
import HTTPRequests from './components/HTTPRequests';

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <HTTPRequests />
    </div>
  );
}

export default App;