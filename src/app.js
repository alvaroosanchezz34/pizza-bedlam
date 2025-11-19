const { MENU, EXTRAS } = require("./menu");
const Pizza = require("./pizza");

function exampleTickets() {
    console.log("=== EJEMPLO 1 ===");
    let p1 = new Pizza("Prosciutto", 12.00);
    p1.addExtra(EXTRAS.CHAMPIÑONES);
    p1.addExtra(EXTRAS.SALSA_PICANTE);
    console.log(p1.printTicket());

    console.log("\n=== EJEMPLO 2 ===");
    let base = MENU.PROSCIUTTO_E_FUNGHI;
    let p2 = new Pizza(base.name, base.basePrice);
    p2.addExtra(EXTRAS.EXTRA_QUESO);
    p2.addExtra(EXTRAS.ANCHOAS);
    console.log(p2.printTicket());
}

if (require.main === module) {
    exampleTickets();
}
