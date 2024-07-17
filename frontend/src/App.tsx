import Footer from './features/navigation/footer/footer';
import Header from './features/navigation/header/header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
