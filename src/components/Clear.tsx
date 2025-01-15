import { useStore } from "../logic/store";

export function GödelClearButton() {
  const clear = useStore((state) => state.clear);
  return (
    <div className='flex items-center justify-center'>
      <button
        className="px-4 py-2 bg-blue-200 rounded hover:bg-blue-700 hover:text-white focus:outline-none focus:shadow-outline"
        onClick={() => clear()}
      >
        Clear
      </button>
    </div>
  )
}