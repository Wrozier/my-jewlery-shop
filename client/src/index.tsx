import ReactDOM from 'react-dom/client';
import './tailwind.css'; // Import Tailwind CSS
import App from './App'; // Ensure this path is correct
import reportWebVitals from './reportWebVitals';
import ShopContextProvider from './Context/ShopContext'; // Ensure this path is correct

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
);

reportWebVitals();
