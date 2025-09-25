import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import IssuesManagement from "./components/IssuesManagement";
import { Suspense } from "react";

const fetchIssues = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const App = () => {
  const fetchPromise = fetchIssues();
  return (
    <div>
      <Navbar />

      <Suspense
        fallback={<span className="loading loading-bars loading-lg"></span>}
      >
        <IssuesManagement fetchPromise={fetchPromise} />
      </Suspense>

      <Footer />
    </div>
  );
};

export default App;
