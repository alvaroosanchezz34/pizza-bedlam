const Pizza = require("./pizza");
const Extra = require("./extra");

// PIZZAS BASE
const MENU = {
    MARGHERITA: new Pizza("Margherita", 9.30),
    PROSCIUTTO: new Pizza("Prosciutto", 12.00),
    PROSCIUTTO_E_FUNGHI: new Pizza("Prosciutto e Funghi", 12.50),
    QUATTRO_STAGIONI: new Pizza("4 Stagioni", 12.50)
};

// EXTRAS
const EXTRAS = {
    // Básicos 0.90
    JAMON_DULCE: new Extra("Extra Jamón Dulce", 0.90),
    EXTRA_QUESO: new Extra("Extra Queso", 0.90),
    TOMATE_NATURAL: new Extra("Extra Tomate", 0.90),
    CHAMPIÑONES: new Extra("Extra Champiñones", 0.90),
    ALCACHOFAS: new Extra("Extra Alcachofas", 0.90),
    ATUN: new Extra("Extra Atún", 0.90),

    // Gourmet 1.20
    OLIVAS: new Extra("Extra Olivas", 1.20),
    ALCAPARRAS: new Extra("Extra Alcaparras", 1.20),
    JAMON_SERRANO: new Extra("Extra Jamón Serrano", 1.20),
    POLLO: new Extra("Extra Pollo", 1.20),

    // Premium 2.20
    ANCHOAS: new Extra("Extra Anchoas", 2.20),
    SALMON: new Extra("Extra Salmón", 2.20),
    TERNERA: new Extra("Extra Ternera", 2.20),

    // Otros
    SALSA_BBQ: new Extra("Salsa Barbacoa", 1.00),
    SALSA_PICANTE: new Extra("Salsa Picante", 0.90),
    BORDE_RELLENO: new Extra("Borde Relleno Queso", 1.20)
};

module.exports = { MENU, EXTRAS };
