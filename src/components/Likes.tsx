import {
  ArrowDownToLine,
  Forward,
  Scissors,
  ThumbsDown,
  ThumbsUp,
  UserCircle,
} from "lucide-react";
import { ButtonIcon } from "./Button";

export function Likes() {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center gap-2">
          <UserCircle className="w-8 h-8" />
          <div className="flex justify-center items-start flex-col text-start">
            <span>Yasuhei Nakamura</span>
            <span className="text-xs text-zinc-600 ">6.44 mil inscritos</span>
          </div>
          <button className=" bg-zinc-200 hover:bg-zinc-400 hover:text-zinc-800 rounded-full text-black font-medium text-center flex justify-center items-center w-28 h-9 ml-4">
            Inscrever-se
          </button>
        </div>
      </div>
      <div className="flex justify-center items-start text-center">
        <div className="flex justify-center flex-row items-center">
          <button className=" bg-zinc-800 hover:bg-zinc-600 hover:text-zinc-300 rounded-full text--zinc-400  font-medium text-center flex justify-around items-center w-28 h-9 px-2 ">
            <ThumbsUp className="w-5 h-5" />
            <span className="text-xs"> 10Mil </span> |
            <ThumbsDown className="w-5 h-5" />
          </button>
          <ButtonIcon
            icon={<Forward className="w-7 h-7 pr-1 " />}
            text={"compartilhar"}
          />

          {/* <button className=" bg-zinc-800 hover:bg-zinc-600 hover:text-zinc-300 rounded-full text--zinc-400  font-medium text-center flex justify-center items-center w-36 h-9 ml-4 ">
            <Forward className="w-7 h-7 pr-1 " />
            <span className="text-sm"> Compartilhar </span>
          </button> */}
          <button className=" bg-zinc-800 hover:bg-zinc-600 hover:text-zinc-300 rounded-full text--zinc-400  font-medium text-center flex justify-center items-center w-36 h-9 ml-4 ">
            <ArrowDownToLine className="w-7 h-7 pr-1 " />
            <span className="text-sm"> Donwload </span>
          </button>
          <button className=" bg-zinc-800 hover:bg-zinc-600 hover:text-zinc-300 rounded-full text--zinc-400  font-medium text-center flex justify-center items-center w-24 h-9 ml-4 flex justify-center items-center">
            <Scissors className="w-7 h-7 pr-1 " />
            <span className="text-sm"> Clipe </span>
          </button>
        </div>
      </div>
    </div>
  );
}
