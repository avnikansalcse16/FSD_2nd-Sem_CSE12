// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World</h1>
//       <p>This is my first React app.</p>
//       <Cse12 />
//     </div>
//   );
// }

// export default App;

// //2nd Component
// function Cse12() {
//   return (
//     <div className="Cse12">
//       <h2>  Computer science Cse12</h2>
//       <p>This is the Computer science 12 component.</p>
//     </div>
//   );
// }

import Student from "./student";

function App(){ 
  return (
    <div className="App">
      <h1>Student Information</h1>
      <Student name="John Doe" course="CSE 12" marks={85} />
      <Student name="Jane Smith" course="CSE 12" marks={92} />
      <Student name="Alice Johnson" course="CSE 12" marks={78} />
    </div>
  );
}

