// src/dataset/electionResults.js

// Sample data for election results
export const dataset = [
  {
    candidate: "John Doe",
    party: "Democratic Party",
    votes: 150000,
    percentage: 52.3,
  },
  {
    candidate: "Jane Smith",
    party: "Republican Party",
    votes: 130000,
    percentage: 45.4,
  },
  {
    candidate: "Alex Johnson",
    party: "Green Party",
    votes: 5000,
    percentage: 2.3,
  },
];

// Function to format vote counts or percentages
export const valueFormatter = (value) => {
  if (typeof value === "number") {
    return value.toLocaleString(); // Format number with commas
  }
  return value;
};
