var React = require('react');

var Repo = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    repos: React.PropTypes.array.isRequired
  },
  render: function() {
    return (
      <div> Repos: {this.props.repos} </div>
    )
  }
});

module.exports = Repo;