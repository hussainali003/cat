import React from 'react'

const LoadMore = (props) => {
  const handleClick = () => {
    props.handleMore(10)
  }

  return (
    <div>
      <button onClick={handleClick}>Show More</button>
    </div>
  )
}

export default LoadMore
