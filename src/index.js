import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import logo from './Image/mypic.jpg'
import Info from './components/Info'
import Interest from './components/Interest'
import About from './components/About'
import Footer from './components/Footer'


function App(){ 
  return ( 
     <div className='wrapper'>
       <div className="card">
    <Info  image={logo}/>
    <div className="card-body px-4">
     <About />
     <Interest />
    </div>
    <div>
     <Footer />
    </div>
  </div>
     </div>
  )
}

const root= ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)