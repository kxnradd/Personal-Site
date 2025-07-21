import { Outlet, NavLink } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <nav className="fixed top-0 mb-10 w-full bg-gray-100 dark:bg-black text-black dark:text-white font-mono">
          <div className="border-b-2 dark:border-gray-100 border-black p-2">
            <ul className="flex flex-row gap-5 justify-center">
              <li><NavLink className={({isActive}) => isActive ? "dark:text-red-500 text-green-500" : "dark:hover:text-red-500 hover:text-green-500"} to="/">home</NavLink></li>
              <li><NavLink className={({isActive}) => isActive ? "dark:text-red-500 text-green-500" : "dark:hover:text-red-500 hover:text-green-500"} to="/about">about</NavLink></li>
              <li><NavLink className={({isActive}) => isActive ? "dark:text-red-500 text-green-500" : "dark:hover:text-red-500 hover:text-green-500"} to="/projects">projects</NavLink></li>
              <li><NavLink className={({isActive}) => isActive ? "dark:text-red-500 text-green-500" : "dark:hover:text-red-500 hover:text-green-500"} to="/contact">contact</NavLink></li>
            </ul>
          </div>
      </nav>

      <main className="pb-16 min-h-screen bg-gray-100 dark:bg-black text-black dark:text-white p-4">
        <Outlet />
      </main>
      <footer className="font-mono fixed bottom-0 w-full text-center text-sm bg-gray-100 dark:bg-black text-black dark:text-white p-4 border-t-2 dark:border-gray-100 border-black">
        <p> made by <a href="https://github.com/kxnradd" className="dark:text-red-600 text-green-600" target="_blank" rel="noreferrer"><strong>@kxnradd</strong></a></p>
      </footer>
    </>
  );
};

export default Layout;
