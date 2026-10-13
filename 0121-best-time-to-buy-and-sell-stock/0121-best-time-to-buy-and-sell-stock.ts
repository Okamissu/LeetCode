function maxProfit(prices: number[]): number {
    let minimumPrice = Infinity
    let maximumProfit = 0;

    for (let price of prices) {
        if (price < minimumPrice) minimumPrice = price

        const profit = price - minimumPrice

        if (profit > maximumProfit) maximumProfit = profit
    }

    return maximumProfit
};