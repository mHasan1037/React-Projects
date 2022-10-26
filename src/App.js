import './App.css';
import BirthReminder from './Projects/BirthdayReminder/BirthReminder';
import TourDisplay from './Projects/TourList/TourDisplay';
import TodoHome from './Projects/Todo/TodoHome';

function App() {
  return (
    <div>
      <TodoHome />
      <TourDisplay />
      <BirthReminder />
    </div>
  );
}

export default App;
