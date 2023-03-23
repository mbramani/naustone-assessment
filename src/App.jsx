import { useEffect } from 'react'
import { fetchUsers } from './features/users/usersActions'
import { useDispatch } from 'react-redux'
import TableHead from './components/table/TableHead'
import TableBody from './components/table/TableBody'

import './App.css'

function App() {
  const dispatch = useDispatch()
  const columns = [
    'SR No.',
    'Account No.',
    'Country',
    'Division',
    'Legacy No.',
    'Legacy Division',
    'Edit',
  ]

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8 border rounded-lg shadow">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <TableHead columns={columns} />
              <TableBody />
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
