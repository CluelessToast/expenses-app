import react from "react";
import './Chart.css'
import ChartBar from "./ChartBar"

const Chart = props =>{
    const dataPointValues= props.dataPoints.map(dataPoint=>dataPoint.value);
    const totalMaximum= Math.max(...dataPointValues);
    const {dataPoints}=props;

    return <div className="chart">
        {dataPoints.map(dataPoint=><ChartBar 
        key={dataPoint.label} 
        value={dataPoint.value} 
        maxValue={totalMaximum} 
        label={dataPoint.label}/>)}
    </div> 




};






export default Chart;