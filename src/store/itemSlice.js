const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const STATUS = Object.freeze({
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading',
});

const itemSlice = createSlice({
  name: 'item',
  initialState: {
    item: [],
    status: STATUS.IDLE,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsId.pending, (state, action) => {
        state.status = STATUS.LOADING;
      })
      .addCase(fetchProductsId.fulfilled, (state, action) => {
        state.item = action.payload;
        state.status = STATUS.IDLE;
      })
      
      .addCase(fetchProductsId.rejected, (state, action) => {
        state.status = STATUS.ERROR;
      });
  },

})

export const { setItem, setStatus } = itemSlice.actions;
export default itemSlice.reducer;

//thunks

export const fetchProductsId = createAsyncThunk('items', async (id) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const item = await res.json();
  return item;
});
