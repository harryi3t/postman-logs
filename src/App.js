import React, {useState, useCallback} from 'react';
import './App.css';
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import LogPreview from "./containers/LogPreview";
import DropTarget from "./components/DropTarget"


function App() {
  let [files, updateFiles] = useState([]);

  let onDrop = useCallback((item, monitor) => {
    let filesUploaded = monitor.getItem().files;

    filesUploaded.forEach(file => {
      let fileName = file.name,
          reader = new FileReader();

      reader.onload = function (event) {
        let content = event.target.result;
        updateFiles(files.concat({fileName, content }))
      };
      reader.readAsText(file);
    });
  })

  return (
    <div className="App">
      <h1>Postman Logs</h1>
      <DndProvider backend={Backend}>
        <DropTarget onDrop={onDrop}/>
        <LogPreview files={files}/>
      </DndProvider>
    </div>
    );
  }

  export default App;
