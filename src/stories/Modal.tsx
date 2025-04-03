import './Modal.css'
import { useEffect } from 'react';

interface ModalProps {
    atomicNumber: number;
    symbol: string;
    name: string;
    onClose: () => void;
}

export const Modal = ({ atomicNumber, symbol, name, onClose }: ModalProps) => {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-container">
                <button className="modal-close" onClick={onClose}>×</button>
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title">{name}</h1>
                        <h2 className="modal-symbol">{symbol}</h2>
                    </div>
                    <div className="modal-body">
                        <div className="modal-info">
                            <div className="info-item">
                                <span className="info-label">Atomic Number:</span>
                                <span className="info-value">{atomicNumber}</span>
                            </div>
                            <div className="info-item">
                                <span className="info-label">Atomic Mass:</span>
                                <span className="info-value">-</span>
                            </div>
                            <div className="info-item">
                                <span className="info-label">Category:</span>
                                <span className="info-value">-</span>
                            </div>
                            <div className="info-item">
                                <span className="info-label">Electron Configuration:</span>
                                <span className="info-value">-</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
