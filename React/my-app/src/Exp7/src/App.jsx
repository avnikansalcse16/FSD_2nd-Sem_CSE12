import Studentcard from "./Studentcard";
function App() {
  return (
    <div>
      <h1>Exp-7 Student Card</h1>
      <Studentcard name="Priya" marks={30} grade="A" />
       <Studentcard name="leena" marks={40} grade="A" />
       <Studentcard name="pranal" marks={30} grade="A" />
    </div>
  );
}
export default App;