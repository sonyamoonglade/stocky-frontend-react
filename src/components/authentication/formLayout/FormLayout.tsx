import React, {FC} from 'react';
import './form-layout.scss'
import {ReactJSXElement} from "@emotion/react/types/jsx-namespace";
import Header from "../../layout/header/Header";

export interface stepFormProps{
    incrementFormStep: Function | null
    decrementFormStep: Function | null
}

interface formLayoutProps {
    children: ReactJSXElement[] | ReactJSXElement
}

const FormLayout:FC<formLayoutProps> = ({children}) => {
    return (
        <div className='form-layout'>
            <Header symbolSearchOn={false} />
            <div className="content">
                {children}
            </div>
        </div>
    );
};

export default FormLayout;