import { Component } from 'react';
import Button from '../Button/Button';
import s from '../Searchbar/Searchbar.module.css';

export default class Searchbar extends Component { 
  state = {
    inputValue: '',
  };

    handleChange = event => {
        this.setState({ inputValue: event.target.value.toLowerCase() });
    };

    handleSubmit = event => {
      event.preventDefault();
      
      if (this.state.inputValue.trim() === '') { 
        alert('Введите слово для поиска');
      return;
    }

        this.props.onSubmit(this.state.inputValue);
        this.setState({ inputValue: '' });
    };

    render() { 
    return (
        <form onSubmit={ this.handleSubmit} className={s.SearchForm}>
          <input
            className={s.SearchFormInput}
            type="text"
            value={this.state.inputValue}
            onChange={ this.handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
        />
        <Button label="Search" type="submit"/>
        </form>
    );
  }
}