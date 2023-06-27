import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BudgetCalculator from './Projects/BudgetCalculator/BudgetCalculator'

import './App.css';
import Navbar from './components/Navbar/Navbar';
import PasswordGenerator from './Projects/PasswordGenerator/PasswordGenerator';

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/budgetcalculator" element={<BudgetCalculator />} />
            <Route path="/passwordgenerator" element={<PasswordGenerator />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
