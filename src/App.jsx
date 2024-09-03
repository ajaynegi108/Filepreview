import { useRef, useState } from "react";
import readXlsxFile from "read-excel-file";
import { FaCloudUploadAlt } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const inputRef = useRef();

  const openfile = () => {
    inputRef.current.click();
  };

  const readFile = (e) => {
    const file = e[0];
    console.log(file);
    readXlsxFile(file).then((rows) => {
      const newrows = [...rows];
      newrows.splice(0, 1);
      setData(newrows);
      console.log(rows);
    });
  };

  return (
    <>
      <div className="filemaindiv">
        <div className="fileupload" onClick={openfile}>
          <FaCloudUploadAlt size={50} />
          <input
            type="file"
            name="filename"
            onChange={(e) => {
              readFile(e.target.files);
            }}
            ref={inputRef}
            style={{ display: "none" }}
          />
        </div>
        <div className="">
          <h1>Student Information</h1>
          <table>
            <thead>
              <tr>
                <th>First Name</th>

                <th>Email Address</th>
                <th>Phone Number</th>
                <th>ID</th>
                <th>Icon</th>
              </tr>
            </thead>
            <tbody>
              {data.map((val, index) => {
                return (
                  <tr key={index}>
                    <td>{val[0]}</td>
                    <td>{val[1]}</td>
                    <td>{val[2]}</td>
                    <td>{val[3]}</td>
                    <td>
                      <CiEdit />
                      &nbsp;&nbsp;&nbsp;
                      <MdDelete />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
