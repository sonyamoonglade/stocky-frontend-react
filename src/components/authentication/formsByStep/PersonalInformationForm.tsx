import React, {FC} from 'react';
import InputGroup from "../input-group/InputGroup";
import {Box} from "@chakra-ui/react";
import {stepFormProps} from "../formLayout/FormLayout";



const PersonalInformationForm:FC<stepFormProps> = ({incrementFormStep}) => {
    return (
        <>
            <form >
                <InputGroup
                    type={'email'}
                    placeholder={'example@mail.com'}
                    isRequired={true}
                    id={'email'}
                    inputAddonText={'Email'}
                />
                <Box h={4} />
                <InputGroup
                    type={'text'}
                    placeholder={'Ivan'}
                    isRequired={true}
                    id={'firstname'}
                    inputAddonText={'Firstname'}
                />
                <Box h={4} />
                <InputGroup
                    type={'text'}
                    placeholder={'Ivanov'}
                    isRequired={true}
                    id={'lastname'}
                    inputAddonText={'Lastname'}
                />
                <Box h={4} />
                <InputGroup
                    type={'date'}
                    placeholder={''}
                    isRequired={true}
                    id={'date'}
                    inputAddonText={'Birthdate'}
                />



            </form>

            <div className="form-nav first-step">
                <button onClick={() => incrementFormStep!()} className='form-next-btn'>Next</button>
            </div>
        </>

    );
};

export default PersonalInformationForm;