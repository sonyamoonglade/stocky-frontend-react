import React, {FC} from 'react';
import './step-tracking-line.scss'


interface stepTrackingLineProps {
    currentStep: number
}

const StepTrackingLine:FC<stepTrackingLineProps> = ({currentStep}) => {
    return (
        <ul className='tracking-list'>
                <li className="personal-information-track track active">
                    <div className="tracking-box active">
                        <p className="tracking-number">1</p>
                    </div>
                    <p className="tracking-title">Personal <br/> Information</p>
                </li>
                <li className="password-track track">
                    <div className="tracking-box">
                        <p className="tracking-number">2</p>
                    </div>
                    <p className="tracking-title">Password</p>

                </li>
                <li className="broker-account-track track">


                    <div className="tracking-box">
                        <p className="tracking-number">3</p>
                    </div>
                    <p className="tracking-title">Broker <br/> Account</p>
                </li>

        </ul>
    );
};

export default StepTrackingLine;