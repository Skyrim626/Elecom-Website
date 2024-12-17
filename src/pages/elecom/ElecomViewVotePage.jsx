import React from "react";
import { useParams } from "react-router-dom";
import { BarChart } from "@mui/x-charts/BarChart";
import Page from "../../components/common/Page";

// Simple value formatter to format votes
const valueFormatter = (value) => value.toLocaleString();

const chartSetting = {
  xAxis: [
    {
      label: "Votes",
    },
  ],
  yAxis: [
    {
      scaleType: "band",
      dataKey: "candidate",
    },
  ],
  width: 800,
  height: 600,
  margin: { left: 100 },
};

const ElecomViewVotePage = () => {
  const { id } = useParams(); // Capture the election id for context (if needed)

  const presidentResults = [
    { candidate: "Candidate A", votes: 450, color: "#4CAF50" },
    { candidate: "Candidate B", votes: 350, color: "#2196F3" },
    { candidate: "Candidate C", votes: 250, color: "#FF5722" },
  ];

  const vicePresidentResults = [
    { candidate: "Candidate X", votes: 400, color: "#FFC107" },
    { candidate: "Candidate Y", votes: 300, color: "#3F51B5" },
    { candidate: "Candidate Z", votes: 200, color: "#9C27B0" },
  ];

  const treasurerResults = [
    { candidate: "Candidate M", votes: 500, color: "#FF9800" },
    { candidate: "Candidate N", votes: 400, color: "#8BC34A" },
    { candidate: "Candidate O", votes: 300, color: "#00BCD4" },
  ];

  // Data formatting for charts
  const prepareChartData = (results) => {
    return results.map((result) => ({
      candidate: result.candidate,
      votes: result.votes,
    }));
  };

  return (
    <Page>
      <h2>Results of Voting: University Student Government</h2>

      <hr className="my-3" />

      {/* President Results */}
      <div className="chart-section">
        <h3>President</h3>
        <BarChart
          dataset={prepareChartData(presidentResults)}
          yAxis={[{ scaleType: "band", dataKey: "candidate" }]}
          series={[{ dataKey: "votes", label: "Votes", valueFormatter }]}
          layout="horizontal"
          {...chartSetting}
        />
      </div>

      {/* Vice President Results */}
      <div className="chart-section">
        <h3>Vice President</h3>
        <BarChart
          dataset={prepareChartData(vicePresidentResults)}
          yAxis={[{ scaleType: "band", dataKey: "candidate" }]}
          series={[{ dataKey: "votes", label: "Votes", valueFormatter }]}
          layout="horizontal"
          {...chartSetting}
        />
      </div>

      {/* Treasurer Results */}
      <div className="chart-section">
        <h3>Treasurer</h3>
        <BarChart
          dataset={prepareChartData(treasurerResults)}
          yAxis={[{ scaleType: "band", dataKey: "candidate" }]}
          series={[{ dataKey: "votes", label: "Votes", valueFormatter }]}
          layout="horizontal"
          {...chartSetting}
        />
      </div>
    </Page>
  );
};

export default ElecomViewVotePage;
