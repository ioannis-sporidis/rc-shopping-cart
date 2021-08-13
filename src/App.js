import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import { useGlobalContext } from './helpers/context';

const App = () => {
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
};

export default App;
