import React, {FC} from 'react';
import {stepFormProps} from "../formLayout/FormLayout";
import InputGroup from "../input-group/InputGroup";
import {Box, Icon} from "@chakra-ui/react";
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai";

const PasswordForm:FC<stepFormProps> = ({incrementFormStep,decrementFormStep}) => {

    return (
        <>
            <form >

                <InputGroup
                    type={'password'}
                    placeholder={'your secret password'}
                    isRequired={true}
                    id={'password'}
                    inputAddonText={'Password'}
                />



                <Box h={4}/>
                <InputGroup
                    type={'password'}
                    placeholder={'confirm password'}
                    isRequired={true}
                    id={'confirm-password'}
                    inputAddonText={'Confirm'}
                />

            </form>
            <div className="form-nav">
                <button onClick={() => decrementFormStep!()} className='form-previous-btn'>Previous</button>
                <button onClick={() => incrementFormStep!()} className='form-next-btn'>Next</button>
            </div>
        </>
    );
};

export default PasswordForm;