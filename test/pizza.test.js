const assert = require("assert");
const Pizza = require("../src/pizza");
const Extra = require("../src/extra");

describe("Pizza Bedlam", () => {

    it("calcula bien el precio total", () => {
        const p = new Pizza("Test", 10.00);
        p.addExtra(new Extra("extra queso", 0.90));
        p.addExtra(new Extra("anchoas", 2.20));

        assert.strictEqual(p.getTotal(), 13.10);
    });

    it("genera tickets correctamente", () => {
        const p = new Pizza("Prosciutto e Funghi", 12.50);
        p.addExtra(new Extra("extra queso", 0.90));

        const ticket = p.printTicket();

        assert(ticket.includes("PROSCIUTTO E FUNGHI"));
        assert(ticket.includes("EXTRA QUESO"));
        assert(ticket.includes("13.40"));
    });

});
