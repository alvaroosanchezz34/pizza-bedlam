class Extra {
    constructor(name, price) {
        this.name = name.toUpperCase();
        this.price = price;
    }

    getTicketLine() {
        return `+ ${this.name.padEnd(22)} ${this.price.toFixed(2)}€`;
    }
}

module.exports = Extra;
