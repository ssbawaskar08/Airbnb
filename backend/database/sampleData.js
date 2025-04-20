const sampleListings = [
  {
    title: "Mountain View Cabin",
    description: "Surrounded by nature and full of tranquility.",
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1233,
    location: "Aspen, Colorado",
    country: "USA"
  },
  {
    title: "Beachfront Bungalow",
    description: "Close to major attractions and public transit.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1415,
    location: "Maui, Hawaii",
    country: "USA"
  },
  {
    title: "Urban Loft",
    description: "Ideal for couples, families, or solo travelers.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 955,
    location: "New York, New York",
    country: "USA"
  },
  {
    title: "Countryside Villa",
    description: "Perfect for a relaxing getaway or adventure trip.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 1350,
    location: "Tuscany",
    country: "Italy"
  },
  {
    title: "Desert Dome",
    description: "Modern amenities in a traditional setting.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1751,
    location: "Joshua Tree, California",
    country: "USA"
  },
  {
    title: "Lake House",
    description: "Close to major attractions and public transit.",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1108,
    location: "Lake Tahoe, California",
    country: "USA"
  },
  {
    title: "Forest Treehouse",
    description: "Luxury and comfort with a unique twist.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 1091,
    location: "Portland, Oregon",
    country: "USA"
  },
  {
    title: "Penthouse Apartment",
    description: "Experience local culture in this authentic stay.",
    image: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 1590,
    location: "London",
    country: "UK"
  },
  {
    title: "Japanese Ryokan",
    description: "Modern amenities in a traditional setting.",
    image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 942,
    location: "Kyoto",
    country: "Japan"
  },
  {
    title: "Historic Castle Stay",
    description: "Live like royalty in this unique stay.",
    image: "https://images.unsplash.com/photo-1508923567004-3a6b8004f3d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 1688,
    location: "Edinburgh",
    country: "Scotland"
  },
  {
    title: "Ski Chalet",
    description: "Snowy views and cozy nights await.",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 1930,
    location: "Chamonix",
    country: "France"
  },
  {
    title: "Island Hut",
    description: "Relax on the beach and soak up the sun.",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 890,
    location: "Bali",
    country: "Indonesia"
  },
  {
    title: "Ice Hotel",
    description: "A stay like no other — in a frozen palace.",
    image: "https://images.unsplash.com/photo-1533849481044-7296ef5bc3b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aWNlJTIwaG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 1432,
    location: "Jukkasjärvi",
    country: "Sweden"
  },
  {
    title: "Treehouse Retreat",
    description: "Get above it all in this elevated escape.",
    image: "https://images.unsplash.com/photo-1600585152915-d208bec867a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJlZWhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 1195,
    location: "British Columbia",
    country: "Canada"
  },
  {
    title: "Underwater Room",
    description: "Sleep with the fishes — in a good way.",
    image: "https://images.unsplash.com/photo-1519821172141-b5d8c1e9c09c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dW5kZXJ3YXRlciUyMGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 2020,
    location: "Zanzibar",
    country: "Tanzania"
  },
  {
    title: "Cave Hotel",
    description: "Carved into the rock with cozy interiors.",
    image: "https://images.unsplash.com/photo-1582719478173-ade07f0f65c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2F2ZSUyMGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 1120,
    location: "Cappadocia",
    country: "Turkey"
  },
  {
    title: "Floating House",
    description: "On the water with spectacular views.",
    image: "https://images.unsplash.com/photo-1600585153011-c4f4a4f91f1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmxvYXRpbmclMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1357,
    location: "Amsterdam",
    country: "Netherlands"
  },
  {
    title: "Jungle Lodge",
    description: "Adventure and relaxation in the wild.",
    image: "https://images.unsplash.com/photo-1586351012966-8500c9970fa0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8amFuZ2xlJTIwbG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 998,
    location: "Amazon Rainforest",
    country: "Brazil"
  },
  {
    title: "Lakeside Cabin",
    description: "Peaceful mornings by the water.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 950,
    location: "Lake Tahoe",
    country: "USA"
  },
  {
    title: "Mediterranean Villa",
    description: "Bask in the coastal beauty.",
    image: "https://images.unsplash.com/photo-1587574293340-ec9d8d7cd8b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1880,
    location: "Santorini",
    country: "Greece"
  },
  {
    title: "Countryside Escape",
    description: "Fields, flowers, and fresh air.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 880,
    location: "Tuscany",
    country: "Italy"
  },
  {
    title: "City Loft",
    description: "Stylish and central urban living.",
    image: "https://images.unsplash.com/photo-1600585153943-3d55d448d5c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1025,
    location: "New York",
    country: "USA"
  },
  {
    title: "Riverside Tent",
    description: "Luxury camping by the river.",
    image: "https://images.unsplash.com/photo-1516035025964-579c5ef0c48e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 610,
    location: "Queenstown",
    country: "New Zealand"
  },
  {
    title: "Oriental Ryokan",
    description: "Traditional Japanese hospitality.",
    image: "https://images.unsplash.com/photo-1551776235-dde6d4829803?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1310,
    location: "Kyoto",
    country: "Japan"
  },
  {
    title: "Mountain Bungalow",
    description: "Escape the heat and hike all day.",
    image: "https://images.unsplash.com/photo-1524186185786-5d87b3796252?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 870,
    location: "Mussoorie",
    country: "India"
  },
  {
    title: "Seaside Studio",
    description: "Minimal design with ocean views.",
    image: "https://images.unsplash.com/photo-1550565118-94e8e813db88?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 920,
    location: "Lisbon",
    country: "Portugal"
  },
  {
    title: "Sahara Camp",
    description: "Stars and sand dunes surround you.",
    image: "https://images.unsplash.com/photo-1571607387500-c8b7265e90a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 700,
    location: "Merzouga",
    country: "Morocco"
  },
  {
    title: "Forest Dome",
    description: "Sleep under the stars in comfort.",
    image: "https://images.unsplash.com/photo-1570032257806-33f3122a5a8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1040,
    location: "Vancouver Island",
    country: "Canada"
  },
  {
    title: "Hilltop Retreat",
    description: "Panoramic views from sunrise to sunset.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1135,
    location: "Baguio",
    country: "Philippines"
  },
  {
    title: "Desert Villa",
    description: "Luxury meets the dry beauty of the desert.",
    image: "https://images.unsplash.com/photo-1544986581-efac024faf62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Dubai",
    country: "UAE"
  },
  {
    title: "Rainforest Bungalow",
    description: "Listen to nature as you fall asleep.",
    image: "https://images.unsplash.com/photo-1556909190-44779d47f0c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 975,
    location: "Costa Rica",
    country: "Costa Rica"
  },
  {
    title: "Icelandic Cabin",
    description: "Northern lights above and hot springs nearby.",
    image: "https://images.unsplash.com/photo-1519167816632-0c3b5d0b6270?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1400,
    location: "Reykjavík",
    country: "Iceland"
  },
  {
    title: "Safari Tent",
    description: "Get close to wildlife safely and in style.",
    image: "https://images.unsplash.com/photo-1551201606-94315d756b28?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1650,
    location: "Maasai Mara",
    country: "Kenya"
  },
  {
    title: "Urban Pod",
    description: "Futuristic comfort in a tiny package.",
    image: "https://images.unsplash.com/photo-1578898884087-6a4401f2e86f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 450,
    location: "Tokyo",
    country: "Japan"
  },
  {
    title: "Tropical Treehouse",
    description: "Surrounded by lush green canopy.",
    image: "https://images.unsplash.com/photo-1606815526960-e2bb82d11b59?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 970,
    location: "Koh Samui",
    country: "Thailand"
  },
  {
    title: "Nordic Sauna Cabin",
    description: "Heat and snow in perfect balance.",
    image: "https://images.unsplash.com/photo-1613145991871-0296aa97d3e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1330,
    location: "Helsinki",
    country: "Finland"
  },
  {
    title: "Art Deco Apartment",
    description: "Step into a stylish blast from the past.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1180,
    location: "Buenos Aires",
    country: "Argentina"
  },
  {
    title: "Alpine Lodge",
    description: "Snow-capped serenity year-round.",
    image: "https://images.unsplash.com/photo-1571168532477-14f5c0b2ad41?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1250,
    location: "Zermatt",
    country: "Switzerland"
  },
  {
    title: "Wilderness Cabin",
    description: "Rustic vibes with modern comfort.",
    image: "https://images.unsplash.com/photo-1600047502707-29b2fd99d9e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 880,
    location: "Montana",
    country: "USA"
  }
];
module.exports = { data: sampleListings };
