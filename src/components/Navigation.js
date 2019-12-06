import React from "react";
import PropTypes from "prop-types";

export class Navigation extends React.Component {
  render() {
    const { next } = this.props;

    return (
      <p>
        <a href={next.next}>Дальше</a>
      </p>
    );
  }
}
Navigation.propTypes = {
  next: PropTypes.string
};
