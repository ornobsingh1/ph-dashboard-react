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
        {filterData.length === 0 ? (
          <h2 className="text-3xl text-center font-bold my-8 text-purple-500">
            No Data
          </h2>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {filterData.map((issue, idx) => (
              <Card key={idx} issue={issue} data={data} setData={setData} />
            ))}
          </div>
        )}
      </Container>
    </>
  );
};

export default IssuesManagement;
