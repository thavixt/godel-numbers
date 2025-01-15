import { useStore } from "../logic/store";
import { getGödelSymbol } from "./Encoding";

export function GödelButton({ number }: { number: number }) {
  const add = useStore((state) => state.add);
  return (
    <div className='flex items-center justify-center'>
      <button
        className="w-12 px-4 py-2 focus:outline-none focus:shadow-outline"
        onClick={() => add(number)}
      >
        {getGödelSymbol(number)}
      </button>
    </div>
  )
}

export function GödelClearButton() {
  const clear = useStore((state) => state.clear);
  return (
    <div className='flex items-center justify-center'>
      <button onClick={() => clear()}>
        Clear
      </button>
    </div>
  )
}

export function GödelDecodeButton() {
  const decode = useStore((state) => state.decode);
  return (
    <div className='flex items-center justify-center'>
      <button onClick={() => decode()}>
        Decode Gödel number
      </button>
    </div>
  )
}