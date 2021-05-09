import React from 'react'

const EmojiResult = (props) => {
  return (
    <ul>
      {props.data.map(emoji =><li>{emoji.symbol + emoji.title}</li>)}   
    </ul>
  )
}

export default EmojiResult
