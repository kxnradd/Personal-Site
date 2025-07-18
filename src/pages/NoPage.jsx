import {Link} from "react-router-dom";
function NoPage() {
  return (
    <div className="text-center align-middle">
      <h1 className="text-6xl font-bold mb-4">page not found</h1>
      <Link to="/">try again?</Link>
    </div>
  );
}

export default NoPage;
