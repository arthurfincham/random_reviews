const rating = (Math.random() * 5) + 1;
const starTotal = 5;
const starPercentage = (rating / starTotal) * 100;
const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
document.getElementById("stars-inner").style.width = starPercentageRounded;

const name_num = Math.floor(Math.random() * (4 + 1));
const names = [
  "Alex Townsend",
  "Billie Grealish",
  "Cameron Brown",
  "Fran Rossi",
  "Bobbie James"
]
document.getElementById("name").innerHTML = names[name_num]

const location_num = Math.floor(Math.random() * (4 + 1));
const locations = [
  "Mark's Garage, Southwark",
  "Zoe's Cafe, Pimlico",
  "Le Petit Croissant, Chelsea",
  "Starlight Sports, West End",
  "Fiona's Fish Shop, Archway"
]

document.getElementById("palace").innerHTML = locations[location_num]

const reviews = [
  "Their young staff read a script which consists in making excuses and do not care whatsoever about customers. Absolutely shocking. As far as I am concerned this is a scam as they advertise and sell a service that doesn't exist. ",
  "We struggled to get any food and eventually gave up on having more than a starter. Waited a full hour to pay for that. Ridiculous and they were totally unapologetic!",
  "Absolutely dreadful!!! The restaurant had no record of our booking. They said they couldn’t do a gluten tree afternoon tea then grudgingly changed their mind. Kept our party waiting for an hour!",
  "Filled with young staff more interested in mucking about, chatting each other up and looking cool than actually helping customers. I sat there like the old grump for 10 minutes without being served, before giving up and ordered what I wanted online.",
  "The last time we had Fiona's something wasn’t right with the fish. My children who savour every last bit of fish just ate the chips. The smell was not good and they & I refused to eat it. "
]
document.getElementById("review").innerHTML = reviews[location_num]