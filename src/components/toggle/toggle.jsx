import { useState } from 'react';
import './toggle.css';

const Toggle = ({ label, labelColor, onChange }) => {

  const [checked, setChecked] = useState(false);
  
  const handleOnChange = (e) => {
    setChecked(!checked);
    onChange(e);
  };

  return (
    <div className="d-flex align-items-center">
    <label className="me-2" style={{color: labelColor}}>{label}</label>
      <label className="switch">
        <input type="checkbox" value={checked} onChange={handleOnChange} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default Toggle;