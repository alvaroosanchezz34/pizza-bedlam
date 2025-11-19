class Pizza {
    constructor(name, basePrice) {
        this.name = name.toUpperCase();
        this.basePrice = basePrice;
        this.extras = [];
    }

    addExtra(extra) {
        this.extras.push(extra);
    }

    getTotal() {
        return this.basePrice + this.extras.reduce((acc, e) => acc + e.price, 0);
    }

    printTicket() {
        let ticket = `${this.name.padEnd(25)} ${this.basePrice.toFixed(2)}€\n`;

        this.extras.forEach(extra => {
            ticket += extra.getTicketLine() + "\n";
        });

        ticket += "________________________________\n";
        ticket += `TOTAL`.padEnd(25) + `${this.getTotal().toFixed(2)}€`;

        return ticket;
    }
}

module.exports = Pizza;
