import React, { Component } from "react";
import shortid from "shortid";

class Form extends Component {
    state = {
      name: '',
      tag: '',
      experience: 'junior',
      licence: false,
    }

    handleChange = event => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value });
    }
    
    handleOnSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        this.props.onSubmit(this.state);
        this.reset();
    }
    
    reset = () => {
        this.setState({name: '', tag: '',})
    }
  
  nameInputId = shortid.generate();
  tagInputId = shortid.generate();

  handleLicenceChange = event => {
    console.log(event.currentTarget.checked);
    this.setState({licence: event.currentTarget.checked})
  }

        

    render() {
        return (
            <form onSubmit={this.handleOnSubmit}>
            <label htmlFor={this.nameInputId}>
            Имя
            <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                id={this.nameInputId}  
            />
          </label>
            <label htmlFor={this.tagInputId}>
            Прозвище
            <input
                type="text"
                name="tag"
                value={this.state.tag}
                onChange={this.handleChange}
                id={this.tagInputId}
            />
          </label>

            <p>Ваш уровень</p>

            <label htmlFor="">
              <input
                type="radio"
                name="experience"
                value="junior"
                onChange={this.handleChange}
                checked={this.state.experience === "junior"}
              /> Junior
            </label>

            <label htmlFor="">
              <input
                type="radio"
                name="experience"
                value="middle"
                onChange={this.handleChange}
                checked={this.state.experience === "middle"}
              /> Middle
            </label>

            <label htmlFor="">
              <input
                type="radio"
                name="experience"
                value="senior"
                onChange={this.handleChange}
                checked={this.state.experience === "senior"}
              /> Senior
            </label>

            <label htmlFor="">
              <input
                type="checkbox"
                name="licence"
                checked={this.state.licence}
                onChange={this.handleLicenceChange}
              /> Согласен с условием
            </label>
            
          <button type="submit" disabled={!this.state.licence}>Отправить</button>
        </form>
        );
    }
}

export default Form;