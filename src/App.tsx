import './App.css';

import { ChemicalElement } from './stories/ChemicalElement';

// const Group = () => {
//   return (

//   );
// };

const App = () => {
  return (
    <>
      <ChemicalElement name='Hydrogen' symbol='H' atomicNumber={1} period={1} group={1} backgroundColor='deepskyblue' />
      <ChemicalElement name='Lithium' symbol='Li' atomicNumber={3} period={2} group={1} backgroundColor='lightskyblue' />
      <ChemicalElement name='Sodium' symbol='Na' atomicNumber={11} period={3} group={1} backgroundColor='lightyellow' />
      <ChemicalElement name='Potassium' symbol='K' atomicNumber={19} period={4} group={1} backgroundColor='yellow' />
      <ChemicalElement name='Rubidium' symbol='Rb' atomicNumber={37} period={5} group={1} backgroundColor='crimson' />
      <ChemicalElement name='Caesium' symbol='Cs' atomicNumber={55} period={6} group={1} backgroundColor='lightgreen' />
      <ChemicalElement name='Francium' symbol='Fr' atomicNumber={87} period={7} group={1} backgroundColor='lightgrey' />

      {/* <ChemicalElement name='Berylium' symbol='Be' atomicNumber={4} period={2} group={2} backgroundColor='lightnavy' /> */}
    </>
  );
};

export default App;
