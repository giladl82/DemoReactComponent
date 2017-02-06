//require('styles/CetMiniForm.css');

var React = require('react');

class CetMiniForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      label: this.props.label,
      value: this.props.value,
      onSubmit: this.props.onSubmit
    }

    this.submitHandler = this.submitHandler.bind(this);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.setValue = this.setValue.bind(this);
  }

  setValue(newValue) {
    this.setState({
      value: newValue
    });
  }

  inputChangeHandler(ev) {
    this.setState({[ev.target.dataset.for]: ev.target.value})
  }

  submitHandler(ev) {
    ev.preventDefault();
    this.state.onSubmit(this.input.value)
  }

  render() {
    return (
      <div className="cet__miniform__container">
        <label className="cet__miniform__label">{this.state.label}</label>&nbsp;
        <input className="cet__miniform__input" onChange={this.inputChangeHandler} data-for="value" ref={(input) => {this.input = input}} />
        <button className="cet__miniform__submit" onClick={this.submitHandler}>Submit</button>
      </div>
    );
  }
}

CetMiniForm.defaultProps = {
  label: 'I am a mini form',
  value: '',
  onSubmit: () => { console.log(this.state.input.value) }
};

export default CetMiniForm
