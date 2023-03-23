import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../../features/users/usersActions'

function TableRow({ user }) {
  const [isEditing, setIsEditing] = useState(false)
  const [userData, setUserData] = useState(user)
  const keys = Object.keys(userData)
  const values = Object.values(userData)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const key = e.target.name
    const value = e.target.value
    setUserData((prev) => ({ ...prev, [key]: value }))
  }

  const handleClick = async () => {
    if (isEditing) {
      await dispatch(updateUser(userData)).unwrap()
    }
    setIsEditing((prev) => !prev)
  }

  const isInputEmpty = values.includes('')
  return (
    <tr className="border-b ">
      {keys.map((key, index) => (
        <td
          key={index}
          className={`whitespace-nowrap px-6 py-4 ${
            key === 'id' && 'font-medium'
          }`}
        >
          {key === 'id' ? (
            userData[key]
          ) : isEditing ? (
            <input
              className="max-w-max w-14"
              name={key}
              value={userData[key]}
              onChange={handleChange}
            />
          ) : (
            userData[key]
          )}
        </td>
      ))}
      <td className="whitespace-nowrap px-6 py-4 font-medium">
        <button
          type="button"
          onClick={handleClick}
          disabled={isInputEmpty}
          className="btn"
        >
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </td>
    </tr>
  )
}

function TableBody() {
  const users = useSelector((state) => state.users.users)
  return (
    <tbody>
      {users?.length > 0
        ? users.map((user, index) => <TableRow user={user} key={index} />)
        : null}
    </tbody>
  )
}

export default TableBody
