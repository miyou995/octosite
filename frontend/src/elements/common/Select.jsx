import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'Basic', label: 'Basic' },
  { value: 'Medium', label: 'Medium' },
  { value: 'Business', label: 'Business' },
  { value: 'Advanced', label: 'Advanced' }
];

export default class SelectInput extends React.Component {
  state = {
    selectedOption: null,
  };



  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        className="basic-single"
          classNamePrefix="select"
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}