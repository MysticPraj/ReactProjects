import React from "react";
import { Pie } from "react-chartjs-2";

// Table
import Table from "./SOWComTable";

// API
import { CompanyDataSet } from "./CompanyDataSet";

function Pychart() {
  const [selectedGraphElement, setGraphElement] = React.useState("");
  const [elementsSelected, setElementsSelected] = React.useState("");
  const [selectedDataSets, setSelectedDataSets] = React.useState("");

  const [companyData, setCompanyData] = React.useState([]);

  const data = {
    labels: ["Active", "Warning", "Danger"],
    datasets: [
      {
        label: "SOW",
        data: [30, 12, 10],
        backgroundColor: [
          "rgb(10,132,10,0.5)",
          "rgb(255,165,0,0.5)",
          "rgb(255,0,0,0.8)",
        ],
        borderColor: [
          "rgba(255, 255, 255, 1)",
          "rgba(255, 255, 255, 1)",
          "rgba(255, 255, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
  };

  React.useEffect(() => {
    setCompanyData(CompanyDataSet[selectedGraphElement.index]);
  }, [selectedGraphElement]);

  const getElementAtEvent = (element) => {
    if (!element.length) return;
    setGraphElement(element[0]);
  };

  const getDatasetAtEvent = (datasets) => {
    if (!datasets.length) return;
    const datasetIndex = datasets[0].datasetIndex;
    setSelectedDataSets(data.datasets[datasetIndex].label);
  };

  const getElementsAtEvent = (elements) => {
    if (!elements.length) return;
    setElementsSelected(elements.length);
  };

  return (
    <div>
      <Pie
        data={data}
        options={options}
        redraw={false}
        getElementAtEvent={getElementAtEvent}
        getDatasetAtEvent={getDatasetAtEvent}
        getElementsAtEvent={getElementsAtEvent}
      />
      <h5>
        {" "}
        {/* {selectedGraphElement &&
          `selectedGraphElement : ${selectedGraphElement.index}`}{" "} */}
      </h5>

      { selectedGraphElement.index == '0' && "Active" || selectedGraphElement.index == '1' && "Warning" ||selectedGraphElement.index == '2' && "Danger" || '' } {selectedGraphElement&& ' - '}  {selectedGraphElement && CompanyDataSet[selectedGraphElement.index].length}

      {selectedGraphElement && <Table Company={companyData} />}


    </div>
  );
}

export default Pychart;
