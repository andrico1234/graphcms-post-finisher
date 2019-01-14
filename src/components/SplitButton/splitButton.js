import React from 'react'
import styled from 'styled-components';

class SplitButton extends React.Component {
  state = {
    activeItem: 'right',
  }

  handleClick = buttonSide => {
    this.setState({
      activeItem: buttonSide,
    })
  }

  render() {
    const { activeItem } = this.state

    return (
      <StyledSplitButton>
        <SplitButtonWrapper>
          <LeftButton isActive={activeItem === 'left'} onClick={() => this.handleClick('left')}>
            past
          </LeftButton>
          <RightButton isActive={activeItem === 'right'} onClick={() => this.handleClick('right')}>
            future
          </RightButton>
        </SplitButtonWrapper>
      </StyledSplitButton>
    )
  }
}

export default SplitButton

const StyledSplitButton = styled.div`
  width: 100%;
`
const SplitButtonWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 600px;
`

const SplitButtonDefaults = styled.button`
  background-color: ${props => props.isActive ? '#e9e9e9' : 'white'}
  border: none;
  box-shadow: ${props => props.isActive ? 'inset 0px 1px 6px 1px rgba(0,0,0,0.51)' : '0px 1px 2px 0px rgba(0,0,0,0.5)'}; 
  cursor: pointer;
  height: 48px;
  font-size: 24px;
  text-transform: capitalize;
  width: 300px;

  &:focus {
    outline: none;
  }
`

const LeftButton = styled(SplitButtonDefaults)`
  border-bottom-left-radius: 30px;
  border-right: ${props => props.isActive ? '1px solid grey' : 'none'};
  border-top-left-radius: 30px;
`

const RightButton = styled(SplitButtonDefaults)`
  border-bottom-right-radius: 30px;
  border-left: ${props => props.isActive ? '1px solid grey' : 'none'};
  border-top-right-radius: 30px;
`