import React from 'react'
import styled from 'styled-components'

const Button = ({ children }) => {
  return <DefaultButton>{children}</DefaultButton>
}

export default Button

const DefaultButton = styled.button`
  background: rgb(101,148,135);
  border: none;
  border-bottom: 4px solid rgb(53,95,90);
  border-radius: 5px;
  box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, 0.2);
  color: #fbfbfb;
  cursor: pointer;
  font-size: 22px;
  font-weight: 600;
  height: 60px;
  position: relative;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
  width: 205px;

  &:hover {
    box-shadow: 0px 2px 0px 0px rgba(0,0,0,.2);
    top: 1px;
  }
`
