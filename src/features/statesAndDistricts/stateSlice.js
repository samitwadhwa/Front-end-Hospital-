import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedState : "",
    selectedDistrict : ""

}

const stateSlice = createSlice({
    name:'state',
    initialState,
    reducers: {
        setSelected: (state,action)=>{
            state.selectedState = action.payload.selectedState;
            state.selectedDistrict = action.payload.selectedDistrict;
            // state.photo = action.payload.photo;
        },
    }
})

export const {setSelected} = stateSlice.actions;
export const selectSelectedState = (state) => state.selected.selectedState;
export const selectSelectedDistrict = (state)=>state.selected.selectedDistrict;
// export const selectUserPhoto = (state)=>state.user.photo;
export default stateSlice.reducer;