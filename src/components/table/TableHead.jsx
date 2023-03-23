import React from 'react'

function TableHead({ columns }) {
  return (
    <thead className="border-b font-medium dark:border-neutral-500">
      <tr>
        {columns.map((heading, index) => (
          <th key={index} className="px-6 py-4">
            {heading}
          </th>
        ))}
      </tr>
    </thead>
  )
}

export default TableHead
