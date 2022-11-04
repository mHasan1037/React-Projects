import './App.css';
import BirthReminder from './Projects/BirthdayReminder/BirthReminder';
import TourDisplay from './Projects/TourList/TourDisplay';
import TodoHome from './Projects/Todo/TodoHome';
import ReviewSlider from './Projects/ReviewSlider/ReviewSlider';
import PaginationFilter from './Projects/PaginationFilter/PaginationFilter';

function App() {
  return (
    <div>
      <PaginationFilter />
      <TodoHome />
      <ReviewSlider />
      <TourDisplay />
      <BirthReminder />
    </div>
  );
}

export default App;
