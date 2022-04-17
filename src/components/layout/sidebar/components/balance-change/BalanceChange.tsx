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

    const colorForChange:string = isPositiveChange ? '#28a63b' : '#d73d3d';

    const numericChangeString = useMemo(() => {
        return BalanceFormatter.formatNumericBalance(changeNumeric)
    },[changeNumeric])

    const percentChangeString = useMemo(() => {
        return BalanceFormatter.formatPercentChange(changePercentage);
    },[changePercentage])

    const readyChangeString = useMemo(() => {
        return BalanceFormatter.prepareBalanceChangeString(numericChangeString,percentChangeString,currencyType, usedFor)
    },[numericChangeString,percentChangeString,currencyType,usedFor])

    const boxSize:number = usedFor == 'for-list-view' ? 5 : 7

    return (
        <div className={`balance-change-composed ${usedFor}`}>
            {
                isPositiveChange ?
                <Icon className={`arrow-icon ${usedFor}`} as={BiUpArrowAlt} boxSize={boxSize} color={colorForChange}  /> :
                <Icon className={`arrow-icon ${usedFor}`} as={BiDownArrowAlt} boxSize={boxSize} color={colorForChange} />
            }
            <p className= {
                    isPositiveChange ?
                    `balance-change green ${usedFor}`:
                    `balance-change red ${usedFor}`
                }
            >
                {readyChangeString}
            </p>

        </div>

    );
};

export default BalanceChange;