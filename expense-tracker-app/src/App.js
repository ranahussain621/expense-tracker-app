import './App.css';
import Child from './Components/child';
import { TransactionProvider } from './Components/Context/context';

function App() {
  return (
    <TransactionProvider>
      <Child />
    </TransactionProvider>

  );
}

export default App;
