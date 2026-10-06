import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '@fontsource-variable/inter'
import 'material-symbols/outlined.css'
import './index.css'
import { QuestionProvider } from './context/QuestionContext.jsx'

createRoot(document.getElementById('root')).render(
    <QuestionProvider>
      <App />
    </QuestionProvider>
)
