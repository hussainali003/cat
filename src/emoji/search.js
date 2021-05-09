import React from 'react'

const EmojiSearch = (props) => {
  let [Value,setValue] = React.useState("")
  const handleChange = (e) => {
    setValue(e.target.value)
    props.handleTake(e.target.value)
  }

  return (
    <div>
      <input value={Value} onChange={e => handleChange(e)} placeholder="Search Emoji" />
    </div>
  )
}

export default EmojiSearch
