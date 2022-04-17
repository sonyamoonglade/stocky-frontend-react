import React, {FC, useEffect, useMemo, useState} from 'react';
import './stock-item.scss'
import {BalanceChangeInterface, CurrencyType, StockItemInterface} from "../../../../shared/types/types";
import axios from "axios";
import StringFormatter from "../../../../shared/services/StringFormatter";
import {Avatar} from "@chakra-ui/react";
import BalanceChange from "../../../layout/sidebar/components/balance-change/BalanceChange";


interface stockItemProps {
    stock: StockItemInterface
}


const StockItem:FC<stockItemProps> = ({stock}) => {
    console.log('render item')

    const {
        isPositiveChange,
        indexName,
        numericChange,
        currentPrice,
        percentageChange,
        companyName,
        isOwned,
        amount
    } = stock

    const [icon, setIcon] = useState<string>('')

    const mockBalanceChange: BalanceChangeInterface = {
        changeNumeric: numericChange,
        changePercentage: percentageChange,
        isPositiveChange: isPositiveChange,
        currencyType: CurrencyType.US_DOLLAR,
        usedFor: 'list-view'
    }

    useEffect(  () => {

        async function getCompanyIcon(){
            const baseUrl = 'http://favicongrabber.com/api'
            const site = `www.${companyName.toLowerCase()}.com`
            const requestUrl = `${baseUrl}/grab/${site}`
            const {data} = await axios.get(requestUrl)
            setIcon(data.icons[0].src)
        }

        getCompanyIcon()

    },[stock])
    let amountOfStock;


    return (
        <li className='stock-item'>
            <div className="leading">

                <Avatar src={icon}
                        boxSize={20}
                        backgroundColor='transparent'

                />

                <div className="info">

                    <p className="company-name">
                        {companyName}
                    </p>
                    <p className="subtitle">
                        {isOwned ? amountOfStock : indexName }
                    </p>

                </div>

            </div>

            <div className="trailing">
                <div className="balance-change">
                    <BalanceChange
                        balanceChange={mockBalanceChange} />
                </div>
            </div>
        </li>
    );
};

export default StockItem;