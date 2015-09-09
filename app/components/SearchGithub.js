var React = require('react');
var Router = require('react-router');

var SearchGithub = React.createClass({
  mixins: [Router.Navigation],
  handleSubmit: function(){
    var username = this.refs.username.getDOMNode().value
    this.refs.username.getDOMNode().value = '';
    this.transitionTo('profile', {username: username});
  },
  render: function(){
    var divStyle = { lineHeight: 0 };
    return(
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="row collapse">
            <div className="small-8 columns">
              <input type="text" ref="username"/>
            </div>
            <div className="small-4 columns">
              <button type="submit" className="button success text-center postfix" style={divStyle}>Search Github</button>
            </div>
          </div>
        </div>
      </form>
    )
  }
});

module.exports = SearchGithub;