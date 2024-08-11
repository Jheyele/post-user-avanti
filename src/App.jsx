import PostList from './components/PostList'
import PostForm from './components/PostForm'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PostList/>}/>
        <Route path='/create-post' element={<PostForm/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
