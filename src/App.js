import logo from './logo.svg';
import './App.css';
import { Product } from './Components/Product';

function App() {
  return (
    <div class="container">
      <div class="page">
        <h1 class="page__title">ROZETKA</h1>
          <div class="product">
            <Product></Product>
          </div>
        </div>
    </div>
  );
}

export default App;
