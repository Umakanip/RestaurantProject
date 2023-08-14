import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar';
import Diningout from './component/diningout';
import Booking from './component/booking';
import Services from './component/ourservices';
import Explorefoods from './component/explorefoods';
import Footer from './component/footer';
import Deals from './component/deals';

function App() {
  return (
    <div>
      <Navbar />
      <Diningout />
      <Booking />
      <Services />
      <Explorefoods />
      <Deals />
      <Footer />
    </div>
  );
}

export default App;
