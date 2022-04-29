import React, {FC, HTMLInputTypeAttribute, useState} from 'react';
import './input-group.scss'
import {Icon} from "@chakra-ui/react";
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'
interface inputGroupProps {
    type: HTMLInputTypeAttribute
    placeholder: string
    isRequired: boolean
    id: string
    inputAddonText: string
}

const InputGroup:FC<inputGroupProps> = ({
    type,
    placeholder,
    isRequired,
    inputAddonText,
    id
        }) => {


    const [passwordShowState,setPasswordShowState] = useState<HTMLInputTypeAttribute>('password')

    function togglePass(){
        setPasswordShowState(prev => prev == 'text' ? 'password' : 'text')
        console.log(passwordShowState)
    }

    return (
        <fieldset className="input-group">
            <label  htmlFor={type}>
                <p className='input-addon'>{inputAddonText}</p>
                <input
                    style={type == 'date' ? {paddingRight:'30'} : undefined}
                    onBlur={(e:any) => e.target.placeholder = placeholder}
                    onClick={(e: any) => e.target.placeholder =''}
                    placeholder={placeholder}
                    id={type}
                    type={type == 'password' ? passwordShowState : type}
                    required={isRequired}

                />
                {passwordShowState == 'password' && id != 'confirm-password' &&
                    <Icon onClick={togglePass} as={AiFillEyeInvisible} className='pass-show'/>}
                {passwordShowState == 'text' && id == 'password' &&
                    <Icon onClick={togglePass} as={AiFillEye} className='pass-show'/>
                }
            </label>
        </fieldset>
    );
};

export default InputGroup;