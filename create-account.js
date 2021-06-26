function createAccount(p, amount) {
    let pin = p,
        balance = amount || 0,
        wrongPinMsg = "Invalid PIN.";

    return {
        checkBalance: function(p) {
            if (p === pin) return `$${balance}`;
            else return wrongPinMsg;
        },
        deposit: function(p, amt) {
            if (p === pin) {
                balance += amt;
                return `Succesfully deposited $${amt}. Current balance: $${balance}.`
            } else {
                return wrongPinMsg;
            }
        },
        withdraw: function(p, amt) {
            if (p === pin) {
                if (amt > balance) return "Withdrawal amount exceeds account balance. Transaction cancelled."
                balance -= amt;
                return `Succesfully withdrew $${amt}. Current balance: $${balance}.`
            } else {
                return wrongPinMsg;
            }
        },
        changePin: function(p, newP) {
            if (p === pin) {
                pin = newP;
                return "PIN successfully changed!";
            } else {
                return wrongPinMsg;
            }
        }
    }
}

module.exports = { createAccount };
