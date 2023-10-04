"use client";
import { useAppSelector } from "@/redux/hooks";
import Users from "@/components/User";
export default function Board() {
  const count = useAppSelector((state) => state.CounterReducer.value);
  return (
    <div className=" border-2 flex flex-col justify-center w-full px-4 text-lg">
      <h3 className="text-center font-bold">Hello Board</h3>
      <hr />
      <div>Counter value: {count}</div>
      <div className="flex justify-start">
        <div className="mr-6 w-[20%]">User List: </div>
        <div className="w-[70%] h-[50%]">
          <Users />
        </div>
      </div>
    </div>
  );
}
