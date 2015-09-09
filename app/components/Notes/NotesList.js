var React = require('react');

var NotesList = React.createClass({
  propTypes: {
    notes: React.PropTypes.array.isRequired
  },
  render: function(){
    if(this.props.notes && this.props.notes.length > 0) {
      var notes = this.props.notes.map(function(note, index){
        return <li key={index}>{note}</li>
      });
      return(
        <ul>
          {notes}
        </ul>
      )
    }else {
      return(<ul></ul>)
    }
  }
});

module.exports = NotesList;