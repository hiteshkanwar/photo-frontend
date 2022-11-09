import React,{ReactNode} from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { Flex, Container } from '@chakra-ui/react'
import './Style.css'

interface ILayoutProps  { 
  children: React.ReactNode
}

const Layout = (props: ILayoutProps) => {
  return (
    <Flex>
      <div className="sideBarWrapper">
        <Sidebar />
      </div>
      <div className='mainWrapper'>
        <Container className='customiseContainer'>
          <Header />
          {props.children}
        </Container>
      </div>
    </Flex>
  )
}

export default Layout