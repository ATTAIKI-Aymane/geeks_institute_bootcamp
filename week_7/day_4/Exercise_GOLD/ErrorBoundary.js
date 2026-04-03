import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  occurError = () => {
    this.setState({ hasError: true });
  };

  componentDidCatch(error, info) {
    console.log("Error:", error);
    console.log("Info:", info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.children(this.occurError, true);
    }

    return this.props.children(this.occurError, false);
  }
}

export default ErrorBoundary;