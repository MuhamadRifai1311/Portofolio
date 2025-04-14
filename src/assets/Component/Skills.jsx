function Skills() {
  return (
    <>
      <div className="pt-44 w-full pl-28">
        <div className="flex justify-start items-start">
          <p className="font-bold text-2xl">Skills</p>
        </div>
        <div className="grid grid-flow-col pt-2">
          <div>
            <h2>Bahasa Pemrograman</h2>
          </div>
          <div>
            <h2>Framework</h2>
          </div>
        </div>
        <div className="grid grid-flow-col">
          <div className="grid grid-flow-col border-4 border-white w-72 p-3 rounded-lg">
            <div >
              <ul className="list-disc pl-7">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>C++</li>
                <li>SQL</li>
                <li>Java</li>
                <li>Dart</li>
              </ul>
            </div>
            <div>
              <ul className="list-disc">
                {/* more */}
              </ul>
            </div>
          </div>
          <div className="grid grid-flow-col border-4 border-white w-72 p-3 ml-16 rounded-lg">
            <div>
              <ul className="list-disc pl-7">
                <li>Laravel</li>
                <li>React</li>
                <li>Flutter</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <ul className="list-disc">
                {/* more */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
