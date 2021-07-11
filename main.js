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

const review_num = Math.floor(Math.random() * (3 + 1));
const reviews = [
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!",
  "Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam!",
  "Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at!",
  "Consequatur rerum amet fuga expedita sunt et tempora saepe? Iusto nihil explicabo perferendis quos provident delectus ducimus necessitatibus reiciendis optio tempora unde earum doloremque commodi laudantium ad nulla vel odio?"
]
document.getElementById("review").innerHTML = reviews[review_num]