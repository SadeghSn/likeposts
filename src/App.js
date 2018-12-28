import React, { Component } from "react";
import "./App.css";
import User from "./User";
import Comments from "./Comments";

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      like: false,
      bookmark: false,
      items:[]
    };
    this.handeleLike=this.handeleLike.bind(this);
    this.handeleBookmark = this.handeleBookmark.bind(this);
    this.addComment = this.addComment.bind(this);
    this.deleteComment= this.deleteComment.bind(this);
  }

  addComment(e){
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };
   
      this.setState((prevState) => {
        return { 
          items: prevState.items.concat(newItem) 
        };
      });
     
      this._inputElement.value = "";
    }
    e.preventDefault();
  }

  deleteComment(key){
    var filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key);
    });
   
    this.setState({
      items: filteredItems
    });
  }

  handeleLike(){
    this.setState({
      like : !this.state.like
    })
  }

  handeleBookmark(){
    this.setState({
      bookmark: !this.state.bookmark
    })
  }

  render() {
    const label = this.state.like ? "fas fa-heart liked" : "far fa-heart";
    const bookmark = this.state.bookmark ? "fas fa-bookmark" : "far fa-bookmark";
    var numLike = "";
    if(this.state.like){
      numLike = numLike+1 ;
    }else{
      numLike ="";
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <User />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <img src="https://loremflickr.com/1080/720?random=2" alt={this.setState.username} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-10">
            <button type="submit" onClick={this.handeleLike}> <i className={label}></i> </button>
            <a href="#comment"><i className="far fa-comment-alt"></i></a>
            {numLike}
          </div>
          <div className="col-md-2">
            <button type="button" className="bookmark" onClick={this.handeleBookmark}> <i className={bookmark}></i> </button>
          </div>
        </div>
        <div className="row" id="comment">
          <div className="col-md-12">
            <Comments entries={this.state.items}
                      delete={this.deleteComment}
            />
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-md-12">
            <form onSubmit={this.addComment}>
              <input
              ref={(a) => this._inputElement = a}
              type="text"
              placeholder="Add Comment ..." />
            </form>
          </div>
        </div>
        <hr />
      </div>
);
}
}

export default App;
