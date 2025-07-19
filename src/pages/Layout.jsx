import { Outlet, Link } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <nav className="fixed top-0 mb-10 w-full bg-gray-100 dark:bg-black text-black dark:text-white">
          <div className="border-b-2 dark:border-gray-100 border-black p-2">
            <ul className="flex flex-row gap-5 justify-center">
              <li><Link to="/">home</Link></li>
              <li><Link to="/about">about</Link></li>
              <li><Link to="/projects">projects</Link></li>
              <li><Link to="/contact">contact</Link></li>
            </ul>
          </div>
      </nav>

      <main className="pt-40 pb-16 min-h-screen bg-gray-100 dark:bg-black text-black dark:text-white p-4">
        <Outlet />
      </main>
      <footer className="fixed bottom-0 w-full text-center text-sm bg-gray-100 dark:bg-black text-black dark:text-white p-4 border-t-2 dark:border-gray-100 border-black">
        <p> made by <a href="https://github.com/kxnradd" className="text-red-500" target="_blank" rel="noreferrer"><strong>@kxnradd</strong></a></p>
      </footer>
    </>
  );
};

export default Layout;
