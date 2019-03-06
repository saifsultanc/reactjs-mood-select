import React, { Component } from "react";
import SweetAlert from "sweetalert2-react";

class SelectEmoji extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      current: 0,
      text: ["Are you happy?", "You might be sad?", "Umm. You look confused?"]
    };
  }

  handleConfirm = () => {
    this.props.onChange(this.state.current);
    this.setState({ show: false });
  };

  handleCancel = () => {
    this.setState({ current: this.state.current + 1 });
    if (this.state.current === 3) this.props.onChange(this.state.current);
  };

  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-link"
          onClick={() => this.setState({ show: true, current: 0 })}
        >
          Mood Change
        </button>
        {this.state.current < 3 && (
          <SweetAlert
            show={this.state.show}
            title="HOW DO YOU FEEL!"
            text={this.state.text[this.state.current]}
            showConfirmButton={true}
            confirmButtonText="Yes!"
            onConfirm={this.handleConfirm}
            showCancelButton={true}
            cancelButtonText="No"
            onCancel={this.handleCancel}
          />
        )}
      </div>
    );
  }
}

export default SelectEmoji;
