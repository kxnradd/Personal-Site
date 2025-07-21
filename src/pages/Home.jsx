import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="h-screen flex items-center justify-center overflow-hidden">
      <div className="text-center flex flex-col items-start p-4">
        <h1 className="text-6xl font-bold mb-4 text-red-500">@kxnrad.</h1>
        <p className="text-lg">programmer first, creative second.</p>
        <p className="pt-4 gap-4">-<Link to="/about" className="hover:text-red-500"> more about me...</Link></p>
        <p>-<Link to="/projects" className="hover:text-red-500"> see what I've made...</Link></p>
        <p>-<Link to="/contact" className="hover:text-red-500"> get in touch...</Link></p>
      </div>
    </div>
  );
}

export default Home;
