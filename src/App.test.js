import ReactDOM from 'react-dom';
import App from './App';

test("renders without crashing", () => {
  const div = document.createElement('DIV');
  ReactDOM.render(<App />,div);
});
