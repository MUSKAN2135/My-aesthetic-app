import { createAsyncThunk, createSlice, type PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';

export interface Product {
  id: number;
  title: string;
  price: number;
  description?: string;
  image?: string;
  category?: string;
}

interface ProductState {
  products: Product[];
  loading: boolean;
}

export const fetchProducts = createAsyncThunk(
  'products/fetch',
  async () => {
    const res = await axios.get(``);
    return res.data;
  }
);

const initialState: ProductState = {
  products: [],
  loading: false
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Omit<Product, 'id'>>) => {
      const newProduct: Product = { id: Date.now(), ...action.payload };
      state.products.push(newProduct);
      localStorage.setItem('products', JSON.stringify(state.products));
    },
    updateProduct: (state, action: PayloadAction<Product>) => {
      const index = state.products.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = action.payload;
        localStorage.setItem('products', JSON.stringify(state.products));
      }
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(p => p.id !== action.payload);
      localStorage.setItem('products', JSON.stringify(state.products));
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => { state.loading = true; })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      });
  }
});

export const { addProduct, updateProduct, deleteProduct } = productSlice.actions;

export default productSlice.reducer;
