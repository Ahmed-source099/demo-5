import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const reactElement = {

    type: 'a' ,
    props:{
        href: "https://google.com",
        target: '_blank'
    },
    children: 'Click me visit google'
}

function MyApp(){
    return(
        <div>
            <h1>Custom react app</h1>
        </div>
    )
}
const AnotherElement = (
        <a href="https://google.com" target='_blank' > Visit Google</a>
)

const areactElement = React.createElement(
    'a',
    {href:'https://google.com', target:"_blank"},
    'Click  to visit google'
)

createRoot(document.getElementById('root')).render(

    <App/>
  
)
