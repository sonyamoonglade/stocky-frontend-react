import React, {FC, useMemo} from 'react';
import {Icon} from "@chakra-ui/react";
import {BiDownArrowAlt, BiUpArrowAlt} from 'react-icons/bi'

import './balance-change.scss'
import {BalanceChangeInterface, CurrencyType} from "../../../../../shared/types/types";
import BalanceFormatter from "../../../../../shared/services/BalanceFormatter";


interface balanceChangeProps{
    balanceChange: BalanceChangeInterface
}

const BalanceChange:FC<balanceChangeProps> = (
    {balanceChange}) => {

    const {
        changeNumeric,
        changePercentage,
        currencyType,
        isPositiveChange,
        usedFor
    } = balanceChange

    const colorForChange:string = isPositiveChange ? '#6BCB77' : '#FD5D5D';

    const numericChangeString = useMemo(() => {
        return BalanceFormatter.formatNumericBalance(changeNumeric)
    },[changeNumeric])

    const percentChangeString = useMemo(() => {
        return BalanceFormatter.formatPercentChange(changePercentage);
    },[changePercentage])

    const readyChangeString = useMemo(() => {
        return BalanceFormatter.prepareBalanceChangeString(numericChangeString,percentChangeString,currencyType)
    },[numericChangeString,percentChangeString,currencyType])


    return (
        <div className={`balance-change-composed`}>
            {
                isPositiveChange ?
                <Icon className='arrow-icon' as={BiUpArrowAlt} boxSize={7} color={colorForChange}  /> :
                <Icon className='arrow-icon' as={BiDownArrowAlt} boxSize={7} color={colorForChange} />
            }
            <p className= {
                    isPositiveChange ?
                    `balance-change green`:
                    `balance-change red`
                }
            >{readyChangeString}</p>
        </div>

    );
};

export default BalanceChange;