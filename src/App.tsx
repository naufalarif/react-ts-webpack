import './styles.css';
import Image from './react.png';

const App = () => (
  <div>
    <h1>App - {process.env.NODE_ENV} | {process.env.name}</h1>
    <img src={Image} alt="react-logo" width={300} />
  </div>
);

export default App;