
export enum CurrencyType{
    "US_DOLLAR"= "$",
    "RUB" = "₽",
    "EURO" = "€"
}

export interface StockItemInterface{

    indexName: string // AAPL
    percentageChange: number // 5.6
    numericChange: number // 245.1
    isPositiveChange: boolean // true
    currentPrice: number // 171,2 USD
    companyName: string // Apple
    isOwned: boolean // false
    amount?: number
    currencyType: CurrencyType
}

export interface BalanceChangeInterface {
    currencyType: CurrencyType
    changePercentage: number
    changeNumeric: number
    isPositiveChange : boolean
    usedFor: 'for-sidebar' | 'for-list-view' | 'for-personal-account'
}

