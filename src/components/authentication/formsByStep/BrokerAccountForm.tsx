import React, {FC} from 'react';
import {stepFormProps} from "../formLayout/FormLayout";

const BrokerAccountForm:FC<stepFormProps> = ({decrementFormStep}) => {

    return (
       <>
           <form >

           </form>

           <div className="form-nav">
               <button onClick={() => decrementFormStep!()} className='form-previous-btn'>Previous</button>
           </div>
       </>
    );
};

export default BrokerAccountForm;