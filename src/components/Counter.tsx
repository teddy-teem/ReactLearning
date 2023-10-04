"use client";
import { useState } from "react";
import {increment, decrement} from "@/redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function Counter() {
  const count = useAppSelector((state:any) => {
    // console.log("=============="); //calling 3 times ??
    return state.CounterReducer.value;
  });
  const dispacth = useAppDispatch();
  return (
    <div className="border-2 w-[50%] flex justify-around py-6">
      <button
      className="border-2 px-6 rounded hover:bg-green-100 shadow-md"
        onClick={() => {
          dispacth(decrement())
        }}
      >
        Sub
      </button>
      <div>{count}</div>
      <button
      className="border-2 px-6 rounded hover:bg-red-100 shadow-md"
        onClick={() => {
        //   setCount((prev) => prev + 1);
          dispacth(increment());
        }}
      >
        Add
      </button>
    </div>
  );
}
