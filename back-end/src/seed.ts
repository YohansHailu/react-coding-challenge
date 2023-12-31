let sectores = [
  { "name": "Manufacturing", "parentName": null },
  { "name": "Construction materials", "parentName": "Manufacturing" },
  { "name": "Electronics and Optics", "parentName": "Manufacturing" },
  { "name": "Food and Beverage", "parentName": "Manufacturing" },
  { "name": "Bakery & confectionery products", "parentName": "Food and Beverage" },
  { "name": "Beverages", "parentName": "Food and Beverage" },
  { "name": "Fish & fish products", "parentName": "Food and Beverage" },
  { "name": "Meat & meat products", "parentName": "Food and Beverage" },
  { "name": "Milk & dairy products", "parentName": "Food and Beverage" },
  { "name": "Other (Food and Beverage)", "parentName": "Food and Beverage" },
  { "name": "Sweets & snack food", "parentName": "Food and Beverage" },
  { "name": "Furniture", "parentName": "Manufacturing" },
  { "name": "Bathroom/sauna", "parentName": "Furniture" },
  { "name": "Bedroom", "parentName": "Furniture" },
  { "name": "Children’s room", "parentName": "Furniture" },
  { "name": "Kitchen", "parentName": "Furniture" },
  { "name": "Living room", "parentName": "Furniture" },
  { "name": "Office", "parentName": "Furniture" },
  { "name": "Other (Furniture)", "parentName": "Furniture" },
  { "name": "Outdoor", "parentName": "Furniture" },
  { "name": "Project furniture", "parentName": "Furniture" },
  { "name": "Machinery", "parentName": "Manufacturing" },
  { "name": "Machinery components", "parentName": "Machinery" },
  { "name": "Machinery equipment/tools", "parentName": "Machinery" },
  { "name": "Manufacture of machinery", "parentName": "Machinery" },
  { "name": "Maritime", "parentName": "Machinery" },
  { "name": "Aluminium and steel workboats", "parentName": "Maritime" },
  { "name": "Boat/Yacht building", "parentName": "Maritime" },
  { "name": "Ship repair and conversion", "parentName": "Maritime" },
  { "name": "Metal structures", "parentName": "Machinery" },
  { "name": "Other (Machinery)", "parentName": "Machinery" },
  { "name": "Repair and maintenance service", "parentName": "Machinery" },
  { "name": "Metalworking", "parentName": "Manufacturing" },
  { "name": "Construction of metal structures", "parentName": "Metalworking" },
  { "name": "Houses and buildings", "parentName": "Metalworking" },
  { "name": "Metal products", "parentName": "Metalworking" },
  { "name": "Metal works", "parentName": "Metalworking" },
  { "name": "CNC-machining", "parentName": "Metal works" },
  { "name": "Forgings, Fasteners", "parentName": "Metal works" },
  { "name": "Gas, Plasma, Laser cutting", "parentName": "Metal works" },
  { "name": "MIG, TIG, Aluminum welding", "parentName": "Metal works" },
  { "name": "Plastic and Rubber", "parentName": "Manufacturing" },
  { "name": "Packaging", "parentName": "Plastic and Rubber" },
  { "name": "Plastic goods", "parentName": "Plastic and Rubber" },
  { "name": "Plastic processing technology", "parentName": "Plastic and Rubber" },
  { "name": "Blowing", "parentName": "Plastic processing technology" },
  { "name": "Moulding", "parentName": "Plastic processing technology" },
  { "name": "Plastics welding and processing", "parentName": "Plastic processing technology" },
  { "name": "Plastic profiles", "parentName": "Plastic and Rubber" },
  { "name": "Printing", "parentName": "Manufacturing" },
  { "name": "Advertising", "parentName": "Printing" },
  { "name": "Book/Periodicals printing", "parentName": "Printing" },
  { "name": "Labelling and packaging printing", "parentName": "Printing" },
  { "name": "Textile and Clothing", "parentName": "Manufacturing" },
  { "name": "Clothing", "parentName": "Textile and Clothing" },
  { "name": "Textile", "parentName": "Textile and Clothing" },
  { "name": "Wood", "parentName": "Manufacturing" },
  { "name": "Other (Wood)", "parentName": "Wood" },
  { "name": "Wooden building materials", "parentName": "Wood" },
  { "name": "Wooden houses", "parentName": "Wood" },
  { "name": "Other", "parentName": null },
  { "name": "Creative industries", "parentName": "Other" },
  { "name": "Energy technology", "parentName": "Other" },
  { "name": "Environment", "parentName": "Other" },
  { "name": "Service", "parentName": null },
  { "name": "Business services", "parentName": "Service" },
  { "name": "Engineering", "parentName": "Service" },
  { "name": "Information Technology and Telecommunications", "parentName": "Service" },
  { "name": "Data processing, Web portals, E-marketing", "parentName": "Information Technology and Telecommunications" },
  { "name": "Programming, Consultancy", "parentName": "Information Technology and Telecommunications" },
  { "name": "Software, Hardware", "parentName": "Information Technology and Telecommunications" },
  { "name": "Telecommunications", "parentName": "Information Technology and Telecommunications" },
  { "name": "Tourism", "parentName": "Service" },
  { "name": "Translation services", "parentName": "Service" },
  { "name": "Transport and Logistics", "parentName": "Service" },
  { "name": "Air", "parentName": "Transport and Logistics" },
  { "name": "Rail", "parentName": "Transport and Logistics" },
  { "name": "Road", "parentName": "Transport and Logistics" },
  { "name": "Water", "parentName": "Transport and Logistics" }
]







// send this using a post request to http://localhost:5500/sectors/parent_name to create the sectors

import axios from 'axios';
const makeRequests = async () => {
  for (const sector of sectores) {
    try {
      const response = await axios.post('http://localhost:5500/sectors/parent_name', sector);
      console.log(sector.name, "saved");
    } catch (error) {
      console.error(error);
    }
  }
};

makeRequests();



