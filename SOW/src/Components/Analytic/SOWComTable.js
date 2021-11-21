import React from "react";
import "./analytics.css";

import axios from "axios";

export default function SOWComTable({ Company }) {
  const [searchData, setSearchData] = React.useState([Company]);
  const [searchValue, setSearchValue] = React.useState("");

  const [currentPage, setCurrentPage] = React.useState(1);
  const [SoWsPerPage, setSoWsPerPage] = React.useState(3);

  React.useEffect(() => {
    setSearchValue("");
  }, [Company]);

  const indexOfLastSoW = currentPage * SoWsPerPage;
  const indexOfFirstSow = indexOfLastSoW - SoWsPerPage;
  const currentSoW = Company.slice(indexOfFirstSow, indexOfLastSoW);

  const prevSoWs = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextSoWs = () => {
    if (currentPage < Math.ceil(Company.length / SoWsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  function search(searchItem) {
    setSearchValue(searchItem);
    const filtered = Company.filter(
      (company) =>
        company.projectName.toLowerCase().indexOf(searchItem) > -1 ||
        company.customerDetails.toLowerCase().indexOf(searchItem) > -1 ||
        company.username.toLowerCase().indexOf(searchItem) > -1 ||
        company.employees.toLowerCase().indexOf(searchItem) > -1 ||
        company.skillset.toLowerCase().indexOf(searchItem) > -1
    );
    setSearchData(filtered);
  }

  return (
    <div style={{ backgroundColor: "#f1f1f1", width: "100%" }}>
      <input
        type="text"
        id="myInput"
        onChange={(e) => search(e.target.value)}
        placeholder="Search in table.."
        title="Type to search"
      />
      <p
        style={{
          color: "red",
          postion: "absolute",
          bottom: 0,
          right: 0,
          textAlign: "right",
          padding: 0,
          margin: 0
        }}
      >
        search is case sensitive**
      </p>
      {searchValue ? (
        <table>
          <thead>
            <tr>
              <th> Project Name </th>
              <th> Customer Name </th>
              <th> Creator </th>
              <th> Assigned Employees </th>
              <th> Skills </th>
              <th> Start Date </th>
              <th> End Date </th>
              <th> Remaining Days </th>
            </tr>
          </thead>
          <tbody>
            {searchData &&
              searchData.map((company) => (
                <tr>
                  <td>{company.projectName}</td>
                  <td>{company.customerDetails}</td>
                  <td>{company.username}</td>
                  <td>{company.employees}</td>
                  <td>{company.skillset}</td>
                  <td>{company.startDate}</td>
                  <td>{company.endDate}</td>
                  <td>{company.expireDays}</td>
                </tr>
              ))}
          </tbody>
        </table>
      ) : (
        <table>
          <thead>
            <tr>
              <th> Project Name </th>
              <th> Customer Name </th>
              <th> Creator </th>
              <th> Assigned Employees </th>
              <th> Skills </th>
              <th> Start Date </th>
              <th> End Date </th>
              <th> Remaining Days </th>
            </tr>
          </thead>
          <tbody>
            {Company &&
              currentSoW.map((company) => (
                <tr>
                  <td>{company.projectName}</td>
                  <td>{company.customerDetails}</td>
                  <td>{company.username}</td>
                  <td>{company.employees}</td>
                  <td>{company.skillset}</td>
                  <td>{company.startDate}</td>
                  <td>{company.endDate}</td>
                  <td>{company.expireDays}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
      <div style={{ textAlign: "center" }}>
        {currentPage !== 1 && (
          <a
            href={"#prevSows"}
            onClick={prevSoWs}
            style={{ "text-decoration": "none", float: "left" }}
          >
            {" "}
            {"<< Previous"}{" "}
          </a>
        )}
        {`${currentPage} page of ${Math.ceil(Company.length / SoWsPerPage)}`}

        {currentPage !== Math.ceil(Company.length / SoWsPerPage) && (
          <a
            href={"#nextSoWs"}
            onClick={nextSoWs}
            style={{ "text-decoration": "none", float: "right" }}
          >
            {"Next >>"}
          </a>
        )}
      </div>

      {searchValue ? `searched "${searchValue}"` : ``}

      <select
        value={SoWsPerPage}
        onChange={(e) => setSoWsPerPage(e.target.value)}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      {` entries per page`}
    </div>
  );
}
