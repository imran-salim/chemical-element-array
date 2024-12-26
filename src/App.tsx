import './App.css';

import { ChemicalElement } from './stories/ChemicalElement';

const App = () => {
  return (
    <div className="table">
      <div className="group-one">
        <ChemicalElement name='Hydrogen' symbol='H' atomicNumber={1} atomicMass={1.0080} standardState='Gas' period={1} group={1} backgroundColor='lightcoral' />
        <ChemicalElement name='Lithium' symbol='Li' atomicNumber={3} atomicMass={7.0} standardState='Solid' period={2} group={1} backgroundColor='lightcoral' />
        <ChemicalElement name='Sodium' symbol='Na' atomicNumber={11} atomicMass={22.9897693} standardState='Solid' period={3} group={1} backgroundColor='lightcoral' />
        <ChemicalElement name='Potassium' symbol='K' atomicNumber={19} atomicMass={39.0983} standardState='Solid' period={4} group={1} backgroundColor='lightcoral' />
        <ChemicalElement name='Rubidium' symbol='Rb' atomicNumber={37} atomicMass={85.468} standardState='Solid' period={5} group={1} backgroundColor='lightcoral' />
        <ChemicalElement name='Caesium' symbol='Cs' atomicNumber={55} atomicMass={132.9054520} standardState='Solid' period={6} group={1} backgroundColor='lightcoral' />
        <ChemicalElement name='Francium' symbol='Fr' atomicNumber={87} atomicMass={223.01973} standardState='Solid' period={7} group={1} backgroundColor='lightcoral' />
      </div>

      <div className="group-two">
        <ChemicalElement name='Berylium' symbol='Be' atomicNumber={4} atomicMass={9.012183} standardState='Solid' period={2} group={2} backgroundColor='lightcoral' />
        <ChemicalElement name='Magnesium' symbol='Mg' atomicNumber={12} atomicMass={24.305} standardState='Solid' period={3} group={2} backgroundColor='lightcoral' />
        <ChemicalElement name='Calcium' symbol='Ca' atomicNumber={20} atomicMass={40.08} standardState='Solid' period={4} group={2} backgroundColor='lightcoral' />
        <ChemicalElement name='Strontium' symbol='Sr' atomicNumber={38} atomicMass={87.62} standardState='Solid' period={5} group={2} backgroundColor='lightcoral' />
        <ChemicalElement name='Barium' symbol='Ba' atomicNumber={56} atomicMass={137.33} standardState='Solid' period={6} group={2} backgroundColor='lightcoral' />
        <ChemicalElement name='Radium' symbol='Ra' atomicNumber={88} atomicMass={226.02541} standardState='Solid' period={7} group={2} backgroundColor='lightcoral' />
      </div>

      <div className="group-three">
        <ChemicalElement name='Scandium' symbol='Sc' atomicNumber={21} atomicMass={44.95591} standardState='Solid' period={4} group={3} backgroundColor='lightblue' />
        <ChemicalElement name='Yttrium' symbol='Y' atomicNumber={39} atomicMass={88.90584} standardState='Solid' period={5} group={3} backgroundColor='lightblue' />
        <ChemicalElement name='Lutetium' symbol='Lu' atomicNumber={71} atomicMass={174.9667} standardState='Solid' period={6} group={3} backgroundColor='lightblue' />
        <ChemicalElement name='Lawrencium' symbol='Lr' atomicNumber={103} atomicMass={266.120} standardState='Solid' period={7} group={3} backgroundColor='lightblue' />
        <div className="f-block">
          <ChemicalElement name='Lanthanum' symbol='La' atomicNumber={57} atomicMass={138.9055} standardState='Solid' period={0} group={3} backgroundColor='lightgreen' />
          <ChemicalElement name='Actinium' symbol='Ac' atomicNumber={89} atomicMass={227.02775} standardState='Solid' period={0} group={3} backgroundColor='lightgreen' />
        </div>
      </div>

      <div className="group-four">
        <ChemicalElement name='Titanium' symbol='Ti' atomicNumber={22} atomicMass={47.867} standardState='Solid' period={4} group={4} backgroundColor='lightblue' />
        <ChemicalElement name='Zirconium' symbol='Zr' atomicNumber={40} atomicMass={91.22} standardState='Solid' period={5} group={4} backgroundColor='lightblue' />
        <ChemicalElement name='Hafnium' symbol='Hf' atomicNumber={72} atomicMass={178.49} standardState='Solid' period={6} group={4} backgroundColor='lightblue' />
        <ChemicalElement name='Rutherfordium' symbol='Rf' atomicNumber={104} atomicMass={267.122} standardState='Solid' period={7} group={4} backgroundColor='lightblue' />
        <div className="f-block">
          <ChemicalElement name='Cerium' symbol='Ce' atomicNumber={58} atomicMass={140.116} standardState='Solid' period={0} group={3} backgroundColor='lightgreen' />
          <ChemicalElement name='Thorium' symbol='Th' atomicNumber={90} atomicMass={232.038} standardState='Solid' period={0} group={3} backgroundColor='lightgreen' />
        </div>
      </div>

      <div className="group-five">
        <ChemicalElement name='Vanadium' symbol='V' atomicNumber={23} atomicMass={50.9415} standardState='Solid' period={4} group={5} backgroundColor='lightblue' />
        <ChemicalElement name='Niobium' symbol='Nb' atomicNumber={41} atomicMass={92.90637} standardState='Solid' period={5} group={5} backgroundColor='lightblue' />
        <ChemicalElement name='Tantalum' symbol='Ta' atomicNumber={73} atomicMass={180.9479} standardState='Solid' period={6} group={5} backgroundColor='lightblue' />
        <ChemicalElement name='Dubnium' symbol='Db' atomicNumber={105} atomicMass={268.126} standardState='Solid' period={7} group={5} backgroundColor='lightblue' />
        <div className="f-block">
          <ChemicalElement name='Praseodymium' symbol='Pr' atomicNumber={59} atomicMass={140.90766} standardState='Solid' period={0} group={5} backgroundColor='lightgreen' />
          <ChemicalElement name='Protactinium' symbol='Pa' atomicNumber={91} atomicMass={231.03588} standardState='Solid' period={0} group={5} backgroundColor='lightgreen' />
        </div>
      </div>

      <div className="group-six">
        <ChemicalElement name='Chromium' symbol='Cr' atomicNumber={24} atomicMass={51.996} standardState='Solid' period={4} group={6} backgroundColor='lightblue' />
        <ChemicalElement name='Molybdenum' symbol='Mo' atomicNumber={42} atomicMass={95.95} standardState='Solid' period={5} group={6} backgroundColor='lightblue' />
        <ChemicalElement name='Tungsten' symbol='W' atomicNumber={74} atomicMass={183.84} standardState='Solid' period={6} group={6} backgroundColor='lightblue' />
        <ChemicalElement name='Seaborgium' symbol='Sg' atomicNumber={106} atomicMass={269.128} standardState='Solid' period={7} group={6} backgroundColor='lightblue' />
        <div className="f-block">
          <ChemicalElement name='Neodymium' symbol='Nd' atomicNumber={60} atomicMass={144.24} standardState='Solid' period={0} group={6} backgroundColor='lightgreen' />
          <ChemicalElement name='Uranium' symbol='U' atomicNumber={92} atomicMass={238.0289} standardState='Solid' period={0} group={6} backgroundColor='lightgreen' />
        </div>
      </div>

      <div className="group-seven">
        <ChemicalElement name='Manganese' symbol='Mn' atomicNumber={25} atomicMass={54.93804} standardState='Solid' period={4} group={7} backgroundColor='lightblue' />
        <ChemicalElement name='Technetium' symbol='Tc' atomicNumber={43} atomicMass={96.90636} standardState='Solid' period={5} group={7} backgroundColor='lightblue' />
        <ChemicalElement name='Rhenium' symbol='Re' atomicNumber={75} atomicMass={186.207} standardState='Solid' period={6} group={7} backgroundColor='lightblue' />
        <ChemicalElement name='Bohrium' symbol='Bh' atomicNumber={107}  atomicMass={270.133} standardState='Solid' period={7} group={7} backgroundColor='lightblue' />
        <div className="f-block">
          <ChemicalElement name='Promethium' symbol='Pm' atomicNumber={61} atomicMass={144.91276} standardState='Solid' period={0} group={7} backgroundColor='lightgreen' />
          <ChemicalElement name='Neptunium' symbol='Np' atomicNumber={93} atomicMass={237.048172} standardState='Solid' period={0} group={7} backgroundColor='lightgreen' />
        </div>
      </div>

      <div className="group-eight">
        <ChemicalElement name='Iron' symbol='Fe' atomicNumber={26} atomicMass={55.84} standardState='Solid' period={4} group={8} backgroundColor='lightblue' />
        <ChemicalElement name='Ruthenium' symbol='Ru' atomicNumber={44} atomicMass={101.1} standardState='Solid' period={5} group={8} backgroundColor='lightblue' />
        <ChemicalElement name='Osmium' symbol='Os' atomicNumber={76} period={6} atomicMass={190.2} standardState='Solid' group={8} backgroundColor='lightblue' />
        <ChemicalElement name='Hassium' symbol='Hs' atomicNumber={108} atomicMass={269.1336} standardState='Solid' period={7} group={8} backgroundColor='lightblue' />
        <div className="f-block">
          <ChemicalElement name='Samarium' symbol='Sm' atomicNumber={62} atomicMass={150.4} standardState='Solid' period={0} group={8} backgroundColor='lightgreen' />
          <ChemicalElement name='Plutonium' symbol='Pu' atomicNumber={94} atomicMass={244.06420} standardState='Solid' period={0} group={8} backgroundColor='lightgreen' />
        </div>
      </div>

      <div className="group-nine">
        <ChemicalElement name='Cobalt' symbol='Co' atomicNumber={27} atomicMass={58.93319} standardState='Solid' period={4} group={9} backgroundColor='lightblue' />
        <ChemicalElement name='Rhodium' symbol='Rh' atomicNumber={45} atomicMass={102.9055} standardState='Solid' period={5} group={9} backgroundColor='lightblue' />
        <ChemicalElement name='Iridium' symbol='Ir' atomicNumber={77} atomicMass={192.22} standardState='Solid' period={6} group={9} backgroundColor='lightblue' />
        <ChemicalElement name='Meitnerium' symbol='Mt' atomicNumber={109} atomicMass={277.154} standardState='Solid' period={7} group={9} backgroundColor='lightblue' />
        <div className="f-block">
          <ChemicalElement name='Europium' symbol='Eu' atomicNumber={63} atomicMass={151.964} standardState='Solid' period={0} group={9} backgroundColor='lightgreen' />
          <ChemicalElement name='Americium' symbol='Am' atomicNumber={95} atomicMass={243.061380} standardState='Solid' period={0} group={9} backgroundColor='lightgreen' />
        </div>
      </div>

      <div className="group-ten">
        <ChemicalElement name='Nickel' symbol='Ni' atomicNumber={28} atomicMass={58.693} standardState='Solid' period={4} group={10} backgroundColor='lightblue' />
        <ChemicalElement name='Palladium' symbol='Pd' atomicNumber={46} atomicMass={106.42} standardState='Solid' period={5} group={10} backgroundColor='lightblue' />
        <ChemicalElement name='Platinum' symbol='Pt' atomicNumber={78} atomicMass={195.08} standardState='Solid' period={6} group={10} backgroundColor='lightblue' />
        <ChemicalElement name='Darmstadtium' symbol='Ds' atomicNumber={110} atomicMass={282.166} standardState='Solid' period={7} group={10} backgroundColor='lightblue' />
        <div className="f-block">
          <ChemicalElement name='Gadolinium' symbol='Gd' atomicNumber={64} atomicMass={157.25} standardState='Solid' period={0} group={10} backgroundColor='lightgreen' />
          <ChemicalElement name='Curium' symbol='Cm' atomicNumber={96} atomicMass={247.07035} standardState='Solid' period={0} group={10} backgroundColor='lightgreen' />
        </div>
      </div>

      <div className="group-eleven">
        <ChemicalElement name='Copper' symbol='Cu' atomicNumber={29} atomicMass={63.55} standardState='Solid' period={4} group={11} backgroundColor='lightblue' />
        <ChemicalElement name='Silver' symbol='Ag' atomicNumber={47} atomicMass={107.868} standardState='Solid' period={5} group={11} backgroundColor='lightblue' />
        <ChemicalElement name='Gold' symbol='Au' atomicNumber={79} atomicMass={196.96657} standardState='Solid' period={6} group={11} backgroundColor='lightblue' />
        <ChemicalElement name='Roentgenium' symbol='Rg' atomicNumber={111} atomicMass={282.169} standardState='Solid' period={7} group={11} backgroundColor='lightblue' />
        <div className="f-block">
          <ChemicalElement name='Terbium' symbol='Tb' atomicNumber={65} atomicMass={158.92535} standardState='Solid' period={0} group={11} backgroundColor='lightgreen' />
          <ChemicalElement name='Berkelium' symbol='Bk' atomicNumber={97} atomicMass={247.07031} standardState='Solid' period={0} group={11} backgroundColor='lightgreen' />
        </div>
      </div>

      <div className="group-twelve">
        <ChemicalElement name='Zinc' symbol='Zn' atomicNumber={30} atomicMass={65.4} standardState='Solid' period={4} group={12} backgroundColor='lightblue' />
        <ChemicalElement name='Cadmium' symbol='Cd' atomicNumber={48} atomicMass={112.41} standardState='Solid' period={5} group={12} backgroundColor='lightblue' />
        <ChemicalElement name='Mercury' symbol='Hg' atomicNumber={80} atomicMass={200.59} standardState='Liquid' period={6} group={12} backgroundColor='lightblue' />
        <ChemicalElement name='Copernicium' symbol='Cn' atomicNumber={112} atomicMass={286.179} standardState='Solid' period={7} group={12} backgroundColor='lightblue' />
        <div className="f-block">
          <ChemicalElement name='Dysprosium' symbol='Dy' atomicNumber={66} atomicMass={162.500} standardState='Solid' period={0} group={12} backgroundColor='lightgreen' />
          <ChemicalElement name='Californium' symbol='Cf' atomicNumber={98} atomicMass={251.07959} standardState='Solid' period={0} group={12} backgroundColor='lightgreen' />
        </div>
      </div>

      <div className="group-thirteen">
        <ChemicalElement name='Boron' symbol='B' atomicNumber={5} atomicMass={10.81} standardState='Solid' period={2} group={13} backgroundColor='lemonchiffon' />
        <ChemicalElement name='Aluminium' symbol='Al' atomicNumber={13} atomicMass={26.981538} standardState='Solid' period={3} group={13} backgroundColor='lemonchiffon' />
        <ChemicalElement name='Gallium' symbol='Ga' atomicNumber={31} atomicMass={69.723} standardState='Solid' period={4} group={13} backgroundColor='lemonchiffon' />
        <ChemicalElement name='Indium' symbol='In' atomicNumber={49} atomicMass={114.818} standardState='Solid' period={5} group={13} backgroundColor='lemonchiffon' />
        <ChemicalElement name='Thallium' symbol='Tl' atomicNumber={81} atomicMass={204.383} standardState='Solid' period={6} group={13} backgroundColor='lemonchiffon' />
        <ChemicalElement name='Nihonium' symbol='Nh' atomicNumber={113} atomicMass={286.182} standardState='Solid' period={7} group={13} backgroundColor='lemonchiffon' />
        <div className="f-block">
          <ChemicalElement name='Holmium' symbol='Ho' atomicNumber={67} atomicMass={164.93033} standardState='Solid' period={0} group={13} backgroundColor='lightgreen' />
          <ChemicalElement name='Einsteinium' symbol='Es' atomicNumber={99} atomicMass={252.0830} standardState='Solid' period={0} group={13} backgroundColor='lightgreen' />
        </div>
      </div>

      <div className="group-fourteen">
        <ChemicalElement name='Carbon' symbol='C' atomicNumber={6} atomicMass={12.011} standardState='Solid' period={2} group={14} backgroundColor='lemonchiffon' />
        <ChemicalElement name='Silicon' symbol='Si' atomicNumber={14} atomicMass={28.085} standardState='Solid' period={3} group={14} backgroundColor='lemonchiffon' />
        <ChemicalElement name='Germanium' symbol='Ge' atomicNumber={32} atomicMass={72.63} standardState='Solid' period={4} group={14} backgroundColor='lemonchiffon' />
        <ChemicalElement name='Tin' symbol='Sn' atomicNumber={50} atomicMass={118.71} standardState='Solid' period={5} group={14} backgroundColor='lemonchiffon' />
        <ChemicalElement name='Lead' symbol='Pb' atomicNumber={82} atomicMass={207} standardState='Solid' period={6} group={14} backgroundColor='lemonchiffon' />
        <ChemicalElement name='Flerovium' symbol='Fl' atomicNumber={114} atomicMass={290.192} standardState='Solid' period={7} group={14} backgroundColor='lemonchiffon' />
        <div className="f-block">
          <ChemicalElement name='Erbium' symbol='Er' atomicNumber={68} atomicMass={167.26} standardState='Solid' period={0} group={14} backgroundColor='lightgreen' />
          <ChemicalElement name='Fermium' symbol='Fm' atomicNumber={100} atomicMass={257.09511} standardState='Solid' period={0} group={14} backgroundColor='lightgreen' />
        </div>
      </div>

      <div className="group-fifteen">
        <ChemicalElement name='Nitrogen' symbol='N' atomicNumber={7} atomicMass={14.007} standardState='Gas' period={2} group={15} backgroundColor='lemonchiffon' />
        <ChemicalElement name='Phosphorus' symbol='P' atomicNumber={15} atomicMass={30.97376200} standardState='Solid' period={3} group={15} backgroundColor='lemonchiffon' />
        <ChemicalElement name='Arsenic' symbol='As' atomicNumber={33} atomicMass={74.92159} standardState='Solid' period={4} group={15} backgroundColor='lemonchiffon' />
        <ChemicalElement name='Antimony' symbol='Sb' atomicNumber={51} atomicMass={121.760} standardState='Solid' period={5} group={15} backgroundColor='lemonchiffon' />
        <ChemicalElement name='Bismuth' symbol='Bi' atomicNumber={83} atomicMass={208.98040} standardState='Solid' period={6} group={15} backgroundColor='lemonchiffon' />
        <ChemicalElement name='Moscovium' symbol='Mc' atomicNumber={115} atomicMass={290.196} standardState='Solid' period={7} group={15} backgroundColor='lemonchiffon' />
        <div className="f-block">
          <ChemicalElement name='Thulium' symbol='Tm' atomicNumber={69} atomicMass={168.93422} standardState='Solid' period={0} group={15} backgroundColor='lightgreen' />
          <ChemicalElement name='Mendelevium' symbol='Md' atomicNumber={101} atomicMass={258.09843} standardState='Solid' period={0} group={15} backgroundColor='lightgreen' />
        </div>
      </div>

      <div className="group-sixteen">
        <ChemicalElement name='Oxygen' symbol='O' atomicNumber={8} atomicMass={15.999} standardState='Gas' period={2} group={16} backgroundColor='lemonchiffon' />
        <ChemicalElement name='Sulfur' symbol='S' atomicNumber={16} atomicMass={32.07} standardState='Solid' period={3} group={16} backgroundColor='lemonchiffon' />
        <ChemicalElement name='Selenium' symbol='Se' atomicNumber={34} atomicMass={78.97} standardState='Solid' period={4} group={16} backgroundColor='lemonchiffon' />
        <ChemicalElement name='Tellurium' symbol='Te' atomicNumber={52} atomicMass={127.6} standardState='Solid' period={5} group={16} backgroundColor='lemonchiffon' />
        <ChemicalElement name='Polonium' symbol='Po' atomicNumber={84} atomicMass={208.98243} standardState='Solid' period={6} group={16} backgroundColor='lemonchiffon' />
        <ChemicalElement name='Livermorium' symbol='Lv' atomicNumber={116} atomicMass={293.205} standardState='Solid' period={7} group={16} backgroundColor='lemonchiffon' />
        <div className="f-block">
          <ChemicalElement name='Ytterbium' symbol='Yb' atomicNumber={70} atomicMass={173.05} standardState='Solid' period={0} group={16} backgroundColor='lightgreen' />
          <ChemicalElement name='Nobelium' symbol='No' atomicNumber={102} atomicMass={259.10100} standardState='Solid' period={0} group={16} backgroundColor='lightgreen' />
        </div>
      </div>

      <div className="group-seventeen">
        <ChemicalElement name='Fluorine' symbol='F' atomicNumber={9} atomicMass={18.99840316} standardState='Gas' period={2} group={17} backgroundColor='lemonchiffon' />
        <ChemicalElement name='Chlorine' symbol='Cl' atomicNumber={17} atomicMass={35.45} standardState='Gas' period={3} group={17} backgroundColor='lemonchiffon' />
        <ChemicalElement name='Bromine' symbol='Br' atomicNumber={35} atomicMass={79.90} standardState='Liquid' period={4} group={17} backgroundColor='lemonchiffon' />
        <ChemicalElement name='Iodine' symbol='I' atomicNumber={53} atomicMass={126.9045} standardState='Solid' period={5} group={17} backgroundColor='lemonchiffon' />
        <ChemicalElement name='Astatine' symbol='At' atomicNumber={85} atomicMass={209.98715} standardState='Solid' period={6} group={17} backgroundColor='lemonchiffon' />
        <ChemicalElement name='Tennessine' symbol='Ts' atomicNumber={117} atomicMass={294.211} standardState='Solid' period={7} group={17} backgroundColor='lemonchiffon' />
      </div>

      <div className="group-eighteen">
        <ChemicalElement name='Helium' symbol='He' atomicNumber={2} atomicMass={4.00260} standardState='Gas' period={1} group={18} backgroundColor='lightcoral' />
        <ChemicalElement name='Neon' symbol='Ne' atomicNumber={10} atomicMass={20.180} standardState='Gas' period={2} group={18} backgroundColor='lemonchiffon' />
        <ChemicalElement name='Argon' symbol='Ar' atomicNumber={18} atomicMass={39.9} standardState='Gas' period={3} group={18} backgroundColor='lemonchiffon' />
        <ChemicalElement name='Krypton' symbol='Kr' atomicNumber={36} atomicMass={83.80} standardState='Gas' period={4} group={18} backgroundColor='lemonchiffon' />
        <ChemicalElement name='Xenon' symbol='Xe' atomicNumber={54} atomicMass={131.29} standardState='Gas' period={5} group={18} backgroundColor='lemonchiffon' />
        <ChemicalElement name='Radon' symbol='Rn' atomicNumber={86} atomicMass={222.01758} standardState='Gas' period={6} group={18} backgroundColor='lemonchiffon' />
        <ChemicalElement name='Oganesson' symbol='Og' atomicNumber={118} atomicMass={295.216} standardState='Gas' period={7} group={18} backgroundColor='lemonchiffon' />
      </div>
    </div>
  );
};

export default App;
