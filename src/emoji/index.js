import React from 'react'
import EmojiSearch from './search'
import EmojiResult from './result'
import FilterEmoji from './filter'
import LoadMore from './loadMore'

const Emoji = () => {
  let [filter,setFilter] = React.useState("")
  let [more,setMore] = React.useState(20)
  const takeTarget = (target) => {
    setFilter(target)  
  }
  const takeMore = (More) => {
    setMore(more+More)
  }
  
  
  let filterArr = FilterEmoji(filter,more)
  console.log(filterArr)

  return (
    <div>
      <EmojiSearch handleTake={takeTarget} />
      <LoadMore handleMore={takeMore} />
      <EmojiResult data={filterArr} />
    </div>
  )
}

export default Emoji
