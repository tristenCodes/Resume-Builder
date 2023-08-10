import './App.css';
import './styles/input-forms.less'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import PersonalInfoForm from './components/editor/PersonalInfoForm';
import ExperienceInfoForm from './components/editor/ExperienceInfoForm';
import EducationInfoForm from './components/editor/EducationInfoForm';


function App() {
  return (
    <div className='main__container'>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className='input--forms'>
        <PersonalInfoForm />
        <ExperienceInfoForm />
        <EducationInfoForm />
        </div>
        <div className='resume'>
          Resume
        </div>
      </LocalizationProvider>
    </div>
  );
}

export default App;
