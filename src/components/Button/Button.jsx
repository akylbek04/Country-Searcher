import './Button.css'

const Button = ({handleChange, handleClick, value}) => {
    return (
      <div className="search">
        <input value={value} onChange={handleChange} placeholder="Enter the city" />
        <button onClick={handleClick}>
          <i
            className="fa-sharp fa-solid fa-magnifying-glass"
            style={{color: "#000000"}}
          ></i>
        </button>
      </div>
    );
}

export default Button