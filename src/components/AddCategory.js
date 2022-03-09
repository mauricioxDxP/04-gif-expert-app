import { useState } from "react"
import React from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setAnimeShows}) => {
  const [inputValue, setInputValue] = useState('')
  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(inputValue.trim().length > 2){
      setAnimeShows(animeShows=>[inputValue,...animeShows]);
      setInputValue('')
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
          <input 
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            />
      </form>
    </>
  )
}
AddCategory.propTypes = {
  setAnimeShows: PropTypes.func.isRequired
}
