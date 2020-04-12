import React, {useState, useCallback} from "react";
import Log from "../components/Log";
import LogHeader from "../components/LogHeader";

function parseRawLogLine (line) {
  let items = line.match(
    /\[([^\]]+)\]\[([^\]]+)\]\[([^\]]+)\]\[([^\]]+)\]\[(.+)\]/
  );

  if (!items) {
    return;
  }

  return {
    pId: items[1],
    timestamp: new Date(parseInt(items[2], 10)),
    process: items[3],
    level: items[4],
    message: items[5]
  };
}

function getFilteredLogs(logs, filter, {regexFilterActive}) {
  if (!filter) {
    return logs;
  }

  // regex based filtering
  if (regexFilterActive) {
    try {
      let reg = new RegExp(filter);

      return logs.filter(log => {
        return log.message.match(reg);
      });
    } catch (error) {
      return logs
    }
  }

  // string matching based filtering
  return logs.filter(log => {
    return log.message.includes(filter);
  });
}

function LogPreview(props) {
  let rawLogs = props.files.reduce((result, file) => {
        let rawLogLines = file.content.trim().split('\n');

        result.push(...rawLogLines);
        return result;
      }, []),
      logs = rawLogs.map(parseRawLogLine).sort((a, b) => a.timestamp - b.timestamp);

  // let inLocalStorage = localStorage.hasOwnProperty('logs');
  // if (logs.length && !inLocalStorage) {
  //   localStorage.setItem('logs', JSON.stringify(logs));
  // } else if (!logs.length && inLocalStorage) {
  //   logs = JSON.parse(localStorage.getItem('logs'));
  // }

  const [filter, updateFilter] = useState('');
  const onFilterChange = useCallback((event) => {
    updateFilter(event.target.value);
  }, [])

  const [regexFilterActive, updateRegexFilter] = useState(false);
  const onClickRegexFilter = useCallback(() => {
    updateRegexFilter(!regexFilterActive);
  });
  const regexFilterClassNames = ['regex'];
  if (regexFilterActive) {
    regexFilterClassNames.push('active');
  }

  if (filter) {
    logs = getFilteredLogs(logs, filter, {regexFilterActive});
  }

  return (
    <div className="postman-log-preview">
      <div className="log-header">
        <div className="filter-group">
          <span className={regexFilterClassNames.join(' ')} onClick={onClickRegexFilter}>.*</span>
          <input
            className="filter-input"
            value={filter}
            placeholder="Search"
            onChange={onFilterChange}/>
        </div>
      </div>
      <div className="log-body">
        <LogHeader />
        <div className="table-body">
          {
            logs.map((log,index) => {
              return <Log
                key={index}
                pId={log.pId}
                process={log.process}
                timestamp={log.timestamp}
                level={log.level}
                message={log.message}
              />
            })
          }
        </div>
      </div>
    </div>
  );
}

export default LogPreview;
