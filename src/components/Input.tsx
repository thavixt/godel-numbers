import { useStore } from "../logic/store";
import { GödelDecodeButton } from "./Buttons";

export function GödelNumberInput() {
  const input = useStore((state) => state.input);
  return (
    <div className='flex flex-col space-y-4 items-center justify-center'>
      <textarea
        className='w-60 h-10 rounded-lg p-2'
        id="gödelNumber"
        maxLength={30}
        name="gödelNumber"
        onChange={(e) => input(parseInt(e.target.value ?? 0))}
        rows={1}
      />

      <GödelDecodeButton />
    </div>
  )
}