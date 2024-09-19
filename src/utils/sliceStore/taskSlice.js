import { createSlice } from "@reduxjs/toolkit";



const taskSlice = createSlice( {
    name: "task",
    initialState : {
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
        nextTaskId : 1,
    },
    reducers: {
    
        addTask: (state, action) =>
        {
           const newTask = {...action.payload, taskId : state.nextTaskId};
           state.taskInfo.push(newTask); 

           state.nextTaskId = state.nextTaskId + 1;

        },
        
        removeTask: (state, action) => {
            const id = action.payload;
            state.taskInfo = state.taskInfo.filter( ( task) => (task.taskId !== id))
        },



    addMarkAsDone : (state, action) => {
          
        const id = action.payload;
        console.log(id);

        state.taskInfo.forEach( (eachTask) => { 
            if(eachTask.taskId === id)
            {
                eachTask.markDone = !eachTask.markDone;
            }
        });

        console.log(state.taskInfo);

        
    }
     










    }
});


export const{addTask, removeTask, addMarkAsDone} = taskSlice.actions;
export default taskSlice.reducer;