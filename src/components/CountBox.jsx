import Container from "./Container";

const CountBox = ({ data }) => {
  const pendingData = data.filter((element) => element.status === "Pending");
  const submittedData = data.filter((element) => element.status === "Submitted");
  const reviewedData = data.filter((element) => element.status === "Reviewed");

  return (
    <div>
      <Container>
        <div className="grid grid-cols-3 gap-4 my-8">
          <div className="rounded-md p-7 text-white h-[200px] bg-gray-500 flex flex-col justify-center items-center gap-2">
            <h2 className="text-4xl font-bold">Panding</h2>
            <p className="text-2xl font-semibold">{pendingData.length}</p>
          </div>
          <div className="rounded-md p-7 text-white h-[200px] bg-purple-500 flex flex-col justify-center items-center gap-2">
            <h2 className="text-4xl font-bold">Submitted</h2>
            <p className="text-2xl font-semibold">{submittedData.length}</p>
          </div>
          <div className="rounded-md p-7 text-white h-[200px] bg-teal-500 flex flex-col justify-center items-center gap-2">
            <h2 className="text-4xl font-bold">Reviewed</h2>
            <p className="text-2xl font-semibold">{reviewedData.length}</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CountBox;
