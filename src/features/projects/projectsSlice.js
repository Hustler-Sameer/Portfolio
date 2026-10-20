import { createSlice } from '@reduxjs/toolkit';

const projectsSlice = createSlice({
  name: 'projects',
  initialState: { activeFilter: 'All' },
  reducers: {
    setActiveFilter(state, action) {
      state.activeFilter = action.payload;
    },
  },
});

export const { setActiveFilter } = projectsSlice.actions;
export default projectsSlice.reducer;
