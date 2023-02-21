
import './App.css';
import {
  createBrowserRouter, RouterProvider, useSearchParams, createSearchParams
} from "react-router-dom";

const router = createBrowserRouter([
]);



function App() {
  const [queryParam, setQueryParam] = useSearchParams();
  const value = queryParam.get('type')

setQueryParam(
  createSearchParams({
      frunt: 'hello',
      xinchao: 'hi'
  }))
  return (
    
    <RouterProvider
    router={router}
   />
  )
 
}

export default App;
