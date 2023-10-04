"use client";

import { useGetUsersQuery } from "@/redux/services/userApi";
import { decrement, increment } from "@/redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";
import { setUsersData } from "@/redux/features/userSlice";

export default function FetchButtons() {
  const count = useAppSelector((state) => {
    return state.CounterReducer.value;
  });
  const dispatch = useAppDispatch();
  const [skip, setSkip] = useState(true);
  const {isLoading, isFetching, data, error, isSuccess} = useGetUsersQuery(null, {
    skip,
  });
  useEffect(()=>{
     if(Object.keys(data? data: []).length) {
      dispatch(setUsersData(data))
     }
  }, [isSuccess]);
  return (
    <div className="mt-4 w-[50%]">
      {/* {console.log()} */}
      <button
        onClick={() => {setSkip(!skip)}}
        className="border-2 w-full mt-2 px-6 rounded hover:bg-green-100 shadow-md"
      >
        Fetch Users
      </button>
 </div>
  );
}


// {error ? (
//   <p>Oh no, there was an error</p>
// ) : isLoading || isFetching ? (
//   <p>Loading...</p>
// ) : data ? (
//   <div
//     style={{
//       display: "grid",
//       gridTemplateColumns: "1fr 1fr 1fr 1fr",
//       gap: 20,
//     }}
//   >
//     {data.map((user) => (
//       <div
//         key={user.id}
//         style={{ border: "1px solid #ccc", textAlign: "center" }}
//       >
//         <img
//           src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
//           alt={user.name}
//           style={{ height: 180, width: 180 }}
//         />
//         <h3>{user.name}</h3>
//       </div>
//     ))}
//   </div>
// ) : null}
