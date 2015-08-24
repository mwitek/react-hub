var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var Main = React.createClass({
  render: function(){
    return (
      <div className="container">
        <nav className="top-bar" data-topbar role="navigation">
          <div className="medium-7 offset-2" style={{marginTop: 15}}>
            MENU
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
