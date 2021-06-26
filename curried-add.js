function curriedAdd(total = 0) {
    if (arguments.length === 0) return total;
    else if (typeof arguments[0] === 'number') {
        return function recursiveAdd(num) {
            if (!num) return total;
            total += num;
            return recursiveAdd;
        }
    }
}

module.exports = { curriedAdd };