import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice( {
    name: "user",

    initialState: {
      userInfo:null
    },

    reducers: {
     addUser: (state, action) => {
        state.userInfo = action.payload;
     },
     
    }
});



 

export const{addUser} = userSlice.actions;
export default userSlice.reducer;


