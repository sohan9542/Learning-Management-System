import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import React from "react";
const data = [
  {
    img: "https://img.icons8.com/nolan/64/cloud-sync.png",
    title: "Cloud Computing",
  },
  {
    img: "https://img.icons8.com/nolan/64/synchronize.png",
    title: "DevOps",
  },
  {
    img: "https://img.icons8.com/nolan/64/visualization-skill.png",
    title: "BI and Visualization",
  },
  {
    img: "https://img.icons8.com/nolan/64/cloud-sync.png",
    title: "Cloud Computing",
  },
  {
    img: "https://img.icons8.com/nolan/64/synchronize.png",
    title: "DevOps",
  },
  {
    img: "https://img.icons8.com/nolan/64/visualization-skill.png",
    title: "BI and Visualization",
  },
  {
    img: "https://img.icons8.com/nolan/64/cloud-sync.png",
    title: "Cloud Computing",
  },
  {
    img: "https://img.icons8.com/nolan/64/synchronize.png",
    title: "DevOps",
  },
  {
    img: "https://img.icons8.com/nolan/64/visualization-skill.png",
    title: "BI and Visualization",
  },
  {
    img: "https://img.icons8.com/nolan/64/cloud-sync.png",
    title: "Cloud Computing",
  },
  {
    img: "https://img.icons8.com/nolan/64/synchronize.png",
    title: "DevOps",
  },
  {
    img: "https://img.icons8.com/nolan/64/visualization-skill.png",
    title: "BI and Visualization",
  },
];
const DiscoverTopCategories = () => {
  return (
    <div className="my-5 px-4">
      <h1 className="text-gray-800 text-2xl font-semibold mb-3">
        Discover Top Categories
      </h1>
      <div className="pt-2 flex items-center flex-wrap justify-center">
        {data.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                width: 128,
                height: 128,
              },
            }}
          >
            <Paper
              elevation={6}
              className="flex flex-col items-center justify-center"
            >
              <img src={item.img} alt="hello" />
              <p className="text-xs text-gray-700 font-medium">{item.title}</p>
            </Paper>
          </Box>
        ))}
      </div>
    </div>
  );
};

export default DiscoverTopCategories;
