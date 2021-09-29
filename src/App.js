import React, { useEffect, useState } from 'react'
import { useFetch } from './useFetch'
import User from './User'

const App = () => {
  const { loading, data } = useFetch()
  const [page, setPage] = useState(0)
  const [followers, setFollowers] = useState([])
  // console.log(data.length)

  const handlePrev = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1
      if (prevPage < 0) {
        prevPage = data.length - 1
      }
      return prevPage
    })
  }

  const handleNext = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1
      if (nextPage > data.length - 1) {
        nextPage = 0
      }
      return nextPage
    })
  }

  useEffect(() => {
    if (loading) return
    setFollowers(data[page])
  }, [loading, page])

  return (
    <div className='app-wrapper'>
      <div className='header'>
        <h1>{loading ? 'loading...' : 'Pagination'}</h1>
        <div className='underline'></div>
      </div>
      <div className='followers'>
        {followers.map((follower) => {
          return <User key={follower.id} {...follower} />
        })}
      </div>
      {!loading && (
        <div className='btn-container'>
          <div className='prev-btn'>
            <button onClick={handlePrev}>Prev</button>
          </div>
          {data.map((element, index) => {
            return (
              <button
                key={index}
                onClick={() => setPage(index)}
                className={`${index === page ? 'active-btn' : null}`}
              >
                {index + 1}
              </button>
            )
          })}
          <div className='next-btn'>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
