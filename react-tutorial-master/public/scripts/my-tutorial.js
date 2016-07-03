var Comment = React.createClass({

    rawMarkup: function() {
        var md = new Remarkable();
    }

    render: function() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                {md.render(this.props.children.toString())}
            </div>
        );
    }

});

var CommentBox = React.createClass({
    render: function() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList />
                <CommentForm />
            </div>
        );
    }
});

var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        <Comment author="Pete Hunt">This is one comment</Comment>
        <Comment author="Jordan Walke">This is *another* comment</Comment>
      </div>
    );
  }
});

var CommentForm = React.createClass({
    displayName: 'CommentForm',
    render: function() {
        return (
            React.createElement(
                'div',
                {className: "commentForm"},
                "Hello, world! I am a CommentForm."
            )
        );
    }
})

ReactDOM.render(
    React.createElement(CommentBox, null),
    document.getElementById('content')
);