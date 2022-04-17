
export default class RandomUsernameGenerator{


    static generateRandomInvestorName(){
        const numbers = Date.now().toString()
        const endOfNumbers = numbers.slice(numbers.length - 5, numbers.length)
        return `Investor ${endOfNumbers}`
    }
}