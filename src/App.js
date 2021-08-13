import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import { useGlobalContext } from './helpers/context';

const App = () => {
  const { loading } = useGlobalContext();

  if (loading) {
    return (
      <div className='loading'>
        <hi>loading...</hi>
      </div>
    );
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
};

export default App;
