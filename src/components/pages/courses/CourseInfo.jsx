import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardHeader
} from "mdb-react-ui-kit";
import React from "react";
import { Accordion } from "react-bootstrap";
const CourseInfo = () => {
  function ScrollToTopOnMount() {
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return null;
  }

  return (
    <>
      <ScrollToTopOnMount />
      <div className="px-5 bg-sl mt-16 py-3">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
          <div className="col-span-1 lg:col-span-2">
            <h1 className="text-2xl mb-4 text-gray-700 font-bold">
              Cloud Architect Masters Program
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-9 items-center">
              <div>
                <img
                  src="https://ecija.com/wp-content/uploads/2019/09/agenda-analysis-business-plan-990818-1.jpg"
                  alt=""
                  className="rounded"
                />
              </div>
              <div>
                <h2 className="text-gray-800 font-medium text-xl mb-3">
                  Extensive Program with 11 Courses
                </h2>
                <h2 className="text-gray-800 font-medium text-xl mb-3">
                  200+ Hours of Interactive Learning
                </h2>
                <h2 className="text-gray-800 font-medium text-xl mb-3">
                  Capstone Project
                </h2>
              </div>
            </div>
            <div className="py-6">
              <p className="text-sm text-gray-700">
                Cloud Architect Masters Program makes you proficient in designing,
                planning, and scaling cloud implementation. It includes training in
                Python, Cloud Computing, AWS Architectural Principles, Migrating
                Applications on Cloud and DevOps. The curriculum has been determined
                by extensive research on 5000+ job descriptions across the globe.
              </p>
            </div>
          </div>
          <div>
            <MDBCard alignment="center">
              <MDBCardHeader>
                Avg. salary earned by Cloud Architect is around $155,581 per annum.
              </MDBCardHeader>
              <MDBCardBody>
                <p className="text-sm text-gray-600 mb-2">
                  It’s time to change your career story
                </p>
                <div>
                  <p className="text-gray-700 font-bold mb-2">You Will Learn</p>
                  <p className="text-gray-600 text-xs">
                    SAAS, PAAS, IAAS, Cloud Virtualization, Cloud Deployment Models,
                    Lambda, EC2, RDS, S3, VPC & 16 More Skills.
                  </p>
                </div>
              </MDBCardBody>
              <MDBCardFooter className="text-muted">
                <button className="bg-sk text-white w-full px-2 py-2 rounded-sm">
                  Enrole Now
                </button>
              </MDBCardFooter>
            </MDBCard>
          </div>
        </div>
        <div>
          <h3 className="text-gray-800 font-semibold text-xl mb-3">Why Should You Take The Devops Training?</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="flex items-center gap-2">
              <img alt="head" src="https://img.icons8.com/nolan/64/brain-connections.png" />
              <div>
                <p className="text-sm text-gray-700">The DevOps market is expected to grow from USD 3.42 Billion in 2018 to USD 10.31 Billion by 2023, at a Compound Annual Growth Rate (CAGR) of 24.7%</p>
              </div>
            </div>
            <div className="flex items-center gap-2"><img alt="alt" src="https://img.icons8.com/nolan/64/physics.png" />
              <div>
                <p className="text-sm text-gray-700">
                  ADP, BBC News, ebay, GE, ING, Intuit, PayPal, Splunk, Uber & other MNCs worldwide use DevOps</p>
              </div>
            </div>
            <div className="flex items-center gap-2"><img alt="alt" src="https://img.icons8.com/nolan/64/idea.png" />
              <div>
                <p className="text-sm text-gray-700">Average salary given to a DevOps Engineer is around $127,231 per annum - Indeed.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-5 my-4">
        <h1 className="mb-1 text-gray-900 font-semibold text-2xl">YOU MAY ALSO SEE COURSE CURRICULUM</h1>
        <p className="text-sm text-gray-700 font-normal">UI/UX Development Training Course Curriculum</p>
        <div className="mt-3">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>HTML Basics</Accordion.Header>
              <Accordion.Body>
                <ul className="list-disc pl-3">
                  <li>Introduction</li>
                  <li>Overview and Prerequisites
                  </li>
                  <li>What Is HTML and Basic of HTML
                  </li>
                  <li>What Is HTML and Basic of HTML
                  </li>
                  <li>Editors</li>
                  <li>Basic tags
                  </li>
                  <li>Elements</li>
                  <li>Attributes</li>
                  <li>Headings</li>
                  <li>Paragraphs</li>

                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="0">
              <Accordion.Header>HTML Basics</Accordion.Header>
              <Accordion.Body>
                <ul className="list-disc pl-3">
                  <li>Introduction</li>
                  <li>Overview and Prerequisites
                  </li>
                  <li>What Is HTML and Basic of HTML
                  </li>
                  <li>What Is HTML and Basic of HTML
                  </li>
                  <li>Editors</li>
                  <li>Basic tags
                  </li>
                  <li>Elements</li>
                  <li>Attributes</li>
                  <li>Headings</li>
                  <li>Paragraphs</li>

                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="0">
              <Accordion.Header>HTML Basics</Accordion.Header>
              <Accordion.Body>
                <ul className="list-disc pl-3">
                  <li>Introduction</li>
                  <li>Overview and Prerequisites
                  </li>
                  <li>What Is HTML and Basic of HTML
                  </li>
                  <li>What Is HTML and Basic of HTML
                  </li>
                  <li>Editors</li>
                  <li>Basic tags
                  </li>
                  <li>Elements</li>
                  <li>Attributes</li>
                  <li>Headings</li>
                  <li>Paragraphs</li>

                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="0">
              <Accordion.Header>HTML Basics</Accordion.Header>
              <Accordion.Body>
                <ul className="list-disc pl-3">
                  <li>Introduction</li>
                  <li>Overview and Prerequisites
                  </li>
                  <li>What Is HTML and Basic of HTML
                  </li>
                  <li>What Is HTML and Basic of HTML
                  </li>
                  <li>Editors</li>
                  <li>Basic tags
                  </li>
                  <li>Elements</li>
                  <li>Attributes</li>
                  <li>Headings</li>
                  <li>Paragraphs</li>

                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="0">
              <Accordion.Header>HTML Basics</Accordion.Header>
              <Accordion.Body>
                <ul className="list-disc pl-3">
                  <li>Introduction</li>
                  <li>Overview and Prerequisites
                  </li>
                  <li>What Is HTML and Basic of HTML
                  </li>
                  <li>What Is HTML and Basic of HTML
                  </li>
                  <li>Editors</li>
                  <li>Basic tags
                  </li>
                  <li>Elements</li>
                  <li>Attributes</li>
                  <li>Headings</li>
                  <li>Paragraphs</li>

                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="0">
              <Accordion.Header>HTML Basics</Accordion.Header>
              <Accordion.Body>
                <ul className="list-disc pl-3">
                  <li>Introduction</li>
                  <li>Overview and Prerequisites
                  </li>
                  <li>What Is HTML and Basic of HTML
                  </li>
                  <li>What Is HTML and Basic of HTML
                  </li>
                  <li>Editors</li>
                  <li>Basic tags
                  </li>
                  <li>Elements</li>
                  <li>Attributes</li>
                  <li>Headings</li>
                  <li>Paragraphs</li>

                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="0">
              <Accordion.Header>HTML Basics</Accordion.Header>
              <Accordion.Body>
                <ul className="list-disc pl-3">
                  <li>Introduction</li>
                  <li>Overview and Prerequisites
                  </li>
                  <li>What Is HTML and Basic of HTML
                  </li>
                  <li>What Is HTML and Basic of HTML
                  </li>
                  <li>Editors</li>
                  <li>Basic tags
                  </li>
                  <li>Elements</li>
                  <li>Attributes</li>
                  <li>Headings</li>
                  <li>Paragraphs</li>

                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="0">
              <Accordion.Header>HTML Basics</Accordion.Header>
              <Accordion.Body>
                <ul className="list-disc pl-3">
                  <li>Introduction</li>
                  <li>Overview and Prerequisites
                  </li>
                  <li>What Is HTML and Basic of HTML
                  </li>
                  <li>What Is HTML and Basic of HTML
                  </li>
                  <li>Editors</li>
                  <li>Basic tags
                  </li>
                  <li>Elements</li>
                  <li>Attributes</li>
                  <li>Headings</li>
                  <li>Paragraphs</li>

                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>CSS</Accordion.Header>
              <Accordion.Body>
                <ul className="list-disc pl-3">
                  <li>Introduction</li>
                  <li>Overview and Prerequisites
                  </li>
                  <li>What Is HTML and Basic of HTML
                  </li>
                  <li>What Is HTML and Basic of HTML
                  </li>
                  <li>Editors</li>
                  <li>Basic tags
                  </li>
                  <li>Elements</li>
                  <li>Attributes</li>
                  <li>Headings</li>
                  <li>Paragraphs</li>

                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Javascript</Accordion.Header>
              <Accordion.Body>
                <ul className="list-disc pl-4">
                  <li>Introduction</li>
                  <li>Overview and Prerequisites
                  </li>
                  <li>What Is HTML and Basic of HTML
                  </li>
                  <li>What Is HTML and Basic of HTML
                  </li>
                  <li>Editors</li>
                  <li>Basic tags
                  </li>
                  <li>Elements</li>
                  <li>Attributes</li>
                  <li>Headings</li>
                  <li>Paragraphs</li>

                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default CourseInfo;
