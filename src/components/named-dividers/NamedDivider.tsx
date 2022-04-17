import React, {FC} from 'react';
import './named-divider.scss'

interface namedDividerProps {
    name: string
}

const NamedDivider:FC<namedDividerProps> = (props) => {
    return (
        <div className='divider-container'>
            <p className='name'>{props.name}</p>
        </div>
    );
};

export default NamedDivider;