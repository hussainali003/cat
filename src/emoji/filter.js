import emojiList from './emoji.json'

function FilterEmoji(search,more) {

  return search === "" ? emojiList.filter((emoji,index) => index < more ? emoji.symbol : false) 
  :emojiList.filter(emoji => emoji.title.includes(search.toUpperCase()) || emoji.keywords.includes(search.toUpperCase()))
}

export default FilterEmoji
