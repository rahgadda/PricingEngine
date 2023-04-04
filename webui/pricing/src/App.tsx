import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-red-500 underline text-center">Hello world!</h1>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Type</th>
            <th className="px-4 py-2 border">Description</th>
            <th className="px-4 py-2 border">Enable</th>
            <th className="px-4 py-2 border">System Defined</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border">gender</td>
            <td className="px-4 py-2 border">Gender</td>
            <td className="px-4 py-2 border">Y</td>
            <td className="px-4 py-2 border">N</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App
