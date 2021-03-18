// ---------------------- NEEDED MODULES ---------------------- \\
const axios = require("axios");
var giphy = require('giphy-api')('obPQe7AQ53nbgjDcolW4iRMlKmuSLZRE');
// ---------------------- GIF MODULES & GIFS  ---------------------- \\
// ----- NSFW ----- ||
const nsfwgifs = require("void.nsfw");

// ---------------------- MESSAGES  ---------------------- \\
const errmsg = "Do you need help? You can get help by visiting https://voiddevs.org/dc\n"


// ---------------------- COMMUNITY REQUESTED FEAUTURE  ---------------------- \\
version: require("../package.json").version,

// ---------------------- FUNCTIONS STARTS HERE  ---------------------- \\



// ---------------------- START OF NSFW GIFS ---------------------- \\
    async function hentai() {
    return await nsfwgifs.hentai()
    }
    async function anal() {
    return await nsfwgifs.anal()
    } 
    async function hanal() {
    return await nsfwgifs.hanal()
    } 
    async function thigh() {
    return await nsfwgifs.thigh()
    } 
    async function boobs() {
    return await nsfwgifs.boobs()
    } 
    async function ass() {
    return await nsfwgifs.ass()
    } 
    async function kanna() {
    return await nsfwgifs.kanna()
    } 
    async function four() {
    return await nsfwgifs.four()
    } 
    async function hthigh() {
     return await nsfwgifs.hthigh()
    } 
    async function tentacle() {
     return await nsfwgifs.tentacle()
    } 
    async function hboobs() {
     return await nsfwgifs.hboobs()
    } 
    async function holo() {
     return await nsfwgifs.holo()
    } 
    async function hass() {
     return await nsfwgifs.hass()
    }  
    async function pgif() {
     return await nsfwgifs.pgif()
    } 
    async function pussy() {
     return await nsfwgifs.pussy()
    }
    async function yaoi() {
     return await nsfwgifs.yaoi()
    } 
    async function neko() {
     return await nsfwgifs.neko()
    } 
    async function hneko() {
     return await nsfwgifs.hneko()
    } 
    async function hkitsune() {
     return await nsfwgifs.hkitsune()
    } 
    async function kemonomimi() {
     return await nsfwgifs.kemonomimi()
    } 
// Thanks To Claudette for Void.NSFW Module :)



module.exports = {hentai, pussy, pgif, four, hneko, neko, anal, hanal, thigh, boobs, ass, kanna, hthigh, tentacle, hboobs, holo, hass, yaoi, hkitsune, kemonomimi}
