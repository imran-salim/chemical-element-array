import { useState } from 'react';
import './chemicalElement.css';
import  { Modal } from './Modal';

interface ChemicalElementProps {
  /**
   * What is the name of this element?
   */
  name?: string;
  /**
   * What is the symbol of this element?
   */
  symbol?: string;
  /**
   * What is the atomic number of this element?
   */
  atomicNumber?: number;
  /**
   * What is the atomic mass of this element?
   */
  atomicMass?: number;
  /**
   * What is the standard state of this element?
   */
  standardState?: string;
  /**
   * What row does this element belong to?
   */
  period?: number;
  /**
   * What column does this element belong to?
   */
  group?: number;
  /**
   * What is the chemical group block of this element?
   */
  backgroundColor?: string;
   /**
   * Optional click handler
   */
  onClick?: () => void;
}

export const ChemicalElement = ({
  name = 'Oxygen',
  symbol = 'O',
  atomicNumber = 8,
  atomicMass = 15.999,
  standardState = 'Gas',
  period = 1,
  group = 1,
  backgroundColor = 'lightskyblue',
  ...props 
}: ChemicalElementProps) => {
  const [hover, setHover] = useState(false);
  const [modal, setModal] = useState(false);

  const passive = {
    'backgroundColor': 'white',
    opacity: 1,
    transition: '0.3s',
  };
  const active = {
    'backgroundColor': backgroundColor,
    opacity: 1,
    transition: '0.6s',
  };

  const showModal = () => {
    if (!modal) {
      setModal(true);
    } else {
      setModal(false);
    }
  }

  return (
    <div
      className="storybook-chemical-element"
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      onClick={() => showModal()}
      style={{
        ...passive,
        ...hover ? active : null
      }}
      {...props}
    >
      {modal ? <Modal atomicNumber={atomicNumber} symbol={symbol} name={name} period={period} group={group} atomicMass={atomicMass} standardState={standardState} /> :
        <>
          <div id="atomic-number">{atomicNumber}</div>
          <p id="symbol">{symbol}</p>
          <p id="name">{name}</p>
        </>
      }
    </div>
  );
};
