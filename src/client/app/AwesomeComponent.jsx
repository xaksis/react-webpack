import React from 'react';

class AwesomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {likesCount : 0};
    this.onLike = this.onLike.bind(this);
  }

  onLike () {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
  }

  render() {

    var likeStyle = {
      backgroundColor: "red",
      display: "inline-block",
      padding: 10
    };

    return (
      <div>
        Likes : <span style={likeStyle}>{this.state.likesCount}</span>
        <div><button onClick={this.onLike}>Like Me</button></div>
      </div>
    );
  }

}

export default AwesomeComponent;