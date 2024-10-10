// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Apple_class from './component/Apple'
import Props_sample from './component/Props'
import Sample_class from './component/Sample'
import State_sample from './component/State'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <h2>count {count}</h2>
//       <button onClick={() => count>0 && setCount((count) => count - 1)}>
//            -
//         </button>
//         <button onClick={() => setCount((count) => count + 1)}>
//            +
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }



// function App() {
//   const data=[
//     {id:1,name:"suni",age:24},
//     {id:2,name:"sasi",age:54},
//     {id:3,name:"sura",age:24}
//   ]
//   return (
//     <>
//     <h1>Student Details</h1>
//     <table>
//       <thead>
//         <th>Id</th>
//         <th>Name</th>
//         <th>Age</th>
//       </thead>
//       <tbody>
//         {data.map((element)=>(
//           <tr key={element.id}>
//             <td>{element.id}</td>
//             <td>{element.name}</td>
//             <td>{element.age}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//     </>
//   )
// }

// export default App






// function App() {
//   return(
//     <>
//     <div>
//       <Sample_class/>
//     </div>
//     </>
//   )
// }


function App() {
  return(
    <>
    <div>
      <Apple_class/>
      <State_sample/>
      <Props_sample  color="yellow" width="300px"/>
    </div>
    </>
  )
}

export default App


