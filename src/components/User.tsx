import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";

export default function User() {
  const users = useAppSelector((state) => state.UserDataReducer.value);
  return (
    <div className="border-2 rounded divide-y h-[350px] overflow-auto">
      {users?.map((data, index) => (
        <div key={index} className="flex flex-col ">
          <div className="flex justify-between">
            <div className="flex flex-col">
            <div>{data.name}</div>
              <div className="text-sm text-blue-500 hover:cursor-pointer">
                <Link href={data.website} target="__blank">
                  {data.website}
                </Link>
            
              </div>
            </div>
            <div>
              <img
                src={`https://robohash.org/${data.id}?set=set2&size=40x40`}
                alt={data.name}
                style={{ height: 40, width: 40 }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
