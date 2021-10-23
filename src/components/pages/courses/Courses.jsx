import React from "react";
import { Card } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
const data = [1, 2, 3, 4, 4, 5, 5, 6, 6, 7, 4, 5, 5, 5, 5]
const Courses = () => {
  function ScrollToTopOnMount() {
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return null;
  }
  return (
    <div className="p-5 mt-20 bg-cs">
      <ScrollToTopOnMount />
      <h1 className="text-4xl mt-1 text-gray-800 font-bold">Choose a category to find your course</h1>
      <h2 className="text-xl text-gray-700">100+ Live online courses chosen by 50000+ working professionals</h2>
      <div className="my-5 flex items-center flex-wrap gap-3">

        <NavLink to="/courses" className="text-gray-800 font-medium text-2xl p-2 rounded shadow-sm" activeClassName="text-white bg-sk">All Courses</NavLink>
        <NavLink to="/cloud" className="text-gray-800 font-medium text-2xl p-2 rounded shadow-md" activeClassName="text-white bg-sk">Cloud Computers</NavLink>
        <NavLink to="/devops" className="text-gray-800 font-medium text-2xl p-2 rounded shadow-md" activeClassName="text-white bg-sk">Devops</NavLink>
        <NavLink to="/bigdata" className="text-gray-800 font-medium text-2xl p-2 rounded shadow-md" activeClassName="text-white bg-sk">Big Data</NavLink>
        <NavLink to="/cloud" className="text-gray-800 font-medium text-2xl p-2 rounded shadow-md" activeClassName="text-white bg-sk">Cyber Security</NavLink>
        <NavLink to="/devops" className="text-gray-800 font-medium text-2xl p-2 rounded shadow-md" activeClassName="text-white bg-sk">Data Science</NavLink>

      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {
          data.map((item, index) => (
            <Link key={index} to={"/course/" + item}>
              <Card style={{ width: '22rem' }} className="transition ease-linear duration-150 hover:bg-sl">
                <Card.Body>
                  <Card.Title className="text-gray-800">DevOps Complete Cirtification Training Course</Card.Title>
                  <p className="my-2 text-sm text-muted text-gray-600"> Includes Git, Jenkins, Ansible, Docker, Kubernetes, Terraform and more.  </p>
                  <Card.Text>
                    <div className="my-4">
                      <div className="gap-2 my-1 flex items-center"><img className="w-10 h-10" alt="cirtificate" src="https://img.icons8.com/nolan/64/bookmark.png" />Edureka Certificate</div>
                      <div className="gap-2 my-1 flex items-center"><img className="w-10 h-10" alt="watch" src="https://img.icons8.com/nolan/64/time.png" /> 36 Hrs of Live Classes</div>
                      <div className="gap-2 my-1 flex items-center"><img className="w-10 h-10" alt="file" src="https://img.icons8.com/nolan/64/send-file.png" />Weekend/Weekday Classes</div>
                    </div>
                  </Card.Text>
                  <button className="w-full transition ease-linear duration-150 text-sk py-2 border border-sk hover:bg-sk hover:text-white">
                    View Course Details
                  </button>
                </Card.Body>
              </Card>
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default Courses;
