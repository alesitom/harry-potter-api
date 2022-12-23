/* const allHouses = {
    info: {count : 1, prev : null, next : null},
    data : [
        {
            _id : 1,
            name : "Gryfindor",
            headMaster : "Minerva McGonagall",
            ghost : "Sir Nicholas",
            shield : "url",
            hymn : "Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods yew pumpkin juice phials Ravenclaws Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed. Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks.",
            thumbnail : "url",
            colors : ["gold","red"],
            animal : "Lion",
            commonRoom : "Gryfindor Tower",
            founder : "Godric Gryfindor",
            history : "Squashy armchairs dirt on your nose brass scales crush the Sopophorous bean with flat side of silver dagger, releases juice better than cutting. Full moon Whomping Willow three turns should do it lemon drops. Locomotor trunks owl treats that will be 50 points, Mr. Potter. Witch Weekly, he will rise again and he will come for us, headmaster Erumpent horn. Fenrir Grayback horseless carriages zis is a chance many would die for! Prefects bathroom Trelawney veela squashy armchairs, SPEW: Gamps Elemental Law of Transfiguration. Magic Nagini bezoar, Hippogriffs Headless Hunt giant squid petrified. Beuxbatons flying half-blood revision schedule, Great Hall aurors Minerva McGonagall Polyjuice Potion. Restricted section the Burrow Wronski Feint gnomes, quidditch robes detention, chocolate frogs. Errol parchment knickerbocker glory Avada Kedavra Shell Cottage beaded bag portrait vulture-hat. Twin cores, Aragog crimson gargoyles, Room of Requirement counter-clockwise Shrieking Shack. Snivellus second floor bathrooms vanishing cabinet Wizard Chess, are you a witch or not?",
        }
    ]
};


module.exports = allHouses; */

const {Schema, model} = require ('mongoose');

const HouseSchema = Schema({
    name : {
        type : String,
        required : true
    },
    headMaster : {
        type : String,
        required : true
    },
    ghost : {
        type : String,
        required : true
    },
    shield : {
        type : String,
        required : true
    },
    hymn : {
        type : String,
        required : true
    },
    thumbnail : {
        type : String,
        required : true
    },
    colors : {
        type : String, //Array
        required : true
    },
    animal : {
        type : String,
        required : true
    },
    commonRoom : {
        type : String,
        required : true
    },
    founder : {
        type : String,
        required : true
    },
    history : {
        type : String,
        required : true
    }
});


module.exports = model('House',HouseSchema); //Creates a new collection that implements the schema