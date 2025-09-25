import { use, useState } from "react";
import TogglesBtns from "./TogglesBtns";
import CountBox from "./CountBox";
import Container from "./Container";
import Card from "./Card";

const IssuesManagement = ({ fetchPromise }) => {
  const [toggleStatus, setToggleStatus] = useState("All");
  const initialData = use(fetchPromise);
  const [data, setData] = useState(initialData);

  const filterData =
    toggleStatus === "All"
      ? data
      : data.filter((element) => element.status === toggleStatus);
  console.log(filterData);

  return (
    <>
      {/* Box */}
      <CountBox data={data} />

      {/* Toggle Button */}
      <TogglesBtns
        toggleStatus={toggleStatus}
        setToggleStatus={setToggleStatus}
      />

      {/* Cards */}
      <Container>
        <div className="grid grid-cols-3 gap-4">
          {filterData.map((issue, idx) => (
            <Card key={idx} issue={issue} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default IssuesManagement;
