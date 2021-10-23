import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import React from "react";
const Blog = () => {
  return (
    <div className="my-4 px-4">
      <h1 className="text-gray-800 text-2xl font-semibold mb-3">Blog Post</h1>
      <div className="grid grid-cols-1 md:2 lg:grid-cols-4 gap-4 col-span-1 md:col-span-2 lg:col-span-3">
        <Card sx={{ maxWidth: 345 }} className="cursor-pointer">
          <CardMedia
            component="img"
            height="140"
            image="https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924__340.jpg"
            alt="green iguana"
          />
          <CardContent>
            <p className="text-xs text-gray-600 font-thin italic">June 1st</p>
            <p className="text-gray-600 font-medium text-sm">
              Top DevOps interview question you prepeared in 2021
            </p>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 345 }} className="cursor-pointer">
          <CardMedia
            component="img"
            height="140"
            image="https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924__340.jpg"
            alt="green iguana"
          />
          <CardContent>
            <p className="text-xs text-gray-600 font-thin italic">June 1st</p>
            <p className="text-gray-600 font-medium text-sm">
              Top DevOps interview question you prepeared in 2021
            </p>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 345 }} className="cursor-pointer">
          <CardMedia
            component="img"
            height="140"
            image="https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924__340.jpg"
            alt="green iguana"
          />
          <CardContent>
            <p className="text-xs text-gray-600 font-thin italic">June 1st</p>
            <p className="text-gray-600 font-medium text-sm">
              Top DevOps interview question you prepeared in 2021
            </p>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345 }} className="cursor-pointer">
          <CardMedia
            component="img"
            height="140"
            image="https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924__340.jpg"
            alt="green iguana"
          />
          <CardContent>
            <p className="text-xs text-gray-600 font-thin italic">June 1st</p>
            <p className="text-gray-600 font-medium text-sm">
              Top DevOps interview question you prepeared in 2021
            </p>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default Blog;
