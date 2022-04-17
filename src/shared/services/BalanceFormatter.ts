import {CurrencyType} from "../types/types";

export default class BalanceFormatter{


    static formatNumericBalance (balance: number): string{

        // num - 562.2
        const output: string = balance.toString().replace('.',',') // -> 562, 2
        return output

    }

    static formatPercentChange(percent: number): string{
        // percent - 5.5
        const formatted:string = percent.toString().replace('.',',') // -> 5,6
        const output: string = `(${formatted}%)` // -> (5,6%)
        return output
    }

    static prepareBalanceChangeString(change:string,percent:string,currencyType:CurrencyType, usedFor: any){
        return `${change}${currencyType} ${percent}` // -> 562, 6$ (5,6%)
    }



}