import { configureStore } from "@reduxjs/toolkit";
import SliderSlice from "./SliderSlice";
import searchSlice from "./searchSlice";
import testSlice from "./testSlice";
import liveChat from "./chatSlice";

const Store = configureStore({
  reducer: {
    slider: SliderSlice,
    search: searchSlice,
    testing: testSlice,
    chat: liveChat,
  },
});

export default Store;
