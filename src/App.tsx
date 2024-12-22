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
        <ChemicalElement name='Hydrogen' symbol='H' atomicNumber={1} period={1} group={1} backgroundColor='lightcoral' />
        <ChemicalElement name='Lithium' symbol='Li' atomicNumber={3} period={2} group={1} backgroundColor='lightcoral' />
        <ChemicalElement name='Sodium' symbol='Na' atomicNumber={11} period={3} group={1} backgroundColor='lightcoral' />
        <ChemicalElement name='Potassium' symbol='K' atomicNumber={19} period={4} group={1} backgroundColor='lightcoral' />
        <ChemicalElement name='Rubidium' symbol='Rb' atomicNumber={37} period={5} group={1} backgroundColor='lightcoral' />
        <ChemicalElement name='Caesium' symbol='Cs' atomicNumber={55} period={6} group={1} backgroundColor='lightcoral' />
        <ChemicalElement name='Francium' symbol='Fr' atomicNumber={87} period={7} group={1} backgroundColor='lightcoral' />
      </div>

      <div className="group-two">
        <ChemicalElement name='Berylium' symbol='Be' atomicNumber={4} period={2} group={2} backgroundColor='lightcoral' />
        <ChemicalElement name='Magnesium' symbol='Mg' atomicNumber={12} period={3} group={2} backgroundColor='lightcoral' />
        <ChemicalElement name='Calcium' symbol='Ca' atomicNumber={20} period={4} group={2} backgroundColor='lightcoral' />
        <ChemicalElement name='Strontium' symbol='Sr' atomicNumber={38} period={5} group={2} backgroundColor='lightcoral' />
        <ChemicalElement name='Barium' symbol='Ba' atomicNumber={56} period={6} group={2} backgroundColor='lightcoral' />
        <ChemicalElement name='Radium' symbol='Ra' atomicNumber={88} period={7} group={2} backgroundColor='lightcoral' />
      </div>

      <div className="group-three">
        <ChemicalElement name='Scandium' symbol='Sc' atomicNumber={21} period={4} group={3} backgroundColor='lightblue' />
        <ChemicalElement name='Yttrium' symbol='Y' atomicNumber={39} period={5} group={3} backgroundColor='lightblue' />
        <ChemicalElement name='Lutetium' symbol='Lu' atomicNumber={71} period={6} group={3} backgroundColor='lightblue' />
        <ChemicalElement name='Lawrencium' symbol='Lr' atomicNumber={103} period={7} group={3} backgroundColor='lightblue' />
        <div className="f-block">
          <ChemicalElement name='Lanthanum' symbol='La' atomicNumber={57} period={0} group={3} backgroundColor='lightgreen' />
          <ChemicalElement name='Actinium' symbol='Ac' atomicNumber={89} period={0} group={3} backgroundColor='lightgreen' />
        </div>
      </div>

      <div className="group-four">
        <ChemicalElement name='Titanium' symbol='Ti' atomicNumber={22} period={4} group={4} backgroundColor='lightblue' />
        <ChemicalElement name='Zirconium' symbol='Zr' atomicNumber={40} period={5} group={4} backgroundColor='lightblue' />
        <ChemicalElement name='Hafnium' symbol='Hf' atomicNumber={72} period={6} group={4} backgroundColor='lightblue' />
        <ChemicalElement name='Rutherfordium' symbol='Rf' atomicNumber={104} period={7} group={4} backgroundColor='lightblue' />
        <div className="f-block">
          <ChemicalElement name='Cerium' symbol='Ce' atomicNumber={58} period={0} group={3} backgroundColor='lightgreen' />
          <ChemicalElement name='Thorium' symbol='Th' atomicNumber={90} period={0} group={3} backgroundColor='lightgreen' />
        </div>
      </div>

      <div className="group-five">
        <ChemicalElement name='Vanadium' symbol='V' atomicNumber={23} period={4} group={5} backgroundColor='lightblue' />
        <ChemicalElement name='Niobium' symbol='Nb' atomicNumber={41} period={5} group={5} backgroundColor='lightblue' />
        <ChemicalElement name='Tantalum' symbol='Ta' atomicNumber={73} period={6} group={5} backgroundColor='lightblue' />
        <ChemicalElement name='Dubnium' symbol='Db' atomicNumber={105} period={7} group={5} backgroundColor='lightblue' />
        <div className="f-block">
          <ChemicalElement name='Praseodymium' symbol='Pr' atomicNumber={59} period={0} group={5} backgroundColor='lightgreen' />
          <ChemicalElement name='Protactinium' symbol='Pa' atomicNumber={91} period={0} group={5} backgroundColor='lightgreen' />
        </div>
      </div>

      <div className="group-six">
        <ChemicalElement name='Chromium' symbol='Cr' atomicNumber={24} period={4} group={6} backgroundColor='lightblue' />
        <ChemicalElement name='Molybdenum' symbol='Mo' atomicNumber={42} period={5} group={6} backgroundColor='lightblue' />
        <ChemicalElement name='Tungsten' symbol='Ta' atomicNumber={73} period={6} group={6} backgroundColor='lightblue' />
        <ChemicalElement name='Seaborgium' symbol='Sg' atomicNumber={106} period={7} group={6} backgroundColor='lightblue' />
        <div className="f-block">
          <ChemicalElement name='Neodymium' symbol='Nd' atomicNumber={60} period={0} group={6} backgroundColor='lightgreen' />
          <ChemicalElement name='Uranium' symbol='U' atomicNumber={92} period={0} group={6} backgroundColor='lightgreen' />
        </div>
      </div>

      <div className="group-seven">
        <ChemicalElement name='Manganese' symbol='Mn' atomicNumber={25} period={4} group={7} backgroundColor='lightblue' />
        <ChemicalElement name='Technetium' symbol='Tc' atomicNumber={43} period={5} group={7} backgroundColor='lightblue' />
        <ChemicalElement name='Rhenium' symbol='Re' atomicNumber={75} period={6} group={7} backgroundColor='lightblue' />
        <ChemicalElement name='Bohrium' symbol='Bh' atomicNumber={107} period={7} group={7} backgroundColor='lightblue' />
        <div className="f-block">
          <ChemicalElement name='Promethium' symbol='Pm' atomicNumber={61} period={0} group={7} backgroundColor='lightgreen' />
          <ChemicalElement name='Neptunium' symbol='Np' atomicNumber={93} period={0} group={7} backgroundColor='lightgreen' />
        </div>
      </div>

      <div className="group-eight">
        <ChemicalElement name='Iron' symbol='Fe' atomicNumber={26} period={4} group={8} backgroundColor='lightblue' />
        <ChemicalElement name='Ruthenium' symbol='Ru' atomicNumber={44} period={5} group={8} backgroundColor='lightblue' />
        <ChemicalElement name='Osmium' symbol='Os' atomicNumber={76} period={6} group={8} backgroundColor='lightblue' />
        <ChemicalElement name='Hassium' symbol='Hs' atomicNumber={108} period={7} group={8} backgroundColor='lightblue' />
        <div className="f-block">
          <ChemicalElement name='Samarium' symbol='Sm' atomicNumber={62} period={0} group={8} backgroundColor='lightgreen' />
          <ChemicalElement name='Plutonium' symbol='Pu' atomicNumber={94} period={0} group={8} backgroundColor='lightgreen' />
        </div>
      </div>

      <div className="group-nine">
        <ChemicalElement name='Cobalt' symbol='Co' atomicNumber={27} period={4} group={9} backgroundColor='lightblue' />
        <ChemicalElement name='Rhodium' symbol='Rh' atomicNumber={45} period={5} group={9} backgroundColor='lightblue' />
        <ChemicalElement name='Iridium' symbol='Ir' atomicNumber={77} period={6} group={9} backgroundColor='lightblue' />
        <ChemicalElement name='Meitnerium' symbol='Mt' atomicNumber={109} period={7} group={9} backgroundColor='lightblue' />
        <div className="f-block">
          <ChemicalElement name='Europium' symbol='Eu' atomicNumber={63} period={0} group={9} backgroundColor='lightgreen' />
          <ChemicalElement name='Americium' symbol='Am' atomicNumber={95} period={0} group={9} backgroundColor='lightgreen' />
        </div>
      </div>

      <div className="group-ten">
        <ChemicalElement name='Nickel' symbol='Ni' atomicNumber={28} period={4} group={10} backgroundColor='lightblue' />
        <ChemicalElement name='Palladium' symbol='Pd' atomicNumber={46} period={5} group={10} backgroundColor='lightblue' />
        <ChemicalElement name='Platinum' symbol='Pt' atomicNumber={78} period={6} group={10} backgroundColor='lightblue' />
        <ChemicalElement name='Darmstadtium' symbol='Ds' atomicNumber={110} period={7} group={10} backgroundColor='lightblue' />
        <div className="f-block">
          <ChemicalElement name='Gadolinium' symbol='Gd' atomicNumber={64} period={0} group={10} backgroundColor='lightgreen' />
          <ChemicalElement name='Curium' symbol='Cm' atomicNumber={96} period={0} group={10} backgroundColor='lightgreen' />
        </div>
      </div>

      <div className="group-eleven">
        <ChemicalElement name='Copper' symbol='Cu' atomicNumber={29} period={4} group={11} backgroundColor='lightblue' />
        <ChemicalElement name='Silver' symbol='Ag' atomicNumber={47} period={5} group={11} backgroundColor='lightblue' />
        <ChemicalElement name='Gold' symbol='Au' atomicNumber={79} period={6} group={11} backgroundColor='lightblue' />
        <ChemicalElement name='Roentgenium' symbol='Rg' atomicNumber={111} period={7} group={11} backgroundColor='lightblue' />
        <div className="f-block">
          <ChemicalElement name='Terbium' symbol='Tb' atomicNumber={65} period={0} group={11} backgroundColor='lightgreen' />
          <ChemicalElement name='Berkelium' symbol='Bk' atomicNumber={97} period={0} group={11} backgroundColor='lightgreen' />
        </div>
      </div>

      <div className="group-twelve">
        <ChemicalElement name='Zinc' symbol='Zn' atomicNumber={30} period={4} group={12} backgroundColor='lightblue' />
        <ChemicalElement name='Cadmium' symbol='Cd' atomicNumber={48} period={5} group={12} backgroundColor='lightblue' />
        <ChemicalElement name='Mercury' symbol='Hg' atomicNumber={80} period={6} group={12} backgroundColor='lightblue' />
        <ChemicalElement name='Copernicium' symbol='Cn' atomicNumber={112} period={7} group={12} backgroundColor='lightblue' />
        <div className="f-block">
          <ChemicalElement name='Dysprosium' symbol='Dy' atomicNumber={66} period={0} group={12} backgroundColor='lightgreen' />
          <ChemicalElement name='Californium' symbol='Cf' atomicNumber={98} period={0} group={12} backgroundColor='lightgreen' />
        </div>
      </div>

      <div className="group-thirteen">
        <ChemicalElement name='Boron' symbol='B' atomicNumber={5} period={2} group={13} backgroundColor='lemonchiffon' />
        <ChemicalElement name='Aluminium' symbol='Al' atomicNumber={13} period={3} group={13} backgroundColor='lemonchiffon' />
        <ChemicalElement name='Gallium' symbol='Ga' atomicNumber={31} period={4} group={13} backgroundColor='lemonchiffon' />
        <ChemicalElement name='Indium' symbol='In' atomicNumber={49} period={5} group={13} backgroundColor='lemonchiffon' />
        <ChemicalElement name='Thallium' symbol='Tl' atomicNumber={81} period={6} group={13} backgroundColor='lemonchiffon' />
        <ChemicalElement name='Nihonium' symbol='Nh' atomicNumber={113} period={7} group={13} backgroundColor='lemonchiffon' />
        <div className="f-block">
          <ChemicalElement name='Holmium' symbol='Ho' atomicNumber={67} period={0} group={13} backgroundColor='lightgreen' />
          <ChemicalElement name='Einsteinium' symbol='Es' atomicNumber={99} period={0} group={13} backgroundColor='lightgreen' />
        </div>
      </div>

      <div className="group-fourteen">
        <ChemicalElement name='' symbol='' atomicNumber={5} period={2} group={14} backgroundColor='lemonchiffon' />
        <ChemicalElement name='' symbol='' atomicNumber={13} period={3} group={14} backgroundColor='lemonchiffon' />
        <ChemicalElement name='' symbol='' atomicNumber={31} period={4} group={14} backgroundColor='lemonchiffon' />
        <ChemicalElement name='' symbol='' atomicNumber={49} period={5} group={14} backgroundColor='lemonchiffon' />
        <ChemicalElement name='' symbol='' atomicNumber={81} period={6} group={14} backgroundColor='lemonchiffon' />
        <ChemicalElement name='' symbol='' atomicNumber={113} period={7} group={14} backgroundColor='lemonchiffon' />
        <div className="f-block">
          <ChemicalElement name='' symbol='' atomicNumber={67} period={0} group={14} backgroundColor='lightgreen' />
          <ChemicalElement name='' symbol='' atomicNumber={99} period={0} group={14} backgroundColor='lightgreen' />
        </div>
      </div>

      <div className="group-fifteen">
        <ChemicalElement name='' symbol='' atomicNumber={5} period={2} group={15} backgroundColor='lemonchiffon' />
        <ChemicalElement name='' symbol='' atomicNumber={13} period={3} group={15} backgroundColor='lemonchiffon' />
        <ChemicalElement name='' symbol='' atomicNumber={31} period={4} group={15} backgroundColor='lemonchiffon' />
        <ChemicalElement name='' symbol='' atomicNumber={49} period={5} group={15} backgroundColor='lemonchiffon' />
        <ChemicalElement name='' symbol='' atomicNumber={81} period={6} group={15} backgroundColor='lemonchiffon' />
        <ChemicalElement name='' symbol='' atomicNumber={113} period={7} group={15} backgroundColor='lemonchiffon' />
        <div className="f-block">
          <ChemicalElement name='' symbol='' atomicNumber={67} period={0} group={15} backgroundColor='lightgreen' />
          <ChemicalElement name='' symbol='' atomicNumber={99} period={0} group={15} backgroundColor='lightgreen' />
        </div>
      </div>

      <div className="group-sixteen">
        <ChemicalElement name='' symbol='' atomicNumber={5} period={2} group={16} backgroundColor='lemonchiffon' />
        <ChemicalElement name='' symbol='' atomicNumber={13} period={3} group={16} backgroundColor='lemonchiffon' />
        <ChemicalElement name='' symbol='' atomicNumber={31} period={4} group={16} backgroundColor='lemonchiffon' />
        <ChemicalElement name='' symbol='' atomicNumber={49} period={5} group={16} backgroundColor='lemonchiffon' />
        <ChemicalElement name='' symbol='' atomicNumber={81} period={6} group={16} backgroundColor='lemonchiffon' />
        <ChemicalElement name='' symbol='' atomicNumber={113} period={7} group={16} backgroundColor='lemonchiffon' />
        <div className="f-block">
          <ChemicalElement name='' symbol='' atomicNumber={67} period={0} group={16} backgroundColor='lightgreen' />
          <ChemicalElement name='' symbol='' atomicNumber={99} period={0} group={16} backgroundColor='lightgreen' />
        </div>
      </div>

      <div className="group-seventeen">
        <ChemicalElement name='' symbol='' atomicNumber={5} period={2} group={17} backgroundColor='lemonchiffon' />
        <ChemicalElement name='' symbol='' atomicNumber={13} period={3} group={17} backgroundColor='lemonchiffon' />
        <ChemicalElement name='' symbol='' atomicNumber={31} period={4} group={17} backgroundColor='lemonchiffon' />
        <ChemicalElement name='' symbol='' atomicNumber={49} period={5} group={17} backgroundColor='lemonchiffon' />
        <ChemicalElement name='' symbol='' atomicNumber={81} period={6} group={17} backgroundColor='lemonchiffon' />
        <ChemicalElement name='' symbol='' atomicNumber={113} period={7} group={17} backgroundColor='lemonchiffon' />
      </div>

      <div className="group-eighteen">
        <ChemicalElement name='Helium' symbol='He' atomicNumber={2} period={1} group={18} backgroundColor='lightcoral' />
        <ChemicalElement name='' symbol='' atomicNumber={5} period={2} group={18} backgroundColor='lemonchiffon' />
        <ChemicalElement name='' symbol='' atomicNumber={13} period={3} group={18} backgroundColor='lemonchiffon' />
        <ChemicalElement name='' symbol='' atomicNumber={31} period={4} group={18} backgroundColor='lemonchiffon' />
        <ChemicalElement name='' symbol='' atomicNumber={49} period={5} group={18} backgroundColor='lemonchiffon' />
        <ChemicalElement name='' symbol='' atomicNumber={81} period={6} group={18} backgroundColor='lemonchiffon' />
        <ChemicalElement name='' symbol='' atomicNumber={113} period={7} group={18} backgroundColor='lemonchiffon' />
      </div>
    </div>
  );
};

export default App;
