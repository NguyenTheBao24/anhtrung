import React, { useState } from "react";
import { Button } from "antd";

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/theme-github";

const Practice = () => {
  const [code, setCode] = useState("");
  const [show,setShow]=useState("");

  const handleCodeChange = (value) => {
    setCode(value);
  };

  const handleRunCode = () => {
    setShow("")
    // Handle the execution of the SQL code here
    console.log("Executing SQL code:", code);
  };
  const handleShowCode = () => {
    setShow(code)
    // Handle the execution of the SQL code here
    console.log("Executing SQL code:", code);
  };


  return (
    <div className="practice_container">
      <div className="question">
        <ul>
          <li>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus nobis hic architecto temporibus iusto culpa
            consectetur non sint magni est.
          </li>
          <li>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus nobis hic architecto temporibus iusto culpa
            consectetur non sint magni est.
          </li>
          <li>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus nobis hic architecto temporibus iusto culpa
            consectetur non sint magni est.
          </li>
          <li>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus nobis hic architecto temporibus iusto culpa
            consectetur non sint magni est.
          </li>
          <li>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus nobis hic architecto temporibus iusto culpa
            consectetur non sint magni est.
          </li>
          <li>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus nobis hic architecto temporibus iusto culpa
            consectetur non sint magni est.
          </li>
          <li>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus nobis hic architecto temporibus iusto culpa
            consectetur non sint magni est.
          </li>
          <li>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus nobis hic architecto temporibus iusto culpa
            consectetur non sint magni est.
          </li>
          <li>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus nobis hic architecto temporibus iusto culpa
            consectetur non sint magni est.
          </li>
          <li>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus nobis hic architecto temporibus iusto culpa
            consectetur non sint magni est.
          </li>
          <li>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus nobis hic architecto temporibus iusto culpa
            consectetur non sint magni est.
          </li>
          <li>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus nobis hic architecto temporibus iusto culpa
            consectetur non sint magni est.
          </li>
          <li>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus nobis hic architecto temporibus iusto culpa
            consectetur non sint magni est.
          </li>
          <li>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus nobis hic architecto temporibus iusto culpa
            consectetur non sint magni est.
          </li>
          <li>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus nobis hic architecto temporibus iusto culpa
            consectetur non sint magni est.
          </li>
        </ul>
      </div>
      <div className="answer">
        <AceEditor
          mode="sql"
          theme="github"
          onChange={handleCodeChange}
          name="sql-editor"
          value={code}
          editorProps={{ $blockScrolling: true }}
          setOptions={{ useWorker: false }}
          style={{ width: "100%", height: "400px" }}
        />
        <Button type="primary" onClick={handleRunCode}>
          Run SQL Code
        </Button>
        <Button type="primary"  style={{ marginLeft: '100px' }} onClick={handleShowCode}>
          Show answer
        </Button>
        <br />
        <input
          type="text"
          value={show}
          style={{ width: "100%", height: "200px", marginTop: "20px" }} // Thiết lập chiều rộng là 300px và chiều cao là 50px
        />
      </div>
    </div>
  );
};

export default Practice;
