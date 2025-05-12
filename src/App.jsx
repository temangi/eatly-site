import './App.css'
import HomePage from './pages/HomePage'
import {BrowserRouter , Routes , Route} from "react-router-dom"

//git checkout - b создоют ветку
//feat/ header ;жаны нерсе
//fix/header ; озгортуу
//git add. изменения кошуу учун
//git commit  -m ; сообщение 
//git push origin ;название ветки
function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App
