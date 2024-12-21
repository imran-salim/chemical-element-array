import './App.css';

import { ChemicalElement } from './stories/ChemicalElement';

// const Group = () => {
//   return (

//   );
// };

const App = () => {
  return (
    <div className="table">
      <div className="group-one">
        <ChemicalElement name='Hydrogen' symbol='H' atomicNumber={1} period={1} group={1} backgroundColor='deepskyblue' />
        <ChemicalElement name='Lithium' symbol='Li' atomicNumber={3} period={2} group={1} backgroundColor='lightskyblue' />
        <ChemicalElement name='Sodium' symbol='Na' atomicNumber={11} period={3} group={1} backgroundColor='lightyellow' />
        <ChemicalElement name='Potassium' symbol='K' atomicNumber={19} period={4} group={1} backgroundColor='yellow' />
        <ChemicalElement name='Rubidium' symbol='Rb' atomicNumber={37} period={5} group={1} backgroundColor='crimson' />
        <ChemicalElement name='Caesium' symbol='Cs' atomicNumber={55} period={6} group={1} backgroundColor='lightgreen' />
        <ChemicalElement name='Francium' symbol='Fr' atomicNumber={87} period={7} group={1} backgroundColor='lightgrey' />
      </div>

      <div className="group-two">
        <ChemicalElement name='Berylium' symbol='Be' atomicNumber={4} period={2} group={2} backgroundColor='lightblue' />
        <ChemicalElement name='Magnesium' symbol='Mg' atomicNumber={12} period={3} group={2} backgroundColor='grey' />
        <ChemicalElement name='Calcium' symbol='Ca' atomicNumber={20} period={4} group={2} backgroundColor='lime' />
        <ChemicalElement name='Strontium' symbol='Sr' atomicNumber={38} period={5} group={2} backgroundColor='pink' />
        <ChemicalElement name='Barium' symbol='Ba' atomicNumber={56} period={6} group={2} backgroundColor='crimson' />
        <ChemicalElement name='Radium' symbol='Ra' atomicNumber={88} period={7} group={2} backgroundColor='violet' />
      </div>

      <div className="group-three">
        <ChemicalElement name='Scandium' symbol='Sc' atomicNumber={21} period={4} group={3} backgroundColor='turquoise' />
        <ChemicalElement name='Yttrium' symbol='Y' atomicNumber={39} period={5} group={3} backgroundColor='orange' />
        <ChemicalElement name='Lutetium' symbol='Lu' atomicNumber={71} period={6} group={3} backgroundColor='fuchsia' />
        <ChemicalElement name='Lawrencium' symbol='Lr' atomicNumber={103} period={7} group={3} backgroundColor='maroon' />
        <div className="f-block">
          <ChemicalElement name='Lanthanum' symbol='La' atomicNumber={57} period={0} group={3} backgroundColor='darksalmon' />
          <ChemicalElement name='Actinium' symbol='Ac' atomicNumber={89} period={0} group={3} backgroundColor='slateblue' />
        </div>
      </div>

      <div className="group-four">
        <ChemicalElement name='Titanium' symbol='Ti' atomicNumber={22} period={4} group={4} backgroundColor='' />
        <ChemicalElement name='Zirconium' symbol='Zr' atomicNumber={40} period={5} group={4} backgroundColor='' />
        <ChemicalElement name='Hafnium' symbol='Hf' atomicNumber={72} period={6} group={4} backgroundColor='' />
        <ChemicalElement name='Rutherfordium' symbol='Rf' atomicNumber={104} period={7} group={4} backgroundColor='' />
        <div className="f-block">
          <ChemicalElement name='Cerium' symbol='Ce' atomicNumber={58} period={0} group={3} backgroundColor='' />
          <ChemicalElement name='Thorium' symbol='Th' atomicNumber={90} period={0} group={3} backgroundColor='' />
        </div>
      </div>

      <div className="group-five">
        <ChemicalElement name='Vanadium' symbol='V' atomicNumber={23} period={4} group={5} backgroundColor='' />
        <ChemicalElement name='Niobium' symbol='Nb' atomicNumber={41} period={5} group={5} backgroundColor='' />
        <ChemicalElement name='Tantalum' symbol='Ta' atomicNumber={73} period={6} group={5} backgroundColor='' />
        <ChemicalElement name='Dubnium' symbol='Db' atomicNumber={105} period={7} group={5} backgroundColor='' />
        <div className="f-block">
          <ChemicalElement name='Praseodymium' symbol='Pr' atomicNumber={59} period={0} group={5} backgroundColor='' />
          <ChemicalElement name='Protactinium' symbol='Pa' atomicNumber={91} period={0} group={5} backgroundColor='' />
        </div>
      </div>

      <div className="group-six">
        <ChemicalElement name='Chromium' symbol='Cr' atomicNumber={24} period={4} group={6} backgroundColor='' />
        <ChemicalElement name='Molybdenum' symbol='Mo' atomicNumber={42} period={5} group={6} backgroundColor='' />
        <ChemicalElement name='Tungsten' symbol='Ta' atomicNumber={73} period={6} group={6} backgroundColor='' />
        <ChemicalElement name='Seaborgium' symbol='Sg' atomicNumber={106} period={7} group={6} backgroundColor='' />
        <div className="f-block">
          <ChemicalElement name='Neodymium' symbol='Nd' atomicNumber={60} period={0} group={6} backgroundColor='' />
          <ChemicalElement name='Uranium' symbol='U' atomicNumber={92} period={0} group={6} backgroundColor='' />
        </div>
      </div>

      <div className="group-seven">
        <ChemicalElement name='' symbol='' atomicNumber={21} period={4} group={7} backgroundColor='turquoise' />
        <ChemicalElement name='Yttrium' symbol='Y' atomicNumber={39} period={5} group={7} backgroundColor='orange' />
        <ChemicalElement name='Lutetium' symbol='Lu' atomicNumber={71} period={6} group={7} backgroundColor='fuchsia' />
        <ChemicalElement name='Lawrencium' symbol='Lr' atomicNumber={103} period={7} group={7} backgroundColor='maroon' />
        <div className="f-block">
          <ChemicalElement name='Lanthanum' symbol='La' atomicNumber={57} period={0} group={7} backgroundColor='darksalmon' />
          <ChemicalElement name='Actinium' symbol='Ac' atomicNumber={89} period={0} group={7} backgroundColor='slateblue' />
        </div>
      </div>

      <div className="group-eight">
        <ChemicalElement name='Scandium' symbol='Sc' atomicNumber={21} period={4} group={3} backgroundColor='turquoise' />
        <ChemicalElement name='Yttrium' symbol='Y' atomicNumber={39} period={5} group={3} backgroundColor='orange' />
        <ChemicalElement name='Lutetium' symbol='Lu' atomicNumber={71} period={6} group={3} backgroundColor='fuchsia' />
        <ChemicalElement name='Lawrencium' symbol='Lr' atomicNumber={103} period={7} group={3} backgroundColor='maroon' />
        <div className="f-block">
          <ChemicalElement name='Lanthanum' symbol='La' atomicNumber={57} period={0} group={3} backgroundColor='darksalmon' />
          <ChemicalElement name='Actinium' symbol='Ac' atomicNumber={89} period={0} group={3} backgroundColor='slateblue' />
        </div>
      </div>

      <div className="group-nine">
        <ChemicalElement name='Scandium' symbol='Sc' atomicNumber={21} period={4} group={3} backgroundColor='turquoise' />
        <ChemicalElement name='Yttrium' symbol='Y' atomicNumber={39} period={5} group={3} backgroundColor='orange' />
        <ChemicalElement name='Lutetium' symbol='Lu' atomicNumber={71} period={6} group={3} backgroundColor='fuchsia' />
        <ChemicalElement name='Lawrencium' symbol='Lr' atomicNumber={103} period={7} group={3} backgroundColor='maroon' />
        <div className="f-block">
          <ChemicalElement name='Lanthanum' symbol='La' atomicNumber={57} period={0} group={3} backgroundColor='darksalmon' />
          <ChemicalElement name='Actinium' symbol='Ac' atomicNumber={89} period={0} group={3} backgroundColor='slateblue' />
        </div>
      </div>

      <div className="group-ten">
        <ChemicalElement name='Scandium' symbol='Sc' atomicNumber={21} period={4} group={3} backgroundColor='turquoise' />
        <ChemicalElement name='Yttrium' symbol='Y' atomicNumber={39} period={5} group={3} backgroundColor='orange' />
        <ChemicalElement name='Lutetium' symbol='Lu' atomicNumber={71} period={6} group={3} backgroundColor='fuchsia' />
        <ChemicalElement name='Lawrencium' symbol='Lr' atomicNumber={103} period={7} group={3} backgroundColor='maroon' />
        <div className="f-block">
          <ChemicalElement name='Lanthanum' symbol='La' atomicNumber={57} period={0} group={3} backgroundColor='darksalmon' />
          <ChemicalElement name='Actinium' symbol='Ac' atomicNumber={89} period={0} group={3} backgroundColor='slateblue' />
        </div>
      </div>

      <div className="group-eleven">
        <ChemicalElement name='Scandium' symbol='Sc' atomicNumber={21} period={4} group={3} backgroundColor='turquoise' />
        <ChemicalElement name='Yttrium' symbol='Y' atomicNumber={39} period={5} group={3} backgroundColor='orange' />
        <ChemicalElement name='Lutetium' symbol='Lu' atomicNumber={71} period={6} group={3} backgroundColor='fuchsia' />
        <ChemicalElement name='Lawrencium' symbol='Lr' atomicNumber={103} period={7} group={3} backgroundColor='maroon' />
        <div className="f-block">
          <ChemicalElement name='Lanthanum' symbol='La' atomicNumber={57} period={0} group={3} backgroundColor='darksalmon' />
          <ChemicalElement name='Actinium' symbol='Ac' atomicNumber={89} period={0} group={3} backgroundColor='slateblue' />
        </div>
      </div>

      <div className="group-twelve">
        <ChemicalElement name='Scandium' symbol='Sc' atomicNumber={21} period={4} group={3} backgroundColor='turquoise' />
        <ChemicalElement name='Yttrium' symbol='Y' atomicNumber={39} period={5} group={3} backgroundColor='orange' />
        <ChemicalElement name='Lutetium' symbol='Lu' atomicNumber={71} period={6} group={3} backgroundColor='fuchsia' />
        <ChemicalElement name='Lawrencium' symbol='Lr' atomicNumber={103} period={7} group={3} backgroundColor='maroon' />
        <div className="f-block">
          <ChemicalElement name='Lanthanum' symbol='La' atomicNumber={57} period={0} group={3} backgroundColor='darksalmon' />
          <ChemicalElement name='Actinium' symbol='Ac' atomicNumber={89} period={0} group={3} backgroundColor='slateblue' />
        </div>
      </div>
    </div>
  );
};

export default App;
