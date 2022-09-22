import { createSlice, createAsyncThunk } from "@reduxjs/toolkit/";

const getData = createAsyncThunk("dataSlice/getData", async () => {
  return await fetch("https://api.countapi.xyz/hit/namespace/key").then(
    async (value) => {
      return await value.json();
    }
  );
});

const dataSlice = createSlice({
  name: "data",
  initialState: { value: 0, status: "Wait disPatch" },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state, action) => {
      console.log("로딩중입니다");
      state.status = "loading";
    });
    builder.addCase(getData.fulfilled, (state, action) => {
      console.log("로딩 완료");
      state.value = action.payload.value;
      state.status = "fulfilled";
    });
    builder.addCase(getData.rejected, (state, action) => {
      state.status = "rejected";
    });
  },
});
export { getData };
export default dataSlice.reducer;
