import './logo.css';

function Logo({ isLoading = false }) {
  return (
    <div className="logo">
      <div className={isLoading ? "atom loading" : "atom"}>
        <div className="orbit orbit-1"></div>
        <div className="orbit orbit-2"></div>
        <div className="orbit orbit-3"></div>
        <div className="nucleus"></div>
      </div>

      <div className="sqrt">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className="physmath"> фм </div>
      <div className="sixty-one"> 61 </div>

    </div>

  );
}

export default Logo;
