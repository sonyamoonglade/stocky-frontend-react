import React, {FC} from 'react';
import {stepFormProps} from "../formLayout/FormLayout";

const BrokerAccountForm:FC<stepFormProps> = ({decrementFormStep,completeRegistration}) => {

    return (
       <>
           <form >

           </form>

           <div className="form-nav last-step">
               <button onClick={() => decrementFormStep!()} className='form-previous-btn'>Previous</button>
               <button onClick={() => completeRegistration!()} className='form-next-btn form-register'>Register!</button>

           </div>
       </>
    );
};

export default BrokerAccountForm;