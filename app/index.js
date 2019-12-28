import React, {useState, useRef} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { ThemeProvider } from './contexts/theme'
import Nav from './components/Nav'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Loading from './components/Loading'

const Popular = React.lazy(() => import('./components/Popular'))
const Battle = React.lazy(() => import('./components/Battle'))
const Results = React.lazy(() => import('./components/Results'))

const App = (props) => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => setTheme((pTheme) => pTheme === 'light' ? 'dark' : 'light')

  return (
    <Router>
      <ThemeProvider value={theme}>
        <div className={theme}>
          <div className='container'>
            <Nav onToggleTheme={toggleTheme} />

            <React.Suspense fallback={<Loading />} >
              <Switch>
                <Route exact path='/' component={Popular} />
                <Route exact path='/battle' component={Battle} />
                <Route path='/battle/results' component={Results} />
                <Route render={() => <h1>404</h1>} />
              </Switch>
            </React.Suspense>
          </div>
        </div>
      </ThemeProvider>
    </Router>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
