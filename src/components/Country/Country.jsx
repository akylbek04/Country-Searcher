
import './Country.css'

const Country = ({ population, name, flags }) => {
  console.log(population, name, flags);
  return (
    <div className="wrapper">
      <div className="flag">
        <img width="250px" height="auto" src={flags.png} />
      </div>
      <div className="content">
        <h3>
          <i className="fa-regular fa-flag"></i>
          {name.common}
        </h3>
        <p>
          <i className="fa-solid fa-arrow-up-right-dots"></i>{" "}
          {`${(population / 1000000).toFixed(2)} ml`}
        </p>
      </div>
    </div>
  );
};

export default Country;
