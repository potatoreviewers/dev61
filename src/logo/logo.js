
import atom from './atom.svg';
import sqrt from './sqrt.svg'
import './logo.css';

function Logo() {
  return (
    <div className="Logo">
        <img src={atom} className="Logo-atom" alt="atom" />
        <img src={sqrt} className="Logo-sqrt" alt="sqrt" />
        <div className="Logo-physmath"> фм </div>
        <div className="Logo-61"> 61 </div>
    </div>
  );
}

export default Logo;
