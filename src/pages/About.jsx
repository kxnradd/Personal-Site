import { Link } from "react-router-dom";
function About() {
  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden">
      <div className="flex-row items-start justify-center text-left p-4">
        <div className="flex flex-row justify-start gap-2 mb-4">
          <h1 className="text-4xl font-bold">hi, i'm</h1>
          <h1 className="text-4xl font-bold dark:text-red-500 text-green-500">konrad</h1>
        </div>
        <div className="flex flex-row">
          <p className="text-lg mb-4 dark:text-red-500 text-green-500">currently:&nbsp;</p>
          <p className="text-lg mb-4">second year cs @&nbsp;</p>
          <a href="https://www.bournemouth.ac.uk/study/courses/bsc-hons-computer-science" 
          className="text-lg mb-4 dark:text-red-500 dark:hover:text-red-700 text-green-500 hover:text-green-600">bu.</a>
        </div>
          <p className="text-lg mb-2">i love to create. primarily with code, but i enjoy being creative in other ways on the side</p>

        <div className="flex flex-row justify-between w-full">
          <div>
            <div className="flex flex-row">
              <Link to="/projects" className="text-lg hover:text-green-500 dark:hover:text-red-500">programming, i've worked with:&nbsp;</Link>
            </div>
            <ul>
              <li className="text-lg before:content-['–'] before:mr-2 hover:text-green-500 dark:hover:text-red-500">python</li>
              <li className="text-lg before:content-['–'] before:mr-2 hover:text-green-500 dark:hover:text-red-500">c#</li>
              <li className="text-lg before:content-['–'] before:mr-2 hover:text-green-500 dark:hover:text-red-500">tailwindcss</li>
              <li className="text-lg before:content-['–'] before:mr-2 hover:text-green-500 dark:hover:text-red-500">html</li>
              <li className="text-lg before:content-['–'] before:mr-2 hover:text-green-500 dark:hover:text-red-500">react</li>
              <li className="text-lg before:content-['–'] before:mr-2 hover:text-green-500 dark:hover:text-red-500">javascript</li>
            </ul>
          </div>

          <div className="flex flex-col ">
            <div>
              <p className="text-lg">i've also used:&nbsp;</p>
            </div>
            <ul>
              <li className="text-lg before:content-['–'] before:mr-2 hover:text-green-500 dark:hover:text-red-500">adobe photoshop</li>
              <li className="text-lg before:content-['–'] before:mr-2 hover:text-green-500 dark:hover:text-red-500">adobe lightroom</li>
              <li className="text-lg before:content-['–'] before:mr-2 hover:text-green-500 dark:hover:text-red-500">figma</li>
              <li className="text-lg before:content-['–'] before:mr-2 hover:text-green-500 dark:hover:text-red-500">microsoft office</li>
            </ul>
          </div>
        </div>
        <p className="text-lg mt-4 text-center">i'm open to work, and always looking to learn new things</p>
        <Link to="/contact" className="text-lg hover:text-green-500 dark:hover:text-red-500 block text-center">feel free to reach out!</Link>
      </div>
      
    </div>
    
  );
}

export default About;
