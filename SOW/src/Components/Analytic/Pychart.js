import React from "react";
import { Pie, Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart } from "chart.js";

// Table
import Table from "./SOWComTable";

// API
// import axios from "axios";
import data from "./servicedata";

Chart.register(ChartDataLabels);

const SoWData = data;
//refresh time
// const secs = 1000;
// const refresh_time = 15 * secs; // refresh the data in milliseconds

function Pychart() {
  // const [ActiveZone, setActiveZone] = React.useState({ length: 0 });
  // const [WarningZone, setWarningZone] = React.useState({ length: 0 });
  // const [DangerZone, setDangerZone] = React.useState({ length: 0 });

  // const [companyData, setCompanyData] = React.useState(null);
  // const [customer, setCustomer] = React.useState("");

  const [ActiveZone, setActiveZone] = React.useState(SoWData.data3);
  const [WarningZone, setWarningZone] = React.useState(SoWData.data2);
  const [DangerZone, setDangerZone] = React.useState(SoWData.data1);

  const [companyData, setCompanyData] = React.useState(SoWData);
  const [customer, setCustomer] = React.useState("");

  const [selectedGraphElement, setGraphElement] = React.useState({
    index: 0,
    datasetIndex: 0
  });
  const [elementsSelected, setElementsSelected] = React.useState([]);
  const [selectedDataSets, setSelectedDataSets] = React.useState([]);
  const [chartType, setChartType] = React.useState(true);

  // React.useEffect(() => {
  //   axios.get("http://192.168.1.251:8000/sow/sowAnalytics").then((res) => {
  //     setCompanyData(res.data);
  //     setActiveZone(res.data.data3);
  //     setWarningZone(res.data.data2);
  //     setDangerZone(res.data.data1);
  //   });

  //   const interval = setInterval(() => {
  //     console.log("More than a month");
  //     console.log(ActiveZone);
  //     console.log("Less than a month");
  //     console.log(WarningZone);
  //     console.log("Less than 15 days");
  //     console.log(DangerZone);
  //   }, refresh_time);
  //   return () => clearInterval(interval);
  // }, []);

  const passData = [ActiveZone, WarningZone, DangerZone];

  const data = {
    labels: ["More than a month", "Less than a month", "Less than 15 days"],
    datasets: [
      {
        label: "SOW tracker",
        data: [ActiveZone.length, WarningZone.length, DangerZone.length],
        backgroundColor: [
          "rgb(71, 179, 156)",
          "rgb(255, 193, 84)",
          "rgb(236, 107, 86)"
        ],
        borderColor: [
          "rgba(255, 255, 255, 1)",
          "rgba(255, 255, 255, 1)",
          "rgba(255, 255, 255, 1)"
        ],
        borderWidth: 1
      }
    ]
  };

  const options = {
    animation: {
      animateScale: true
    },
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom"
      },
      datalabels: {
        display: true,
        color: "white",
        formatter: function (value, context) {
          return `${value} S`;
        },
        font: {
          size: 30,
          weight: "bold"
        }
      },
      maintainAspectRatio: true
    }
  };

  const BARoptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "bottom"
      },
      datalabels: {
        display: true,
        color: "white",
        formatter: function (value, context) {
          return `${value} S`;
        },
        font: {
          size: 24,
          weight: "bold"
        }
      },
      maintainAspectRatio: true
    }
  };

  React.useEffect(() => {
    setCustomer(passData[selectedGraphElement.index]);
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
    <div style={{ textAlign: "center" }}>
      <header
        className="w3-container"
        style={{ paddingTop: 22 + "px", alignSelf: "center" }}
      >
        <h1 className="w3-blue">
          <a href={"."} style={{ textDecoration: "none" }}>
            <span style={{ position: "absolute", left: "5%" }}>&larr;</span>
          </a>
          <b>
            <i className="fa fa-pencil-square-o"></i> Analytics
          </b>
        </h1>
      </header>

      <div className="w3-row-padding w3-margin-bottom">
        <div className="w3-third">
          <div className="w3-container w3-red w3-padding-8">
            <div className="w3-left">
              <i className="fa fa-comment w3-xxlarge"></i>
            </div>
            <div className="w3-right">
              <h3>{DangerZone.length}</h3>
            </div>
            {/* <div className="w3-clear w3-blue"></div> */}
            <h4>Attention Needed</h4>
          </div>
        </div>
        <div className="w3-third">
          <div className="w3-container w3-blue w3-padding-8">
            <div className="w3-left">
              <i className="fa fa-users w3-xxlarge"></i>
            </div>
            <div className="w3-right">
              <h3>{ActiveZone.length}</h3>
            </div>
            {/* <div className="w3-clear"></div> */}
            <h4>Valid for more than a month</h4>
          </div>
        </div>

        <div className="w3-third">
          <div className="w3-container w3-orange w3-text-white w3-padding-8">
            <div className="w3-left">
              <i className="fa fa-eye w3-xxlarge"></i>
            </div>
            <div className="w3-right">
              <h3>{WarningZone.length}</h3>
            </div>
            {/* <div className="w3-clear"></div> */}
            <h4>Expiring soon</h4>
          </div>
        </div>
      </div>

      <div className="w3-panel">
        <div className="w3-row-padding" style={{ margin: 0 + "-" + 16 + "px" }}>
          <div className="w3-third">
            <div>
              <div className="analyticsCard" style={{ textAlign: "center" }}>
                <b>Pie</b>{" "}
                <label className="switch">
                  <input
                    type="checkbox"
                    value={chartType}
                    onChange={() => {
                      setChartType(!chartType);
                    }}
                  />
                  <span className="slider round"></span>
                </label>{" "}
                <b>Bar</b>
                {chartType ? (
                  <Pie
                    data={data}
                    options={options}
                    plugins={ChartDataLabels}
                    getElementAtEvent={getElementAtEvent}
                    getDatasetAtEvent={getDatasetAtEvent}
                    getElementsAtEvent={getElementsAtEvent}
                    width={400}
                    height={400}
                    plugin={ChartDataLabels}
                  />
                ) : (
                  <Bar
                    data={data}
                    options={BARoptions}
                    plugins={ChartDataLabels}
                    getElementAtEvent={getElementAtEvent}
                    getDatasetAtEvent={getDatasetAtEvent}
                    getElementsAtEvent={getElementsAtEvent}
                    width={400}
                    height={400}
                  />
                )}
                Click on chart to see SOW in detail
              </div>
            </div>
          </div>
          <div className="w3-twothird">
            <h4>List of SoWs</h4>
            <div>
              {selectedGraphElement && (
                <div
                  style={{
                    textAlign: "center",
                    backgroundColor: "white",
                    alignSelf: "none"
                  }}
                >
                  {/* {customer &&
             `${customer.length} SOW${customer.length == 0 ? "s" : ""} here`}
             <br/>
             <br/> */}
                  <Table Company={customer} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Pychart;
