import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
} from "mdb-react-ui-kit";
import React from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className } = props;
  return (
    <div
      className={className}
      style={{
        display: "none",
      }}
    />
  );
}

function SamplePrevArrow(props) {
  const { className } = props;
  return <div className={className} style={{ display: "none" }} />;
}
const data = [
  {
    title: " Post Graduate in Diploma Ai and Machine Le...",
  },
  {
    title: " Post Graduate in Diploma Ai and Machine Le...",
  },
  {
    title: " Post Graduate in Diploma Ai and Machine Le...",
  },
  {
    title: " Post Graduate in Diploma Ai and Machine Le...",
  },
  {
    title: " Post Graduate in Diploma Ai and Machine Le...",
  },
  {
    title: " Post Graduate in Diploma Ai and Machine Le...",
  },
  {
    title: " Post Graduate in Diploma Ai and Machine Le...",
  },
  {
    title: " Post Graduate in Diploma Ai and Machine Le...",
  },
  {
    title: " Post Graduate in Diploma Ai and Machine Le...",
  },
  {
    title: " Post Graduate in Diploma Ai and Machine Le...",
  },
  {
    title: " Post Graduate in Diploma Ai and Machine Le...",
  },
  {
    title: " Post Graduate in Diploma Ai and Machine Le...",
  },
  {
    title: " Post Graduate in Diploma Ai and Machine Le...",
  },
  {
    title: " Post Graduate in Diploma Ai and Machine Le...",
  },
  {
    title: " Post Graduate in Diploma Ai and Machine Le...",
  },
  {
    title: " Post Graduate in Diploma Ai and Machine Le...",
  },
  {
    title: " Post Graduate in Diploma Ai and Machine Le...",
  },
  {
    title: " Post Graduate in Diploma Ai and Machine Le...",
  },
];
const Trending = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    rows: 2,
    autoplay: true,
    speed: 500,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
  return (
    <>
      <div className="my-4 px-4">
        <h1 className="text-gray-800 text-2xl font-semibold mb-3">
          Trending Courses
        </h1>

        <div>
          <Slider {...settings}>
            {data.map((item, index) => (
              <div className="p-2" key={index}>
                <MDBCard style={{ maxWidth: "22rem" }}>
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.jpg"
                    position="top"
                    alt="..."
                  />
                  <MDBCardBody>
                    <MDBCardTitle>{item.title}</MDBCardTitle>
                    <Stack spacing={1}>
                      <p className="text-gray-600 text-xs font-extralight">
                        reivews
                      </p>
                      <div className="flex items-center gap-1">
                        <Rating
                          name="size-small"
                          defaultValue={4}
                          size="small"
                          readOnly
                        />
                        <p className="text-gray-600 text-sm font-extralight">
                          <strong className="text-gray-800">4.5</strong>(50)
                        </p>
                      </div>
                    </Stack>
                    <Button variant="contained" size="small" className="mt-2">
                      View Details
                    </Button>
                  </MDBCardBody>
                </MDBCard>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Trending;
