import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const educationData = [
  { id: "1", school: "Indus EM High school", fromDate: "2014", toDate: "2015" },
  { id: "2", school: "Viswasai Jr College", fromDate: "2015", toDate: "2017" },
  {
    id: "3",
    school: "Vellore Institute of Technology",
    fromDate: "2017",
    toDate: "2022",
  },
];

const Education = () => {
  return (
    <div>
      <div class="card">
        <div class="card-content">
          <h6>
            <strong>EDUCATION</strong>
          </h6>
          <table class="striped">
            <thead>
              <tr>
                <th>School</th>
                <th>Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {educationData.length > 0
                ? educationData.map((item) => {
                    return (
                      <tr>
                        <td>{item.school}</td>
                        <td>
                          {item.fromDate} - {item.toDate}
                        </td>
                        <td>
                          <Link
                            to="/education/details"
                            class="btn blue lighten-2"
                          >
                            View
                          </Link>
                        </td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Education;
