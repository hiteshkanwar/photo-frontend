import React from 'react';
import { Spinner } from '@chakra-ui/react'
import './Style.css'

const FullPageLoading = () => {
    return(
        <div className='loaderWrapper'>
            <div className='full-page-loading'>
                <Spinner/>
            </div>
        </div>
        
    )
}
export default FullPageLoading