import React from 'react'

var ErrorMessage = React.createClass({
  render () {
    var {errorMessage} = this.props;
    return (
      <div>
        <h3 className="text-center">{errorMessage}</h3> 
        <h5 className="text-center">please, try again</h5> 
      </div>
    );
  }
});

export default ErrorMessage;
