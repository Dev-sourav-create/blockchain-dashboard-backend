require("dotenv").config();
const mongoose = require("mongoose");

const Stat = require("../src/modals/Stat");
const Price = require("../src/modals/price");
const Block = require("../src/modals/block");
const employee = require("../src/modals/employee");

const MONGO_URI = process.env.atlasUrl;

const statsSeed = [
  {
    key: "network",
    label: "Network",
    value: "798.06 ETH",
    delta: "+11.9%",
    icon: "network",
  },
  {
    key: "price",
    label: "Price",
    value: "$12,091,489,482",
    delta: "+11.9%",
    icon: "price",
  },
  {
    key: "blockchain",
    label: "Blockchain",
    value: "667.71 GB",
    delta: "+11.9%",
    icon: "blockchain",
  },
  {
    key: "transaction",
    label: "Transaction",
    value: "349,135",
    delta: "+11.9%",
    icon: "transaction",
  },
];

const pricesSeed = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    price: 107452,
    change24h: 0.47,
    marketCap: 21091489482,
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    price: 2426.65,
    change24h: -0.89,
    marketCap: 8000000000,
  },
  {
    symbol: "SOL",
    name: "Solana",
    price: 150.34,
    change24h: 1.25,
    marketCap: 600000000,
  },
];

const blocksSeed = [
  {
    chain: "Bitcoin",
    height: 903041,
    time: new Date(),
    txCount: 3048,
    sizeMB: 1.51,
  },
  {
    chain: "Bitcoin",
    height: 903040,
    time: new Date(),
    txCount: 2500,
    sizeMB: 1.12,
  },
  {
    chain: "Bitcoin",
    height: 903039,
    time: new Date(),
    txCount: 1800,
    sizeMB: 0.98,
  },
];
const EmployeeSeed = [
  {
    name: "Sourav Prajapati",
    email: "sourav.p@company.com",
    role: "Frontend Developer",
    department: "Engineering",
    experience: "2 years",
    status: "Active",
    location: "India",
  },
  {
    name: "Ankur Singh",
    email: "ankur.singh@company.com",
    role: "Backend Developer",
    department: "Engineering",
    experience: "3 years",
    status: "Active",
    location: "India",
  },
  {
    name: "Priya Verma",
    email: "priya.verma@company.com",
    role: "UI/UX Designer",
    department: "Design",
    experience: "4 years",
    status: "Active",
    location: "India",
  },
  {
    name: "Rahul Sharma",
    email: "rahul.sharma@company.com",
    role: "Full Stack Developer",
    department: "Engineering",
    experience: "5 years",
    status: "Inactive",
    location: "India",
  },
  {
    name: "Neha Kapoor",
    email: "neha.kapoor@company.com",
    role: "Project Manager",
    department: "Management",
    experience: "6 years",
    status: "Active",
    location: "India",
  },
  {
    name: "Amit Yadav",
    email: "amit.yadav@company.com",
    role: "DevOps Engineer",
    department: "Infrastructure",
    experience: "3 years",
    status: "Active",
    location: "India",
  },
  {
    name: "Rohan Mishra",
    email: "rohan.mishra@company.com",
    role: "QA Tester",
    department: "Quality Assurance",
    experience: "2 years",
    status: "Active",
    location: "India",
  },
  {
    name: "Mehak Saini",
    email: "mehak.saini@company.com",
    role: "Business Analyst",
    department: "Business",
    experience: "4 years",
    status: "Active",
    location: "India",
  },
  {
    name: "Akash Kumar",
    email: "akash.kumar@company.com",
    role: "Machine Learning Engineer",
    department: "AI/ML",
    experience: "3 years",
    status: "Active",
    location: "India",
  },
  {
    name: "Ishita Roy",
    email: "ishita.roy@company.com",
    role: "HR Executive",
    department: "Human Resources",
    experience: "2 years",
    status: "Active",
    location: "India",
  },
];

(async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");

    await Stat.deleteMany();
    await Price.deleteMany();
    await Block.deleteMany();
    await employee.deleteMany();

    await Stat.insertMany(statsSeed);
    await Price.insertMany(pricesSeed);
    await Block.insertMany(blocksSeed);
    await employee.insertMany(EmployeeSeed);

    console.log("Seeded database successfully");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
