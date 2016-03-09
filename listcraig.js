var data = {
  "listings": [
    {
      "category": "Bicycles",
      "location": "Stanford, CA",
      "price": 150,
      "date": "1 day ago",
      "title": "15\" Used Marin San Anselmo Bike for Sale",
      "description": "Owned since September 2014, purchased from Palo Alto Bike Shop. Marin San Anselmo 15\" bike. White frame. Used, good condition, regularly serviced--air in tires and oiled chain. Comes with helmet, bike lock and keys if desired. $150. Available for pick up at Stanford.",
      "photo": "bicycle.jpeg",
      "seller": {
        "name": "Akua A.",
        "photo": "anon.gif"
      }
    },
    {
      "category": "Chairs",
      "location": "Sunnyvale, CA",
      "price": 110,
      "date": "3 days ago",
      "title": "Dinning Chairs",
      "description": "4 solid maple chairs with a swivel base so chair and base move easily to sit down or get up. Excellent conditionContact me: 408-981-XXXX",
      "photo": "diningchairs.jpeg",
      "seller": {
        "name": "James B.",
        "photo": "jamesb.jpg"
      }
    },
    {
      "category": "Beds",
      "location": "Santa Clara, CA",
      "price": 530,
      "date": "5 days ago",
      "title": "Queen Size Bed with Frame and Memory Foam Pad (with nightstands)",
      "description": "We are moving and buying a new bed. We are selling our bed for $530 which will include the following:- Queen size mattress- Queen size memory foam pad- Wooden bed frame- 2 wooden nightstands (if you do not want the nightstands, the price will be $500)Details:- bed is 7 years old- originally purchased from Ikea- easily assembled - WILL BE AVAILABLE ON MARCH 12TH, 2016 If you would like more details about the bed, please email me. If you would like to buy the bed, you will need to come pick it up yourself as we do not have a truck to move the bed.",
      "photo": "queenbed.jpeg",
      "seller": {
        "name": "Liz S.",
        "photo": "lizs.jpg"
      }
    },
    {
      "category": "Bedroom Sets",
      "location": "Milpitas, CA",
      "price": 300,
      "date": "6 days ago",
      "title": "Queen Size Bedroom Set",
      "description": "Black Sea Gallery Queen size Bedroom Set. Pine Wood. Set includes Headboard, footboard, dresser, Armoire and two night stands. also a tv set. Set in good condition.Please call 408.230.XXXX if interested, thank you.",
      "photo": "queenset.jpeg",
      "seller": {
        "name": "Christine K.",
        "photo": "christinek.jpg"
      }
    },
    {
      "category": "Appliances",
      "location": "Sunnyvale, CA",
      "price": 40,
      "date": "3 weeks ago",
      "title": "AC Portable & Humidifier",
      "description": "1 - LG portable Air Conditioner unit/dehumidifier/fan, 8000btu, comes with remote. Price = $150 2 - Honeywell Cool Moisture Console Humidifier, adjustable humidity control and multiple output settings, Multi- Room use, up to 30% quieter than other console humidifiers, Automatic shut-off. Price = $40 Cash only. No shipping or delivery. No holds. First come first served. You load.",
      "photo": "aircon.jpeg",
      "seller": {
        "name": "Malcolm T.",
        "photo": "malcolmt.jpg"
      }
    },
    {
      "category": "Refrigerators",
      "location": "Sunnyvale, CA",
      "price": 85,
      "date": "3 weeks ago",
      "title": "Fridge & Microwave",
      "description": "1 - Hotpoint Fridge. 17 cu ft., Doors are movable to open from either right or left. Adjustable shelves, and crisper. Works great. It is cooling delicious food right now (delicious food not included). Price = $85 2- Panasonic NN-SD681S Stainless 1200W 1.2 Cu. Ft. Countertop/Built-in Microwave with Inverter Technology, only 4 mos old, Price = $90 Cash only. No delivery or shipping. You load it. No holds. First come first served.",
      "photo": "fridge.jpeg",
      "seller": {
        "name": "Malcolm T.",
        "photo": "malcolmt.jpg"
      }
    },
    {
      "category": "Furniture",
      "location": "Morgan Hill, CA",
      "price": 2000,
      "date": "3 weeks ago",
      "title": "Furniture",
      "description": "Dining set with hidden leaf, 6 high back leather chairs and 2 fabric arm chairs. Solid wood, sturdy, heavy construction",
      "photo": "furniture.jpeg",
      "seller": {
        "name": "Denise D.",
        "photo": "denised.jpg"
      }
    }
  ]
};

_.templateSettings.variable = "rc";
var template = _.template($("script.template").html());
$('.listings').html(template(data));
