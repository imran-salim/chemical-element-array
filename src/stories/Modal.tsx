import './Modal.css'

interface ModalProps {
    atomicNumber: number;
    symbol: string;
    name: string;
    period: number;
    group: number;
    atomicMass: number;
    standardState: string;
}

export const Modal = ({ atomicNumber, symbol, name, period, group, atomicMass, standardState }: ModalProps) => {
    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <button className="modal-close">×</button>
                <div className="modal-content">
                    <h1>{name}</h1>
                    <h2>{symbol}</h2>
                    <p>Atomic Number: {atomicNumber}</p>
                    <p>Period: {period}</p>
                    <p>Group: {group}</p>
                    <p>Atomic Mass: {atomicMass} u</p>
                    <p>Standard State: {standardState}</p>
                </div>
            </div>
        </div>

    );
}
