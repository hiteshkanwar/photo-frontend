import React from 'react';
import { InputGroup, Input, InputRightElement, Button, Spinner } from '@chakra-ui/react'
import "./Style.css"
interface ISearchProps{
    onChange: (e: React.FormEvent<HTMLInputElement>) => void,
    value: string,
    loading: boolean
}

const SearchInput = ({onChange, value, loading}: ISearchProps): JSX.Element => {
    return(
        <InputGroup size='md' className='inputWrapper'>
            <Input
                pr='4.5rem'
                type='text'
                value={value}
                placeholder='Search Knowledge'
                onChange={onChange}
            />
            <InputRightElement width='4.5rem'>
                {
                    loading ? 
                    <Spinner mr='1.2rem' size='sm'/> :
                    <Button size='sm' className='searchIcon'>
                        /
                    </Button>
                }
                
            </InputRightElement>
        </InputGroup>
    )
}
export default SearchInput;