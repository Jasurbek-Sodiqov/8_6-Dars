import { createSlice } from "@reduxjs/toolkit";


const Reducer = createSlice({
    name: 'counter',
    initialState: {
      token:localStorage.getItem('tk') ? localStorage.getItem('tk') : '',
      musiqaUrl:'',
      audyo:false,
      artist:'',
      nom:'',
    },
    reducers: {
        tk:(state, action)=>{
            state.token=action.payload;
        },
        url:(state, action)=>{
          state.musiqaUrl=action.payload
        },
        art:(state, action)=>{
          state.artist=action.payload
        },
        nm:(state, action)=>{
          state.nom=action.payload
        },
        au:(state, action)=>{
          state.audyo=action.payload
        },
    },
  });

  export default Reducer