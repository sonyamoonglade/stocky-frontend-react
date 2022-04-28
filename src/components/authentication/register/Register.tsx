import React, {useState} from 'react';
import './register.scss'
import '../authentication.scss'
import StepTrackingLine from "../step-tracking-line/StepTrackingLine";
import InputGroup from "../input-group/InputGroup";
import {Box, Spacer} from "@chakra-ui/react";
import {Link} from "react-router-dom";

const Register = () => {

    const [formState, setFormState] = useState(1)

    return (
        <div className='register auth-card'>
            <div className="left-part">
                &nbsp;
            </div>
            <div className="right-part">
                <p className='auth-page-title' >Register</p>
                <span>
                    <p className='auth-subtitle'>

                    <Link className='redirect-link-auth' to='/login' >
                        Already have an account? <span>Follow this page</span> to login
                    </Link>

                </p>
                </span>
                <StepTrackingLine currentStep={1} />
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
            </div>

        </div>
    );
};

export default Register;