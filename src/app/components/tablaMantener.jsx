import React from "react";

export default function TablaMantener({ headers, rows }) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-10">
      <div className="flex justify-between items-center text-green-800">
      <h1 className="text-bold text-4xl my-5">Personal</h1>
      <a href="" className="text-bold text-2xl text-green-600 hover:text-green-800">Nuevo + </a>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <TableHeader headers={headers} />
        <tbody>
          {rows.map((row, index) => (
            <TableRow key={index} row={row} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TableHeader({ headers }) {
  return (
    <thead className="text-xs text-green-700 uppercase bg-green-50 dark:bg-green-700 dark:text-green-400">
      <tr>
        {headers.map((header, index) => (
          <th key={index} scope="col" className="px-6 py-3">
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
}

function TableRow({ row }) {
  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
      {Object.values(row).map((cell, index) => (
        <td key={index} className="px-6 py-4">
          {cell}
        </td>
      ))}
      <td className="px-6 py-4">
        <a href="#" className="font-medium text-green-600 dark:text-green-500 hover:underline">Editar</a>
      </td>
      <td className="px-6 py-4">
        <a href="#" className="font-medium text-green-600 dark:text-green-500 hover:underline">Eliminar</a>
      </td>
    </tr>
  );
}
