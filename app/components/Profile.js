var React = require('react');
var Router = require('react-router');
var Repo = require('./Github/Repos');
var UserProfile = require('./Github/UserProfile');
var Note = require('./Notes/Notes');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');

var Profile = React.createClass({
  mixins: [Router.State, ReactFireMixin],
  getInitialState: function(){
    return {
      notes: [],
      bio: {name: 'Matt'},
      repos: [1,2,3]
    }
  },
  componentDidMount: function(){
    this.ref = new Firebase('https://react-hub.firebaseio.com');
    var childRef = this.ref.child(this.getParams().username)
    this.bindAsArray(childRef, 'notes');
  },
  componentWillUnmount: function(){
    this.unbind('notes');
  },
  render: function(){
    var username = this.getParams().username
    return (
      <div>
        <div className="columns medium-4">
          <UserProfile username={username} bio={this.state.bio}/>
        </div>
        <div className="columns medium-4">
          <Repo username={username} repos={this.state.repos} />
        </div>
        <div className="columns medium-4">
          <Note username={username} notes={this.state.notes} />
        </div>
      </div>
    )
  }
});

module.exports = Profile;