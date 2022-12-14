import './App.css';
import BirthReminder from './Projects/BirthdayReminder/BirthReminder';
import TourDisplay from './Projects/TourList/TourDisplay';
import TodoHome from './Projects/Todo/TodoHome';
import ReviewSlider from './Projects/ReviewSlider/ReviewSlider';
import PaginationFilter from './Projects/PaginationFilter/PaginationFilter';
import TabsButtons from './Projects/TabsButtons/TabsButtons';
import AutoSlider from './Projects/AutoSlider/AutoSlider';
import GenerateText from './Projects/GenerateText/GenerateText';
import GroceryList from './Projects/GroceryList/GroceryList';
import BudgetCalculator from './Projects/BudgetCalculator/BudgetCalculator';

function App() {
  return (
    <div>
      <BudgetCalculator />
      <GroceryList />
      <AutoSlider />
      <PaginationFilter />
      <GenerateText />
      <TodoHome />
      <ReviewSlider />
      <TabsButtons />
      <TourDisplay />
      <BirthReminder />
    </div>
  );
}

export default App;
