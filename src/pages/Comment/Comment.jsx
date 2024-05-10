import React from 'react'
import CommentPage from '../../components/CommentPage/CommentPage'
import { useParams } from 'react-router-dom'
import MagicSuggestIcon from '../../components/MagicButton/MagicButton'

const Comment = () => {
  const {id} =  useParams()

  return (
    <div>
        <CommentPage id={id}/>
        <MagicSuggestIcon />

    </div>
  )
}

export default Comment