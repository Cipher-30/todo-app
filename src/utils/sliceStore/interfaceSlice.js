import { createSlice } from "@reduxjs/toolkit";

const interfaceSlice = createSlice( 
    {
        name:"interfaceSlice",
        initialState:{
          categoryOptions : ["Home","Work","Personal"],
          taskMenu : { 
            markAsDone: false,
            delete: false,
            pinUp: false,
          }
        },

        reducers: {
            addCategory : (state, action) =>
            {
                 state.categoryOptions.push(action.payload);
            }
        }
    }
)


export const{addCategory} = interfaceSlice.actions;

export default interfaceSlice.reducer;