import './Modal.css'

export const Modal = () => {
    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <button className="modal-close">×</button>
                <div className="modal-content">
                    <h1>Element</h1>
                </div>
            </div>
        </div>

    );
}
