import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Route';
import 'react-day-picker/dist/style.css';
function App() {
  return (
      <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
