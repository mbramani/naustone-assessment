import { createSlice } from '@reduxjs/toolkit'
import { fetchUsers, updateUser } from './usersActions'

const initialState = {
  status: 'uninitialized',
  users: [],
  error: null,
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.users = action.payload
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed'
        state.users = []
        state.error = action.error
      })
      .addCase(updateUser.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const id = action.payload?.id
        state.status = 'succeeded'
        state.users = state.users.map((user) =>
          user.id === id ? action.payload : user
        )
      })
  },
})

export default userSlice.reducer
