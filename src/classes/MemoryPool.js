class MemoryPool {
    constructor() {
        this.transactions = [];
    }

    addOrUpdate(transaction) {
        const txnIndex = this.transactions.findIndex(({ id }) => id === transaction.id);

        if (txnIndex >= 0) this.transactions[txnIndex] = transaction;
        else this.transactions.push(transaction);
    }
}