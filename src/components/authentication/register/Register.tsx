import React, {useState} from 'react';
import './register.scss'
import '../authentication.scss'
import StepTrackingLine from "../step-tracking-line/StepTrackingLine";
import InputGroup from "../input-group/InputGroup";
import {Box, Spacer} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import PersonalInformationForm from "../formsByStep/PersonalInformationForm";
import PasswordForm from "../formsByStep/PasswordForm";
import BrokerAccountForm from "../formsByStep/BrokerAccountForm";

const Register = () => {

    const [formState, setFormState] = useState(1)

    function incrementFormStep(){
        if(formState < 3){
            setFormState(prev => prev + 1)
        }
        console.log(formState)
    }
    function decrementFormStep(){
        if(formState > 1){
            setFormState(prev => prev - 1)
        }
        console.log(formState)
    }

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
                {
                    formState == 1 ?
                    <PersonalInformationForm
                        incrementFormStep={incrementFormStep}
                        decrementFormStep={null}
                    /> :
                    formState == 2 ?
                    <PasswordForm
                        decrementFormStep={decrementFormStep}
                        incrementFormStep={incrementFormStep}
                    /> :
                    <BrokerAccountForm
                        incrementFormStep={incrementFormStep}
                        decrementFormStep={decrementFormStep}
                    />

                }

            </div>

        </div>
    );
};

export default Register;