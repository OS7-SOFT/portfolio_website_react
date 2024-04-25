import "./Statistics.css";
import statistics from "../../../Data/StatisticsData.json";
import Fields from "../../Fields/Fields";

const Statistics = () => {
  return (
    <div className="stat">
      <div className="container text-center">
        <div className="row">
          {statistics.items.map((item) => (
            <Fields key={item.id} field={item.field} rate={item.rate} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
