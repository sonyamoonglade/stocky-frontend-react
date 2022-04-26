import React from 'react';
import './stock-list.scss'
import StockItem from "./components/stock-item/StockItem";
import {CurrencyType, StockItemInterface} from "../../shared/types/types";
import NamedDivider from "../named-dividers/NamedDivider";


const StockList = () => {
    const mockAppleStock:StockItemInterface = {
        isOwned: false,
        companyName: 'Apple',
        indexName: 'AAPL',
        percentageChange: 5.6,
        numericChange: 561.2,
        isPositiveChange: true,
        currentPrice: 173.13,
        currencyType: CurrencyType.US_DOLLAR

    }
    const mockAmazonStock:StockItemInterface = {
        isOwned: false,
        companyName: 'Amazon',
        indexName: 'AMZN',
        percentageChange: 2.1,
        numericChange: 12.7,
        isPositiveChange: false,
        currentPrice: 74.6,
        currencyType: CurrencyType.US_DOLLAR

    }
    const mockMicrosoftStock:StockItemInterface = {
        isOwned: false,
        companyName: 'Microsoft',
        indexName: 'MSFT',
        percentageChange: 9.1,
        numericChange: 912.5,
        isPositiveChange: false,
        currentPrice: 761.28,
        currencyType: CurrencyType.US_DOLLAR
    }
    const mockSamsung:StockItemInterface = {
        isOwned: false,
        isPositiveChange: true,
        numericChange: 200.59,
        currencyType: CurrencyType.US_DOLLAR,
        currentPrice: 100,
        indexName: 'KRW',
        companyName: 'Samsung',
        percentageChange: 5.6
    }

    const assetArray: StockItemInterface[] = [mockSamsung,mockAmazonStock,mockAppleStock,mockMicrosoftStock]

    return (
        <>
            <NamedDivider name={'Акции'} />
            <ul className='stocks-list'>
                {assetArray.map(asset => (
                    <StockItem stock={asset} />
                ))}
            </ul>
        </>

    );
};

export default StockList;