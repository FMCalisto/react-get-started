var data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

var Comment = React.createClass({

    rawMarkup: function() {
        var md = new Remarkable();
        var rawMarkup = md.render(this.props.children.toString());
        return {
            __html: rawMarkup
        };     
    },

    render: function() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML={this.rawMarkup()} />
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