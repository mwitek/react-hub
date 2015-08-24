var React = require('react');

var UserProfile = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    bio: React.PropTypes.object.isRequired
  },
  getDefaultProps: function(){
    return {
      username: 'No user provided',
      bio: 'no bio at this time'
    }
  },
  render: function() {
    return (
      <div>
        User Profile <br />
        Username: {this.props.username} <br/>
        Bio: {this.props.bio}
      </div>
    )
  }
});

module.exports = UserProfile;