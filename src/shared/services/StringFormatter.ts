
export default class StringFormatter{


    static formatStockAmount(amount: number):string{
        const str = amount.toString()
        return `${str} шт.`
    }
}