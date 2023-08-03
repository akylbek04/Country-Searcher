import { Component } from "react";
import Button from "./components/Button/Button";
import Country from "./components/Country/Country";
import "./App.css";
import { Wrapper } from "./components/StyledComps/Styles";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputVal: "",
      searchedCountry: "Kyrgyzstan",
      loading: false,
      countryData: "",
    };
  }

  fetchCountry = () => {
    setTimeout(() => {
      fetch(`https://restcountries.com/v3.1/name/${this.state.searchedCountry}`)
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            countryData: data[0],
            loading: true,
          });
        });
    }, 3000);
  };

  componentDidMount() {
    const { searchedCountry } = this.state;
    this.fetchCountry();
  }

  handleChange = (e) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        inputVal: e.target.value,
      };
    });
  };

  handleClick = () => {
    this.setState({ searchedCountry: this.state.inputVal, loading: false }, () =>
      this.fetchCountry()
    );
  };

  render() {
    const { loading, countryData, inputVal, searchedCountry } = this.state;
    const { handleChange, handleClick } = this;
    return (
      <div className="App">
        <Wrapper>
          <Button
            handleChange={handleChange}
            handleClick={handleClick}
            value={inputVal}
          />
          {loading ? <Country {...countryData} /> : <h3>...loading</h3>}
        </Wrapper>
      </div>
    );
  }
}

export default App;
