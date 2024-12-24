import './Modal.css'

interface ModalProps {
    atomicNumber: number;
    symbol: string;
    name: string;
}

export const Modal = ({ atomicNumber, symbol, name }: ModalProps) => {
    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <button className="modal-close">×</button>
                <div className="modal-content">
                    <h1>{name}</h1>
                    <h2>{symbol}</h2>
                    <h4>{atomicNumber}</h4>
                </div>
            </div>
        </div>

    );
}
