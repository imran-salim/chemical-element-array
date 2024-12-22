import { useEffect, useState } from 'react';
import './chemicalElement.css';
import { InformationModal } from './InformationModal';

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
  period = 1,
  group = 1,
  backgroundColor = 'lightskyblue',
  ...props 
}: ChemicalElementProps) => {
  const [hover, setHover] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {

  }, []);

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
      {modal ? <InformationModal /> :
        <>
          <div id="atomic-number">{atomicNumber}</div>
          <p id="symbol">{symbol}</p>
          <p id="name">{name}</p>
        </>
      }

    </div>
  );
};
