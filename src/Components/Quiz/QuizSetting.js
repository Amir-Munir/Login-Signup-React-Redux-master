import React, { useEffect } from 'react'
import axios from 'axios'

export const QuizSetting = () => {
  useEffect(() => {

  }, [])

  return (
    <div>
      <div className='quiz_main mt-5'>
        <h2 className='text-center'>
          Quiz App
        </h2>
        <select class="form-select mb-4" aria-label="Default select example">
          <option selected>Category</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <select class="form-select mb-4" aria-label="Default select example">
          <option selected>Difficulty</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <select class="form-select mb-4" aria-label="Default select example">
          <option selected>Type</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <div class="mb-3">
        <input type="text" class="form-control" placeholder='Amount of Questions'/>
        </div>
        <div class="d-grid gap-2">
  <       button class="btn btn-primary" type="button">Button</button>
        </div>
      </div>
    </div>
  )
}
