interface IButtonProps {
  text: string;
  icon: React.ReactNode;
}

export function ButtonIcon({ text, icon }: IButtonProps) {
  return (
    <button className=" bg-zinc-800 hover:bg-zinc-600 hover:text-zinc-300 rounded-full text--zinc-400  font-medium text-center flex justify-center items-center w-36 h-9 ml-4 ">
      {icon}
      {/* <Forward className="w-7 h-7 pr-1 " /> */}
      <span className="text-sm"> {text} </span>
    </button>
  );
}
