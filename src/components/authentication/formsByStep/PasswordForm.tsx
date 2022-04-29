import React, {FC} from 'react';
import {stepFormProps} from "../formLayout/FormLayout";

const PasswordForm:FC<stepFormProps> = ({incrementFormStep,decrementFormStep}) => {

    return (
        <>
            <form >




            </form>
            <div className="form-nav">
                <button onClick={() => decrementFormStep!()} className='form-previous-btn'>Previous</button>
                <button onClick={() => incrementFormStep!()} className='form-next-btn'>Next</button>
            </div>
        </>
    );
};

export default PasswordForm;