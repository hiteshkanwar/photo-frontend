import { Avatar, Wrap, WrapItem } from '@chakra-ui/react'

const Header = () => {
  return (
    <div className="headerNavbar">
        <Wrap>
          <WrapItem>
            <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
          </WrapItem>
        </Wrap>
    </div>
  )
}

export default Header