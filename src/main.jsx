import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import './index.css'

// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { SimpleForm } from './02-useEfect/SimpleForm'
// import { FormWithCustomHook } from './02-useEfect/FormWithCustomHook'
// import { MultripleCustomHook } from './03-examples/MultripleCustomHook'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { MultripleCustomHook } from './05-useLayoutEfect/layout'
// import { Memorize } from './memos/Memorize'
// import { MemoHook } from './memos/MemoHook'
// import { CallBackHook } from './06-memos/CallBackHook'
// import './08-useReducer/intro-reducer'
// import { Padre } from './07-tarea-memo/'
// import { TodoApp } from './08-useReducer/todoApp'
import { MainApp } from './09-useContext/MainApp'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <MainApp />
    </BrowserRouter>

)
