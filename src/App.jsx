import { CompanyFormPage } from './pages/CompanyFormPage/CompanyFormPage'
import { UserFormPage } from './pages/UserFormPage/UserFormPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    // <>
    //   <CompanyFormPage />
    //   <UserFormPage />
    // </>
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/user" element={<UserFormPage/>} />
          <Route path="/company" element={<CompanyFormPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;