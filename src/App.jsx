import GlobalForm from './components/GlobalFormComponent/GlobalForm';
import { CompanyFormPage } from './pages/CompanyFormPage/CompanyFormPage'
import { UserFormPage } from './pages/UserFormPage/UserFormPage';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
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
          <Route path="/form" element={<GlobalForm/>} />
          <Route path="*" element={<Navigate to="/form"/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;