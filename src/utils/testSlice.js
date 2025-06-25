import { createSlice } from "@reduxjs/toolkit";
const testSlice = createSlice({
  name: "test",
  initialState: {
    testValue: "",
  },
  reducers: {
    addTestValue: (state, action) => {
      state.testValue = action.payload;
    },
  },
});

export const { addTestValue } = testSlice.actions;
export default testSlice.reducer;
