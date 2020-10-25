import React from 'react'
import { CsvToHtmlTable } from 'react-csv-to-table';
import { Link } from 'react-router-dom'
import { sampleData } from "./boston";
import './directory2.css'

function Directory2() {
  return (
    <div className="background">

      <div className="towns">
        <div className="town">
          <Link to="/directory" className="page">
            Salem, MA
          </Link>
        </div>
        <div className="town">
          |
        </div>
        <div className="town">
          <Link to="/directory2" className="page">
            Boston, MA
          </Link>
        </div>
      </div>

      <div className="table">
        <CsvToHtmlTable
          data={sampleData}
          csvDelimiter=","
          hasHeader={true}
        />

      </div>

    </div>
  )
}

export default Directory2
