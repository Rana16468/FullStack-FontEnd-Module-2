

import { IncrementByValue, decrement, increment } from "./redux/features/CounterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";



//https://redux-toolkit.js.org/tutorials/quick-start
function App() {


const {count}= useAppSelector((state)=>state.counter );

  const dispatch=useAppDispatch();

  const countArray=[...Array(count)];
   console.log(Number.isInteger(countArray?.length/5) ? Math.round(countArray?.length/5)?"line-through":"" : null);

 


  return (
    <>
     <div className="mt-3 flex justify-center">
      <div className="flex border border-purple-300">
      <button onClick={()=>dispatch(IncrementByValue(5))} className="px-3 py-2 rounded-xl bg-green-400 text-white">Increment 5</button>
        <button onClick={()=>dispatch(increment())} className="px-3 py-2 rounded-xl bg-green-400 text-white">Increment</button>
        <h1 className="text-3xl mx-3">{count}</h1>
        <button onClick={()=>dispatch(decrement())} className="px-3 py-2 rounded-xl bg-red-400 text-white">Decrement</button>
      </div>
     </div>
{
      countArray?.length>0 && <div className="bg-gray-200 p-4">
      <div className="flex space-x-2 text-4xl font-bold">
        {countArray.map((_, index) => (
          <div key={index} className={`text-blue-500 ${countArray.length%5===0?"line-through":""}`}>|</div>
        ))}
      </div>

      
    </div>
     } 



      
    </>
  )
}

export default App
