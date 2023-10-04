import Counter from "@/components/Counter";
import Board from "@/components/Board";
import FetchButtons from "@/components/FetchButtons";
export default function Home() {
  return (
    <div className="mt-8 flex flex-col md:flex-row justify-around divide-x-2 w-screen md:-w-[50%] md:h-full">
      <div className="h-[50dvh] md:h-screen w-full md:w-[55%] sticky top-0">
        <Board/>
      </div>
      <div className="md:w-[40%] flex flex-col justify-center items-center divide-y-2 h-screen">
        <Counter />
        <FetchButtons />
      </div>
    </div>
  );
}
