import React from 'react'
import {ErrorWrapper} from "../styles/Error.styles"


const ErrorForm = ({error}) => {
  return (
    <ErrorWrapper>{error}</ErrorWrapper>
  )
}

export default ErrorForm