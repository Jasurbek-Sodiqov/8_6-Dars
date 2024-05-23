
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import Redux from './Redux.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={Redux}>
    <App />
    </Provider>
  
)
