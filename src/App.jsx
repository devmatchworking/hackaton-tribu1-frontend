import { UserForm } from "./components/UserForm/UserForm";
import { FormContext, FormProvider } from "./context/Form-Context";
function App() {
  return (
    <>
      <FormProvider>
        <UserForm />
      </FormProvider>
    </>
  );
}
export default App;