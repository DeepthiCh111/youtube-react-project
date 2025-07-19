import { createSlice } from "@reduxjs/toolkit";

const SliderSlice = createSlice({
  name: "slider",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggle: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isOpen = false;
    },
  },
});

export const { toggle, closeMenu } = SliderSlice.actions;
export default SliderSlice.reducer;
