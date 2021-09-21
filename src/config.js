const layersOrder = [
    { name: 'background', number: 13},
    { name: 'background_contrast', number: 7 },
    { name: 'panda', number: 32 },
    { name: 'eyes', number: 11 },
    { name: 'head', number: 8 },
    { name: 'extra', number: 10 },
    { name: 'mouth', number: 9 }

];

const format = {
    width: 500,
    height: 500
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

const defaultEdition = 1024;
const batch = 5;

module.exports = { layersOrder, format, rarity, defaultEdition };