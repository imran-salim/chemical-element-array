import { ChemicalElement } from './ChemicalElement';
import { elements } from '../data/elements';
import './periodicTable.css';

export const PeriodicTable = () => {
  const renderElement = (element: any) => {
    const isLanthanide = element.atomicNumber >= 58 && element.atomicNumber <= 71;
    const isActinide = element.atomicNumber >= 90 && element.atomicNumber <= 103;
    
    return (
      <div
        key={element.atomicNumber}
        data-group={element.group}
        data-period={element.period}
        className={`element-container ${isLanthanide ? 'lanthanide' : ''} ${isActinide ? 'actinide' : ''}`}
      >
        <ChemicalElement {...element} />
      </div>
    );
  };

  // Calculate column for lanthanides and actinides
  const getLanthActColumn = (atomicNumber: number) => {
    if (atomicNumber >= 58 && atomicNumber <= 71) {
      return atomicNumber - 54; // Lanthanides start at column 4
    }
    if (atomicNumber >= 90 && atomicNumber <= 103) {
      return atomicNumber - 86; // Actinides start at column 4
    }
    return undefined;
  };

  return (
    <div className="periodic-table">
      {/* Main periodic table elements */}
      {elements.map(element => {
        const column = getLanthActColumn(element.atomicNumber);
        if (column) {
          element = { ...element, group: column };
        }
        return renderElement(element);
      })}
      
      {/* Labels */}
      <div className="lanthanides-label">* Lanthanides</div>
      <div className="actinides-label">* Actinides</div>
    </div>
  );
};
