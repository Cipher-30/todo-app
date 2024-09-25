import React from 'react'
import { useSelector } from 'react-redux'

const TaskCompletionBar = () => {

  const taskCompleted = useSelector( (store) => ( store.task.taskAccomplised));

  return (
    <div className="w-full  mx-auto p-4 border border-gray-400 rounded-lg bg-black text-white shadow-md">
    <div className="flex items-center justify-between mb-2">
      <span className="text-sm font-semibold">Task Completion</span>
      <span className="text-sm font-semibold text-white">{taskCompleted}%</span>
    </div>
    <div className="relative w-full h-4 bg-gray-700 rounded-full overflow-hidden">
      <div
        className={`absolute top-0 left-0 h-full bg-white rounded-full transition-all duration-300`}
        style={{ width: `${taskCompleted}%` }}
      ></div>
    </div>
  </div>
  )
}

export default TaskCompletionBar














// import React from 'react';
// import { useSelector } from 'react-redux';

// const TaskCompletionBar = () => {
//   const taskCompleted = useSelector((store) => store.task.taskAccomplished);

//   return (
//     // <div className="w-full max-w-lg mx-auto p-4 border border-gray-300 rounded-lg bg-white shadow-md">
//     <>
//       <div className="flex items-center justify-between mb-2">
//         <span className="text-sm font-semibold text-gray-700">Task Completion</span>
//         <span className="text-sm font-semibold text-gray-700">{taskCompleted}%</span>
//       </div>
//       <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden">
//         <div
//           className={`absolute top-0 left-0 h-full bg-green-500 rounded-full transition-all duration-300`}
//         //   style={{ width: `${taskCompleted}%` }}
//         ></div>
//       </div>
//       </>

//   );
// };

// export default TaskCompletionBar;






















// import React from 'react';
// import { useSelector } from 'react-redux';

// const TaskCompletionBar = () => {
//   const taskCompleted = useSelector((store) => (store.task.taskAccomplished));

//   console.log(taskCompleted);
  

//   return (
//     <div className="w-full max-w-lg mx-auto p-4 border border-gray-800 rounded-lg bg-black text-white shadow-md">
//       <div className="flex items-center justify-between mb-2">
//         <span className="text-sm font-semibold">Task Completion</span>
//         <span className="text-sm font-semibold text-white">{taskCompleted}%</span>
//       </div>
//       <div className="relative w-full h-4 bg-gray-700 rounded-full overflow-hidden">
//         <div
//           className={`absolute top-0 left-0 h-full bg-white rounded-full transition-all duration-300`}
//           style={{ width: `${taskCompleted}%` }}
//         ></div>
//       </div>
//     </div>
//   );
// };

// export default TaskCompletionBar;

