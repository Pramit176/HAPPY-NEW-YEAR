import React, { useState } from 'react';
import './SpecialNoteModal.css';

export default function SpecialNoteModal({ buttonText = "Click for a Special Note!", children }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="special-modal-btn" onClick={() => setOpen(true)}>{buttonText}</button>
      {open && (
        <div className="special-modal-bg" onClick={() => setOpen(false)}>
          <div className="special-modal-content" onClick={e => e.stopPropagation()}>
            <button className="special-modal-close" onClick={() => setOpen(false)}>&times;</button>
            {children}
          </div>
        </div>
      )}
    </>
  );
}

