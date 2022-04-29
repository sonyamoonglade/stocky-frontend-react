import React, {FC} from 'react';
import './step-tracking-line.scss'


interface stepTrackingLineProps {
    currentStep: number
}

const StepTrackingLine:FC<stepTrackingLineProps> = ({currentStep}) => {
    return (
        <ul className='tracking-list'>
                <li className="personal-information-track track">
                    <div className={currentStep > 1  ? "tracking-box active" : "tracking-box"}>
                        <p className="tracking-number">1</p>
                    </div>
                    <p className="tracking-title">Personal <br/> Information</p>
                </li>
                <li className={currentStep > 1  ? "password-track track active" : "password-track track"}>
                    <div className={currentStep > 2  ? "tracking-box active" : "tracking-box"}>
                        <p className="tracking-number">2</p>
                    </div>
                    <p className="tracking-title">Password</p>

                </li>
                <li className={currentStep > 2  ? "password-track track active" : "password-track track"}>
                    <div className={currentStep == 4  ? "tracking-box active" : "tracking-box"}>
                        <p className="tracking-number">3</p>
                    </div>
                    <p className="tracking-title">Broker <br/> Account</p>
                </li>

        </ul>
    );
};

export default StepTrackingLine;