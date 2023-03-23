import { createAsyncThunk } from '@reduxjs/toolkit'

const baseUrl = 'http://localhost:3030'

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const res = await fetch(`${baseUrl}/users`)
  return res.json()
})

export const updateUser = createAsyncThunk(
  'users/updateUsers',
  async (userData) => {
    const { id, accountNo, country, division, legacyNo, legacyDivision } =
      userData

    const options = {
      method: 'PATCH',
      body: JSON.stringify({
        accountNo,
        country,
        division,
        legacyNo,
        legacyDivision,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const res = await fetch(`${baseUrl}/users/${id}`, options)
    return res.json()
  }
)
