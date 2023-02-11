import {Component} from 'react'

import './index.css'

import {v4 as uuidv4} from 'uuid'

import {formatDistanceToNow} from 'date-fns'

import CommentAdded from '../CommentItem'

const UserTweetsArray = []

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {commentsList: UserTweetsArray, name: '', tweet: ''}

  username = event => {
    this.setState({name: event.target.value})
  }

  usertweet = event => {
    this.setState({tweet: event.target.value})
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, tweet} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      tweet,
      isLiked: false,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      tweet: '',
    }))
  }

  onDelete = id => {
    const {commentsList} = this.state
    const FilteredData = commentsList.filter(Each => Each.id !== id)
    this.setState({commentsList: FilteredData})
  }

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  render() {
    const {commentsList} = this.state
    const Lengths = commentsList.length
    const RandomNumber = Math.ceil(Math.random() * 6)
    const color = initialContainerBackgroundClassNames[RandomNumber]
    const Dates = formatDistanceToNow(new Date())
    return (
      <div>
        <div className="comment-section-main-container">
          <div className="comment-first-container">
            <h1 className="heading">Comments</h1>
            <p className="description">Say something about 4.0 Technologies</p>
            <form onSubmit={this.onAddComment}>
              <input
                type="text"
                className="first-input-element"
                onChange={this.username}
                placeholder="Your Name"
              />
              <br />
              <textarea
                type="text"
                className="second-input-element"
                onChange={this.usertweet}
                rows="5"
                placeholder="Your Comment"
              />
              <br />
              <button type="submit" className="comment-button">
                Add Comment
              </button>
            </form>
          </div>
          <div className="comment-second-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="comments-image"
            />
          </div>
        </div>
        <div className="last-box">
          <p className="comment-line">{Lengths}</p>
          <p className="comm">Comments</p>
        </div>
        <ul className="unordered-lists">
          {commentsList.map(eachComment => (
            <CommentAdded
              key={eachComment.id}
              commentDetails={eachComment}
              onDelete={this.onDelete}
              toggleIsLiked={this.toggleIsLiked}
              color={color}
              Dates={Dates}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Comments
