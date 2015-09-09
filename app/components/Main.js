var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var SearchGithub = require('./SearchGithub');
var Main = React.createClass({
  render: function(){
    return (
      <div className="container">
        <nav className="top-bar" data-topbar role="navigation">
          <div className="columns small-8 small-centered">
            <SearchGithub />
          </div>
        </nav>
        <div className="container">
          <RouteHandler />
        </div>
      </div>
    )
  }
});

module.exports = Main;
