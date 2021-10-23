import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import { red } from "@mui/material/colors";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import React from "react";
import Slider from "react-slick";

const Review = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    speed: 500,
    rows: 1,

    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const data = [
    {
      title: "Vivek Swaroop ",
    },
    {
      title: "Powendip Rajen",
    },
    {
      title: "David Warnar",
    },
    {
      title: "Kuldip Patwari",
    },
    {
      title: "Vivek Swaroop ",
    },
  ];
  return (
    <>
      <div className="my-4 px-4">
        <h1 className="text-gray-800 text-2xl font-semibold mb-3">Reviews</h1>

        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index} className="p-1">
              <Card sx={{ maxWidth: 390 }}>
                <CardHeader
                  avatar={
                    <Avatar
                      sx={{ bgcolor: red[500] }}
                      alt={item.title}
                      src="/broken-image.jpg"
                    />
                  }
                  title={item.title}
                  subheader="September 14, 2016"
                />

                <CardContent>
                  <p className="text-xs font-medium text-gray-800">
                    {" "}
                    DevOps cirtification Training Course
                  </p>

                  <Rating
                    name="size-small"
                    defaultValue={4}
                    size="small"
                    readOnly
                  />
                </CardContent>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                </CardContent>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Review;
