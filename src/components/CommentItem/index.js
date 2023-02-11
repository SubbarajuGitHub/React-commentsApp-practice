import {Component} from 'react'

import './index.css'

class CommentAdded extends Component {
  render() {
    const {commentDetails, onDelete, toggleIsLiked, color, Dates} = this.props
    const {name, tweet, id, isLiked} = commentDetails
    const firstLetter = name.slice(0, 1)
    const deleteId = () => {
      onDelete(id)
    }
    const LikedFunction = () => {
      toggleIsLiked(id)
    }
    const Images = isLiked
      ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

    return (
      <li className="list-items each">
        <div className="comments-container">
          <p className={`first-letter ${color}`}>{firstLetter}</p>
          <p className="username">{name}</p>
          <p className="date">{`${Dates} ago`}</p>
        </div>
        <p className="tweet">{tweet}</p>
        <div className="like-container">
          <button type="button" onClick={LikedFunction} className="buttons">
            <img src={Images} alt="like" className="like-image" />
          </button>
          <p className="like-sent">Like</p>
          <button type="button" className="buttons" data-testid="delete">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              className="delete"
              alt="delete"
              onClick={deleteId}
            />
          </button>
        </div>
      </li>
    )
  }
}
export default CommentAdded
