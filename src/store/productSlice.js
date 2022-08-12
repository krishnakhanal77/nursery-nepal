const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const STATUS = Object.freeze({
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading',
});

const productSlice = createSlice({
  name: 'product',
  initialState: {
    data: [],
    status: STATUS.IDLE,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = STATUS.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUS.IDLE;
      })
      
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = STATUS.ERROR;
      });
  },
  // reducers: {
  //   setProduct(state, action) {

  //     //never fetch api here directly 
  //     state.data = action.payload
  //   },
  //   setStatus(state, action) {
  //     state.status = action.payload
  //   }
  // }
  


})

export const { setProduct, setStatus } = productSlice.actions;
export default productSlice.reducer;

//thunks
export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  const data = await res.json();
  return data;
});
// export const fetchProductsId = createAsyncThunk('products/fetch', async (id) => {
//   const res = await fetch(`https://fakestoreapi.com/products/${id}`);
//   const item = await res.json();
//   return item;
// });

// export const fetchProductsId = createAsyncThunk('products/fetch', async (id) => {
//   const res = await fetch(`https://nurserynepal.herokuapp.com/products/${id}`);
//   const item = await res.json();
//   return item;
// });

// export function fetchProduct() {
//   return async function fetchProductThunk(dispatch, getState) {
//     dispatch(setStatus(STATUS.LOADING))
//     try {
//       const response = await fetch('https://fakestoreapi.com/products');
//       const data = await response.json()
//       dispatch(setProduct(data))
//       dispatch(setStatus(STATUS.IDLE))
//     }
//     catch (err) {
//       console.log(err);
//       dispatch(setStatus(STATUS.ERROR))
//     }
//   }
// }