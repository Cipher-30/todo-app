import { createSlice } from "@reduxjs/toolkit";



const taskSlice = createSlice({
    name: "task",
    initialState: {
        taskInfo: [
            // { 
            // taskId : 1 ,    
            // taskName: reftaskName.current.value ,
            // taskDescription: reftaskDescription.current.value,
            // creationTime: creationTimeValue ,
            // timeToAccomplish:  reftaskDeadline.current.value,
            // taskCategory : category,
            // markDone: false,
            // pinUp: false,
            //  },
        ],
        nextTaskId: 1,
    },
    reducers: {

        addTask: (state, action) => {
            const newTask = { ...action.payload, taskId: state.nextTaskId };
            state.taskInfo.push(newTask);

            state.nextTaskId = state.nextTaskId + 1;

        },

        removeTask: (state, action) => {
            const id = action.payload;
            state.taskInfo = state.taskInfo.filter((task) => (task.taskId !== id))
        },



        addMarkAsDone: (state, action) => {

            const id = action.payload;
            console.log(id);

            state.taskInfo.forEach((eachTask) => {
                if (eachTask.taskId === id) {
                    eachTask.markDone = !eachTask.markDone;
                }
            });

            // console.log(state.taskInfo);


        },


        addPinUp: (state, action) => {

            const id = action.payload;

            state.taskInfo.forEach((eachTask) => {

                if (eachTask.taskId === id) {
                    console.log(state.taskInfo.indexOf(eachTask));

                    if (eachTask.pinUp) {

                        eachTask.pinUp = false;

                    }
                    else {

                        eachTask.pinUp = true;
                        const index = state.taskInfo.indexOf(eachTask);
                        //DESTRUCTURING FROM ARRAY AS RETURNS A ARRAY
                        const [pinUpTask] = state.taskInfo.splice(index, 1);

                        state.taskInfo.unshift(pinUpTask);

                    }



                }
            })


        }













    }
});


export const { addTask, removeTask, addMarkAsDone, addPinUp } = taskSlice.actions;
export default taskSlice.reducer;