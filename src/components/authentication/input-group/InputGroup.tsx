import React, {FC, HTMLInputTypeAttribute} from 'react';
import './input-group.scss'

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
    inputAddonText
        }) => {
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
                    type={type}
                    required={isRequired}
                />
            </label>
        </fieldset>
    );
};

export default InputGroup;