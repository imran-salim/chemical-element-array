import './modal.css'

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
                
                <div className="modal-header">
                    <div className="element-symbol">{symbol}</div>
                    <div>
                        <div className="element-name">{name}</div>
                        <div style={{ color: '#666' }}>Element {atomicNumber}</div>
                    </div>
                </div>

                <div className="modal-content">
                    <div className="element-details">
                        <div className="detail-item">
                            <div className="detail-label">Atomic Number</div>
                            <div className="detail-value">{atomicNumber}</div>
                        </div>
                        
                        <div className="detail-item">
                            <div className="detail-label">Atomic Mass</div>
                            <div className="detail-value">{atomicMass} u</div>
                        </div>
                        
                        <div className="detail-item">
                            <div className="detail-label">Period</div>
                            <div className="detail-value">{period}</div>
                        </div>
                        
                        <div className="detail-item">
                            <div className="detail-label">Group</div>
                            <div className="detail-value">{group}</div>
                        </div>
                        
                        <div className="detail-item" style={{ gridColumn: '1 / -1' }}>
                            <div className="detail-label">Standard State</div>
                            <div className="detail-value">{standardState}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
