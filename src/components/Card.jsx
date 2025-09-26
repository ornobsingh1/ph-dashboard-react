const Card = ({ issue, data, setData }) => {
  const handleClick = () => {
    const currentData = data.find((elem) => elem.ticketId === issue.ticketId);
    
    if (currentData.status === "Pending") {
      currentData.status = "Submitted";
    } else if (currentData.status === "Submitted") {
      currentData.status = "Reviewed";
    }
    
    const restData = data.filter((elem) => elem.ticketId !== issue.ticketId);
    console.log({currentData, restData})
    setData([currentData, ...restData]);
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="shadow-md rounded-md cursor-pointer bg-slate-200 p-4 my-4"
      >
        <div>
          <img
            src={issue.userImg}
            title={issue.requestedBy}
            className="h-[80px] w-[80px] rounded-full"
            alt={issue.requestedBy}
          />
          <h2 className="font-semibold text-lg">{issue.requestedBy}</h2>
        </div>

        <div className="flex justify-between gap-4">
          <h2 className="font-bold text-xl">{issue.subject}</h2>
          <div>
            <span
              className={`font-semibold py-1 px-2 shadow rounded-md mr-2 ${
                issue.priority === "High"
                  ? "text-red-500 bg-red-100"
                  : issue.priority === "Medium"
                  ? "text-yellow-500 bg-yellow-100"
                  : "text-green-500 bg-green-100"
              }`}
            >
              {issue.priority}
            </span>

            <span
              className={`font-semibold py-1 px-2 shadow rounded-md mr-2 ${
                issue.status === "Pending"
                  ? "text-red-500 bg-red-100"
                  : issue.status === "Submitted"
                  ? "text-yellow-500 bg-yellow-100"
                  : "text-green-500 bg-green-100"
              }`}
            >
              {issue.status}
            </span>
          </div>
        </div>

        <h2 className="text-[16px] text-slate-700">{issue.description}</h2>
      </div>
    </>
  );
};

export default Card;
