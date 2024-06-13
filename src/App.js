import './App.css';
import Parse from 'parse/dist/parse.min.js';
import FormularioProvider from './Contexts/FormularioProvider';
import AppRoutes from './Routes/routes';
import { AuthProvider } from './Contexts/AuthContext';

 const PARSE_APPLICATION_ID = '5Z11Y2PHsScAdvhRWfwNgOe20iLkllKlbXAGQkg6';
 const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
 const PARSE_JAVASCRIPT_KEY = 'eydoqq5gcnAmRcdZ0938uNpj6n5uziqvbgrMJZrD';
 
 Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
 Parse.serverURL = PARSE_HOST_URL;

 function App() {
  return (
    <AuthProvider>
      <FormularioProvider>
        <AppRoutes />
      </FormularioProvider>          
    </AuthProvider>
  );
 }
 export default App;