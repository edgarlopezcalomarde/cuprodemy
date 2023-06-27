import { Course } from "@interfaces/course";
import { createSlice } from "@reduxjs/toolkit";



const initialState:Array<Course> = []

export const courseSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {
        setCourses(state, action){
            return action.payload
        },
        removeCourse(state, action){
            const index = state.findIndex(course => course._id === action.payload.id)

            if(index !=-1){
                state.splice(index,1)
            }

            return state
        }   

    }

})


export const { setCourses, removeCourse } = courseSlice.actions


export default courseSlice.reducer;