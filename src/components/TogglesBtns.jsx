import Container from "./Container";

const TogglesBtns = ({ toggleStatus, setToggleStatus }) => {
  const btns = ["All", "Pending", "Submitted", "Reviewed"];

  return (
    <>
      <Container>
        <div className="my-4 flex justify-end gap-2">
          {btns.map((btn, idx) => {
            return (
              <button
                key={idx}
                onClick={() => setToggleStatus(btn)}
                className={`toggle-btn ${
                  toggleStatus === btn && "!bg-purple-500 !text-white"
                }`}
              >
                {btn}
              </button>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default TogglesBtns;
