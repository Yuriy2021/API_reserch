import { createSlice } from "@reduxjs/toolkit";
import { DataState,  ListGift,} from "../../../interfaces";
import { getAllGifts } from "../ThunkCreator";

export const initialState: DataState<ListGift[]> = {
  value: [],
  loading: false,
  error: "",
};

export const ListGiftSlice = createSlice({
  name: "list gifts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllGifts.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(getAllGifts.fulfilled, (state, action) => {
      state.loading = false;
      state.value = action.payload;
    });
    builder.addCase(getAllGifts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? "";
    });
  },
  
});

export default ListGiftSlice.reducer;
