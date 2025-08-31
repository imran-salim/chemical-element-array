export interface ChemicalElementData {
  name: string;
  symbol: string;
  atomicNumber: number;
  atomicMass: number;
  standardState: string;
  period: number;
  group: number;
  backgroundColor: string;
}

export const elements: ChemicalElementData[] = [
  {
    name: 'Hydrogen',
    symbol: 'H',
    atomicNumber: 1,
    atomicMass: 1.008,
    standardState: 'Gas',
    period: 1,
    group: 1,
    backgroundColor: '#FFB3BA'
  },
  {
    name: 'Helium',
    symbol: 'He',
    atomicNumber: 2,
    atomicMass: 4.003,
    standardState: 'Gas',
    period: 1,
    group: 18,
    backgroundColor: '#BAFFC9'
  },
  {
    name: 'Lithium',
    symbol: 'Li',
    atomicNumber: 3,
    atomicMass: 6.941,
    standardState: 'Solid',
    period: 2,
    group: 1,
    backgroundColor: '#FFB3BA'
  },
  {
    name: 'Beryllium',
    symbol: 'Be',
    atomicNumber: 4,
    atomicMass: 9.012,
    standardState: 'Solid',
    period: 2,
    group: 2,
    backgroundColor: '#FFE4B3'
  },
  {
    name: 'Boron',
    symbol: 'B',
    atomicNumber: 5,
    atomicMass: 10.811,
    standardState: 'Solid',
    period: 2,
    group: 13,
    backgroundColor: '#E6FFB3'
  },
  {
    name: 'Carbon',
    symbol: 'C',
    atomicNumber: 6,
    atomicMass: 12.011,
    standardState: 'Solid',
    period: 2,
    group: 14,
    backgroundColor: '#B3FFB3'
  },
  {
    name: 'Nitrogen',
    symbol: 'N',
    atomicNumber: 7,
    atomicMass: 14.007,
    standardState: 'Gas',
    period: 2,
    group: 15,
    backgroundColor: '#B3FFE4'
  },
  {
    name: 'Oxygen',
    symbol: 'O',
    atomicNumber: 8,
    atomicMass: 15.999,
    standardState: 'Gas',
    period: 2,
    group: 16,
    backgroundColor: '#B3FFFF'
  },
  {
    name: 'Fluorine',
    symbol: 'F',
    atomicNumber: 9,
    atomicMass: 18.998,
    standardState: 'Gas',
    period: 2,
    group: 17,
    backgroundColor: '#B3E4FF'
  },
  {
    name: 'Neon',
    symbol: 'Ne',
    atomicNumber: 10,
    atomicMass: 20.180,
    standardState: 'Gas',
    period: 2,
    group: 18,
    backgroundColor: '#BAFFC9'
  },
  {
    name: 'Sodium',
    symbol: 'Na',
    atomicNumber: 11,
    atomicMass: 22.990,
    standardState: 'Solid',
    period: 3,
    group: 1,
    backgroundColor: '#FFB3BA'
  },
  {
    name: 'Magnesium',
    symbol: 'Mg',
    atomicNumber: 12,
    atomicMass: 24.305,
    standardState: 'Solid',
    period: 3,
    group: 2,
    backgroundColor: '#FFE4B3'
  },
  {
    name: 'Aluminum',
    symbol: 'Al',
    atomicNumber: 13,
    atomicMass: 26.982,
    standardState: 'Solid',
    period: 3,
    group: 13,
    backgroundColor: '#E6FFB3'
  },
  {
    name: 'Silicon',
    symbol: 'Si',
    atomicNumber: 14,
    atomicMass: 28.086,
    standardState: 'Solid',
    period: 3,
    group: 14,
    backgroundColor: '#B3FFB3'
  },
  {
    name: 'Phosphorus',
    symbol: 'P',
    atomicNumber: 15,
    atomicMass: 30.974,
    standardState: 'Solid',
    period: 3,
    group: 15,
    backgroundColor: '#B3FFE4'
  },
  {
    name: 'Sulfur',
    symbol: 'S',
    atomicNumber: 16,
    atomicMass: 32.065,
    standardState: 'Solid',
    period: 3,
    group: 16,
    backgroundColor: '#B3FFFF'
  },
  {
    name: 'Chlorine',
    symbol: 'Cl',
    atomicNumber: 17,
    atomicMass: 35.453,
    standardState: 'Gas',
    period: 3,
    group: 17,
    backgroundColor: '#B3E4FF'
  },
  {
    name: 'Argon',
    symbol: 'Ar',
    atomicNumber: 18,
    atomicMass: 39.948,
    standardState: 'Gas',
    period: 3,
    group: 18,
    backgroundColor: '#BAFFC9'
  },
  {
    name: 'Potassium',
    symbol: 'K',
    atomicNumber: 19,
    atomicMass: 39.098,
    standardState: 'Solid',
    period: 4,
    group: 1,
    backgroundColor: '#FFB3BA'
  },
  {
    name: 'Calcium',
    symbol: 'Ca',
    atomicNumber: 20,
    atomicMass: 40.078,
    standardState: 'Solid',
    period: 4,
    group: 2,
    backgroundColor: '#FFE4B3'
  },
  {
    name: 'Scandium',
    symbol: 'Sc',
    atomicNumber: 21,
    atomicMass: 44.956,
    standardState: 'Solid',
    period: 4,
    group: 3,
    backgroundColor: '#FFB3FF'
  },
  {
    name: 'Titanium',
    symbol: 'Ti',
    atomicNumber: 22,
    atomicMass: 47.867,
    standardState: 'Solid',
    period: 4,
    group: 4,
    backgroundColor: '#FFB3E4'
  },
  {
    name: 'Vanadium',
    symbol: 'V',
    atomicNumber: 23,
    atomicMass: 50.942,
    standardState: 'Solid',
    period: 4,
    group: 5,
    backgroundColor: '#FFB3CC'
  },
  {
    name: 'Chromium',
    symbol: 'Cr',
    atomicNumber: 24,
    atomicMass: 51.996,
    standardState: 'Solid',
    period: 4,
    group: 6,
    backgroundColor: '#FFC6B3'
  },
  {
    name: 'Manganese',
    symbol: 'Mn',
    atomicNumber: 25,
    atomicMass: 54.938,
    standardState: 'Solid',
    period: 4,
    group: 7,
    backgroundColor: '#FFD9B3'
  },
  {
    name: 'Iron',
    symbol: 'Fe',
    atomicNumber: 26,
    atomicMass: 55.845,
    standardState: 'Solid',
    period: 4,
    group: 8,
    backgroundColor: '#FFECB3'
  },
  {
    name: 'Cobalt',
    symbol: 'Co',
    atomicNumber: 27,
    atomicMass: 58.933,
    standardState: 'Solid',
    period: 4,
    group: 9,
    backgroundColor: '#FFFFB3'
  },
  {
    name: 'Nickel',
    symbol: 'Ni',
    atomicNumber: 28,
    atomicMass: 58.693,
    standardState: 'Solid',
    period: 4,
    group: 10,
    backgroundColor: '#E4FFB3'
  },
  {
    name: 'Copper',
    symbol: 'Cu',
    atomicNumber: 29,
    atomicMass: 63.546,
    standardState: 'Solid',
    period: 4,
    group: 11,
    backgroundColor: '#CCB3FF'
  },
  {
    name: 'Zinc',
    symbol: 'Zn',
    atomicNumber: 30,
    atomicMass: 65.380,
    standardState: 'Solid',
    period: 4,
    group: 12,
    backgroundColor: '#E4B3FF'
  },
  {
    name: 'Gallium',
    symbol: 'Ga',
    atomicNumber: 31,
    atomicMass: 69.723,
    standardState: 'Solid',
    period: 4,
    group: 13,
    backgroundColor: '#E6FFB3'
  },
  {
    name: 'Germanium',
    symbol: 'Ge',
    atomicNumber: 32,
    atomicMass: 72.640,
    standardState: 'Solid',
    period: 4,
    group: 14,
    backgroundColor: '#B3FFB3'
  },
  {
    name: 'Arsenic',
    symbol: 'As',
    atomicNumber: 33,
    atomicMass: 74.922,
    standardState: 'Solid',
    period: 4,
    group: 15,
    backgroundColor: '#B3FFE4'
  },
  {
    name: 'Selenium',
    symbol: 'Se',
    atomicNumber: 34,
    atomicMass: 78.960,
    standardState: 'Solid',
    period: 4,
    group: 16,
    backgroundColor: '#B3FFFF'
  },
  {
    name: 'Bromine',
    symbol: 'Br',
    atomicNumber: 35,
    atomicMass: 79.904,
    standardState: 'Liquid',
    period: 4,
    group: 17,
    backgroundColor: '#B3E4FF'
  },
  {
    name: 'Krypton',
    symbol: 'Kr',
    atomicNumber: 36,
    atomicMass: 83.798,
    standardState: 'Gas',
    period: 4,
    group: 18,
    backgroundColor: '#BAFFC9'
  },
  {
    name: 'Rubidium',
    symbol: 'Rb',
    atomicNumber: 37,
    atomicMass: 85.468,
    standardState: 'Solid',
    period: 5,
    group: 1,
    backgroundColor: '#FFB3BA'
  },
  {
    name: 'Strontium',
    symbol: 'Sr',
    atomicNumber: 38,
    atomicMass: 87.620,
    standardState: 'Solid',
    period: 5,
    group: 2,
    backgroundColor: '#FFE4B3'
  },
  {
    name: 'Yttrium',
    symbol: 'Y',
    atomicNumber: 39,
    atomicMass: 88.906,
    standardState: 'Solid',
    period: 5,
    group: 3,
    backgroundColor: '#FFB3FF'
  },
  {
    name: 'Zirconium',
    symbol: 'Zr',
    atomicNumber: 40,
    atomicMass: 91.224,
    standardState: 'Solid',
    period: 5,
    group: 4,
    backgroundColor: '#FFB3E4'
  },
  {
    name: 'Niobium',
    symbol: 'Nb',
    atomicNumber: 41,
    atomicMass: 92.906,
    standardState: 'Solid',
    period: 5,
    group: 5,
    backgroundColor: '#FFB3CC'
  },
  {
    name: 'Molybdenum',
    symbol: 'Mo',
    atomicNumber: 42,
    atomicMass: 95.950,
    standardState: 'Solid',
    period: 5,
    group: 6,
    backgroundColor: '#FFC6B3'
  },
  {
    name: 'Technetium',
    symbol: 'Tc',
    atomicNumber: 43,
    atomicMass: 98.000,
    standardState: 'Solid',
    period: 5,
    group: 7,
    backgroundColor: '#FFD9B3'
  },
  {
    name: 'Ruthenium',
    symbol: 'Ru',
    atomicNumber: 44,
    atomicMass: 101.070,
    standardState: 'Solid',
    period: 5,
    group: 8,
    backgroundColor: '#FFECB3'
  },
  {
    name: 'Rhodium',
    symbol: 'Rh',
    atomicNumber: 45,
    atomicMass: 102.906,
    standardState: 'Solid',
    period: 5,
    group: 9,
    backgroundColor: '#FFFFB3'
  },
  {
    name: 'Palladium',
    symbol: 'Pd',
    atomicNumber: 46,
    atomicMass: 106.420,
    standardState: 'Solid',
    period: 5,
    group: 10,
    backgroundColor: '#E4FFB3'
  },
  {
    name: 'Silver',
    symbol: 'Ag',
    atomicNumber: 47,
    atomicMass: 107.868,
    standardState: 'Solid',
    period: 5,
    group: 11,
    backgroundColor: '#CCB3FF'
  },
  {
    name: 'Cadmium',
    symbol: 'Cd',
    atomicNumber: 48,
    atomicMass: 112.411,
    standardState: 'Solid',
    period: 5,
    group: 12,
    backgroundColor: '#E4B3FF'
  },
  {
    name: 'Indium',
    symbol: 'In',
    atomicNumber: 49,
    atomicMass: 114.818,
    standardState: 'Solid',
    period: 5,
    group: 13,
    backgroundColor: '#E6FFB3'
  },
  {
    name: 'Tin',
    symbol: 'Sn',
    atomicNumber: 50,
    atomicMass: 118.710,
    standardState: 'Solid',
    period: 5,
    group: 14,
    backgroundColor: '#B3FFB3'
  },
  {
    name: 'Antimony',
    symbol: 'Sb',
    atomicNumber: 51,
    atomicMass: 121.760,
    standardState: 'Solid',
    period: 5,
    group: 15,
    backgroundColor: '#B3FFE4'
  },
  {
    name: 'Tellurium',
    symbol: 'Te',
    atomicNumber: 52,
    atomicMass: 127.600,
    standardState: 'Solid',
    period: 5,
    group: 16,
    backgroundColor: '#B3FFFF'
  },
  {
    name: 'Iodine',
    symbol: 'I',
    atomicNumber: 53,
    atomicMass: 126.904,
    standardState: 'Solid',
    period: 5,
    group: 17,
    backgroundColor: '#B3E4FF'
  },
  {
    name: 'Xenon',
    symbol: 'Xe',
    atomicNumber: 54,
    atomicMass: 131.293,
    standardState: 'Gas',
    period: 5,
    group: 18,
    backgroundColor: '#BAFFC9'
  },
  {
    name: 'Cesium',
    symbol: 'Cs',
    atomicNumber: 55,
    atomicMass: 132.905,
    standardState: 'Solid',
    period: 6,
    group: 1,
    backgroundColor: '#FFB3BA'
  },
  {
    name: 'Barium',
    symbol: 'Ba',
    atomicNumber: 56,
    atomicMass: 137.327,
    standardState: 'Solid',
    period: 6,
    group: 2,
    backgroundColor: '#FFE4B3'
  },
  {
    name: 'Lanthanum',
    symbol: 'La',
    atomicNumber: 57,
    atomicMass: 138.905,
    standardState: 'Solid',
    period: 6,
    group: 3,
    backgroundColor: '#FFD9E6'
  },
  {
    name: 'Cerium',
    symbol: 'Ce',
    atomicNumber: 58,
    atomicMass: 140.116,
    standardState: 'Solid',
    period: 6,
    group: 3,
    backgroundColor: '#FFD9E6'
  },
  {
    name: 'Praseodymium',
    symbol: 'Pr',
    atomicNumber: 59,
    atomicMass: 140.908,
    standardState: 'Solid',
    period: 6,
    group: 3,
    backgroundColor: '#FFD9E6'
  },
  {
    name: 'Neodymium',
    symbol: 'Nd',
    atomicNumber: 60,
    atomicMass: 144.242,
    standardState: 'Solid',
    period: 6,
    group: 3,
    backgroundColor: '#FFD9E6'
  },
  {
    name: 'Promethium',
    symbol: 'Pm',
    atomicNumber: 61,
    atomicMass: 145.000,
    standardState: 'Solid',
    period: 6,
    group: 3,
    backgroundColor: '#FFD9E6'
  },
  {
    name: 'Samarium',
    symbol: 'Sm',
    atomicNumber: 62,
    atomicMass: 150.360,
    standardState: 'Solid',
    period: 6,
    group: 3,
    backgroundColor: '#FFD9E6'
  },
  {
    name: 'Europium',
    symbol: 'Eu',
    atomicNumber: 63,
    atomicMass: 151.964,
    standardState: 'Solid',
    period: 6,
    group: 3,
    backgroundColor: '#FFD9E6'
  },
  {
    name: 'Gadolinium',
    symbol: 'Gd',
    atomicNumber: 64,
    atomicMass: 157.250,
    standardState: 'Solid',
    period: 6,
    group: 3,
    backgroundColor: '#FFD9E6'
  },
  {
    name: 'Terbium',
    symbol: 'Tb',
    atomicNumber: 65,
    atomicMass: 158.925,
    standardState: 'Solid',
    period: 6,
    group: 3,
    backgroundColor: '#FFD9E6'
  },
  {
    name: 'Dysprosium',
    symbol: 'Dy',
    atomicNumber: 66,
    atomicMass: 162.500,
    standardState: 'Solid',
    period: 6,
    group: 3,
    backgroundColor: '#FFD9E6'
  },
  {
    name: 'Holmium',
    symbol: 'Ho',
    atomicNumber: 67,
    atomicMass: 164.930,
    standardState: 'Solid',
    period: 6,
    group: 3,
    backgroundColor: '#FFD9E6'
  },
  {
    name: 'Erbium',
    symbol: 'Er',
    atomicNumber: 68,
    atomicMass: 167.259,
    standardState: 'Solid',
    period: 6,
    group: 3,
    backgroundColor: '#FFD9E6'
  },
  {
    name: 'Thulium',
    symbol: 'Tm',
    atomicNumber: 69,
    atomicMass: 168.934,
    standardState: 'Solid',
    period: 6,
    group: 3,
    backgroundColor: '#FFD9E6'
  },
  {
    name: 'Ytterbium',
    symbol: 'Yb',
    atomicNumber: 70,
    atomicMass: 173.054,
    standardState: 'Solid',
    period: 6,
    group: 3,
    backgroundColor: '#FFD9E6'
  },
  {
    name: 'Lutetium',
    symbol: 'Lu',
    atomicNumber: 71,
    atomicMass: 174.967,
    standardState: 'Solid',
    period: 6,
    group: 3,
    backgroundColor: '#FFB3FF'
  },
  {
    name: 'Hafnium',
    symbol: 'Hf',
    atomicNumber: 72,
    atomicMass: 178.490,
    standardState: 'Solid',
    period: 6,
    group: 4,
    backgroundColor: '#FFB3E4'
  },
  {
    name: 'Tantalum',
    symbol: 'Ta',
    atomicNumber: 73,
    atomicMass: 180.948,
    standardState: 'Solid',
    period: 6,
    group: 5,
    backgroundColor: '#FFB3CC'
  },
  {
    name: 'Tungsten',
    symbol: 'W',
    atomicNumber: 74,
    atomicMass: 183.840,
    standardState: 'Solid',
    period: 6,
    group: 6,
    backgroundColor: '#FFC6B3'
  },
  {
    name: 'Rhenium',
    symbol: 'Re',
    atomicNumber: 75,
    atomicMass: 186.207,
    standardState: 'Solid',
    period: 6,
    group: 7,
    backgroundColor: '#FFD9B3'
  },
  {
    name: 'Osmium',
    symbol: 'Os',
    atomicNumber: 76,
    atomicMass: 190.230,
    standardState: 'Solid',
    period: 6,
    group: 8,
    backgroundColor: '#FFECB3'
  },
  {
    name: 'Iridium',
    symbol: 'Ir',
    atomicNumber: 77,
    atomicMass: 192.217,
    standardState: 'Solid',
    period: 6,
    group: 9,
    backgroundColor: '#FFFFB3'
  },
  {
    name: 'Platinum',
    symbol: 'Pt',
    atomicNumber: 78,
    atomicMass: 195.084,
    standardState: 'Solid',
    period: 6,
    group: 10,
    backgroundColor: '#E4FFB3'
  },
  {
    name: 'Gold',
    symbol: 'Au',
    atomicNumber: 79,
    atomicMass: 196.967,
    standardState: 'Solid',
    period: 6,
    group: 11,
    backgroundColor: '#CCB3FF'
  },
  {
    name: 'Mercury',
    symbol: 'Hg',
    atomicNumber: 80,
    atomicMass: 200.590,
    standardState: 'Liquid',
    period: 6,
    group: 12,
    backgroundColor: '#E4B3FF'
  },
  {
    name: 'Thallium',
    symbol: 'Tl',
    atomicNumber: 81,
    atomicMass: 204.383,
    standardState: 'Solid',
    period: 6,
    group: 13,
    backgroundColor: '#E6FFB3'
  },
  {
    name: 'Lead',
    symbol: 'Pb',
    atomicNumber: 82,
    atomicMass: 207.200,
    standardState: 'Solid',
    period: 6,
    group: 14,
    backgroundColor: '#B3FFB3'
  },
  {
    name: 'Bismuth',
    symbol: 'Bi',
    atomicNumber: 83,
    atomicMass: 208.980,
    standardState: 'Solid',
    period: 6,
    group: 15,
    backgroundColor: '#B3FFE4'
  },
  {
    name: 'Polonium',
    symbol: 'Po',
    atomicNumber: 84,
    atomicMass: 209.000,
    standardState: 'Solid',
    period: 6,
    group: 16,
    backgroundColor: '#B3FFFF'
  },
  {
    name: 'Astatine',
    symbol: 'At',
    atomicNumber: 85,
    atomicMass: 210.000,
    standardState: 'Solid',
    period: 6,
    group: 17,
    backgroundColor: '#B3E4FF'
  },
  {
    name: 'Radon',
    symbol: 'Rn',
    atomicNumber: 86,
    atomicMass: 222.000,
    standardState: 'Gas',
    period: 6,
    group: 18,
    backgroundColor: '#BAFFC9'
  },
  {
    name: 'Francium',
    symbol: 'Fr',
    atomicNumber: 87,
    atomicMass: 223.000,
    standardState: 'Solid',
    period: 7,
    group: 1,
    backgroundColor: '#FFB3BA'
  },
  {
    name: 'Radium',
    symbol: 'Ra',
    atomicNumber: 88,
    atomicMass: 226.000,
    standardState: 'Solid',
    period: 7,
    group: 2,
    backgroundColor: '#FFE4B3'
  },
  {
    name: 'Actinium',
    symbol: 'Ac',
    atomicNumber: 89,
    atomicMass: 227.000,
    standardState: 'Solid',
    period: 7,
    group: 3,
    backgroundColor: '#FFE6D9'
  },
  {
    name: 'Thorium',
    symbol: 'Th',
    atomicNumber: 90,
    atomicMass: 232.038,
    standardState: 'Solid',
    period: 7,
    group: 3,
    backgroundColor: '#FFE6D9'
  },
  {
    name: 'Protactinium',
    symbol: 'Pa',
    atomicNumber: 91,
    atomicMass: 231.036,
    standardState: 'Solid',
    period: 7,
    group: 3,
    backgroundColor: '#FFE6D9'
  },
  {
    name: 'Uranium',
    symbol: 'U',
    atomicNumber: 92,
    atomicMass: 238.029,
    standardState: 'Solid',
    period: 7,
    group: 3,
    backgroundColor: '#FFE6D9'
  },
  {
    name: 'Neptunium',
    symbol: 'Np',
    atomicNumber: 93,
    atomicMass: 237.000,
    standardState: 'Solid',
    period: 7,
    group: 3,
    backgroundColor: '#FFE6D9'
  },
  {
    name: 'Plutonium',
    symbol: 'Pu',
    atomicNumber: 94,
    atomicMass: 244.000,
    standardState: 'Solid',
    period: 7,
    group: 3,
    backgroundColor: '#FFE6D9'
  },
  {
    name: 'Americium',
    symbol: 'Am',
    atomicNumber: 95,
    atomicMass: 243.000,
    standardState: 'Solid',
    period: 7,
    group: 3,
    backgroundColor: '#FFE6D9'
  },
  {
    name: 'Curium',
    symbol: 'Cm',
    atomicNumber: 96,
    atomicMass: 247.000,
    standardState: 'Solid',
    period: 7,
    group: 3,
    backgroundColor: '#FFE6D9'
  },
  {
    name: 'Berkelium',
    symbol: 'Bk',
    atomicNumber: 97,
    atomicMass: 247.000,
    standardState: 'Solid',
    period: 7,
    group: 3,
    backgroundColor: '#FFE6D9'
  },
  {
    name: 'Californium',
    symbol: 'Cf',
    atomicNumber: 98,
    atomicMass: 251.000,
    standardState: 'Solid',
    period: 7,
    group: 3,
    backgroundColor: '#FFE6D9'
  },
  {
    name: 'Einsteinium',
    symbol: 'Es',
    atomicNumber: 99,
    atomicMass: 252.000,
    standardState: 'Solid',
    period: 7,
    group: 3,
    backgroundColor: '#FFE6D9'
  },
  {
    name: 'Fermium',
    symbol: 'Fm',
    atomicNumber: 100,
    atomicMass: 257.000,
    standardState: 'Solid',
    period: 7,
    group: 3,
    backgroundColor: '#FFE6D9'
  },
  {
    name: 'Mendelevium',
    symbol: 'Md',
    atomicNumber: 101,
    atomicMass: 258.000,
    standardState: 'Solid',
    period: 7,
    group: 3,
    backgroundColor: '#FFE6D9'
  },
  {
    name: 'Nobelium',
    symbol: 'No',
    atomicNumber: 102,
    atomicMass: 259.000,
    standardState: 'Solid',
    period: 7,
    group: 3,
    backgroundColor: '#FFE6D9'
  },
  {
    name: 'Lawrencium',
    symbol: 'Lr',
    atomicNumber: 103,
    atomicMass: 262.000,
    standardState: 'Solid',
    period: 7,
    group: 3,
    backgroundColor: '#FFB3FF'
  },
  {
    name: 'Rutherfordium',
    symbol: 'Rf',
    atomicNumber: 104,
    atomicMass: 267.000,
    standardState: 'Solid',
    period: 7,
    group: 4,
    backgroundColor: '#FFB3E4'
  },
  {
    name: 'Dubnium',
    symbol: 'Db',
    atomicNumber: 105,
    atomicMass: 268.000,
    standardState: 'Unknown',
    period: 7,
    group: 5,
    backgroundColor: '#FFB3CC'
  },
  {
    name: 'Seaborgium',
    symbol: 'Sg',
    atomicNumber: 106,
    atomicMass: 269.000,
    standardState: 'Unknown',
    period: 7,
    group: 6,
    backgroundColor: '#FFC6B3'
  },
  {
    name: 'Bohrium',
    symbol: 'Bh',
    atomicNumber: 107,
    atomicMass: 270.000,
    standardState: 'Unknown',
    period: 7,
    group: 7,
    backgroundColor: '#FFD9B3'
  },
  {
    name: 'Hassium',
    symbol: 'Hs',
    atomicNumber: 108,
    atomicMass: 269.000,
    standardState: 'Unknown',
    period: 7,
    group: 8,
    backgroundColor: '#FFECB3'
  },
  {
    name: 'Meitnerium',
    symbol: 'Mt',
    atomicNumber: 109,
    atomicMass: 278.000,
    standardState: 'Unknown',
    period: 7,
    group: 9,
    backgroundColor: '#FFFFB3'
  },
  {
    name: 'Darmstadtium',
    symbol: 'Ds',
    atomicNumber: 110,
    atomicMass: 281.000,
    standardState: 'Unknown',
    period: 7,
    group: 10,
    backgroundColor: '#E4FFB3'
  },
  {
    name: 'Roentgenium',
    symbol: 'Rg',
    atomicNumber: 111,
    atomicMass: 282.000,
    standardState: 'Unknown',
    period: 7,
    group: 11,
    backgroundColor: '#CCB3FF'
  },
  {
    name: 'Copernicium',
    symbol: 'Cn',
    atomicNumber: 112,
    atomicMass: 285.000,
    standardState: 'Unknown',
    period: 7,
    group: 12,
    backgroundColor: '#E4B3FF'
  },
  {
    name: 'Nihonium',
    symbol: 'Nh',
    atomicNumber: 113,
    atomicMass: 286.000,
    standardState: 'Unknown',
    period: 7,
    group: 13,
    backgroundColor: '#E6FFB3'
  },
  {
    name: 'Flerovium',
    symbol: 'Fl',
    atomicNumber: 114,
    atomicMass: 289.000,
    standardState: 'Unknown',
    period: 7,
    group: 14,
    backgroundColor: '#B3FFB3'
  },
  {
    name: 'Moscovium',
    symbol: 'Mc',
    atomicNumber: 115,
    atomicMass: 290.000,
    standardState: 'Unknown',
    period: 7,
    group: 15,
    backgroundColor: '#B3FFE4'
  },
  {
    name: 'Livermorium',
    symbol: 'Lv',
    atomicNumber: 116,
    atomicMass: 293.000,
    standardState: 'Unknown',
    period: 7,
    group: 16,
    backgroundColor: '#B3FFFF'
  },
  {
    name: 'Tennessine',
    symbol: 'Ts',
    atomicNumber: 117,
    atomicMass: 294.000,
    standardState: 'Unknown',
    period: 7,
    group: 17,
    backgroundColor: '#B3E4FF'
  },
  {
    name: 'Oganesson',
    symbol: 'Og',
    atomicNumber: 118,
    atomicMass: 294.000,
    standardState: 'Unknown',
    period: 7,
    group: 18,
    backgroundColor: '#BAFFC9'
  }
];
