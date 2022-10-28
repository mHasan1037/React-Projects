import './App.css';
import BirthReminder from './Projects/BirthdayReminder/BirthReminder';
import TourDisplay from './Projects/TourList/TourDisplay';
import TodoHome from './Projects/Todo/TodoHome';
import ReviewSlider from './Projects/ReviewSlider/ReviewSlider';

function App() {
  return (
    <div>
      <TodoHome />
      <ReviewSlider />
      <TourDisplay />
      <BirthReminder />
    </div>
  );
}

export default App;
