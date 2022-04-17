import React, {FC, useMemo, useRef, useState} from 'react';
import {Icon, InputGroup, InputLeftAddon} from "@chakra-ui/react";
import {BiLogIn, BiLogOut, BiSearch} from "react-icons/bi";

import "./header.scss"
import RandomUsernameGenerator from "../../../shared/services/RandomUsernameGenerator";

const Header:FC = () => {

    const inputRef = useRef<HTMLInputElement >(null)

    const [symbol,setSymbol] = useState<string>('')

    const avatarUrl:string = 'https://external-preview.redd.it/fBai3DKZrSGf3YRd89f9pUHJua_lyGNS3LF0I-joA8Y.jpg?auto=webp&s=a2792118a8b080350240abc745d3ca6e53f18ca1'

    const userFullname:string = "Artem Timofeev"

    const isAuthenticated = false

    // const userFullnamePlaceholder: string | undefined = useMemo(() => {
    //     if(!isAuthenticated) return RandomUsernameGenerator.generateRandomInvestorName()
    //     return;
    // },[isAuthenticated])
    const userFullnamePlaceholder = RandomUsernameGenerator.generateRandomInvestorName()

    function inputChangeHandler(e:any): void{

        if(e.target.value.length === 0) inputRef.current!.style.width = '200px'

        const currentWidth:string= window.getComputedStyle(inputRef.current!).width
        const numericWidth:number = Number(currentWidth.slice(0,currentWidth.length - 2))

        const breakPointWidth = 399

        if(symbol.length % 15 == 0 && symbol.length !== 0 && breakPointWidth >= numericWidth) {

            const nextWidth:string= (numericWidth + numericWidth / 2).toString()
            inputRef.current!.style.width = nextWidth + 'px'

        }

        setSymbol(e.target.value)

    }

    function keyPressHandler(e: any): void{
        if(e.key !== 'Enter') return

        console.log('logic...')
    }
    function handleInputClick(){
        return inputRef.current!.focus()
    }




    return (
        <header>
            <div className="symbol-search">
                <Icon as={BiSearch} boxSize={8} className='search-icon' color='gray.400'/>
                <InputGroup >
                    <InputLeftAddon
                        onClick={handleInputClick}
                        children='Symbol:'
                        borderColor='gray.200'
                        fontFamily='Roboto'
                        fontSize='1.125rem'
                        cursor='default'
                    />
                    {/*@ts-ignore*/}
                    <input ref={inputRef}
                           onChange={inputChangeHandler}
                           value={symbol}
                           className='symbol-input'
                           placeholder='MSFT'
                           onKeyDown={keyPressHandler}
                    />
                </InputGroup>
            </div>

            <div className="header-rest">
                <p className={isAuthenticated ? "user-fullname border-green" : "user-fullname border-red"}>
                    {
                        isAuthenticated ?
                        userFullname :
                        userFullnamePlaceholder
                    }
                </p>
                {isAuthenticated ?
                    <Icon as={BiLogOut} boxSize={7} color='gray.700' className='logout-icon' /> :
                    <Icon as={BiLogIn} boxSize={7} color='gray.700' className='logout-icon'/>
                }
            </div>

        </header>
    );
};

export default Header;