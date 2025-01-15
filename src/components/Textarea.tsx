import { useGödelSymbols, useGödelNumbers, useGödelValue } from "../logic/store";

export function GödelTextArea() {
  const symbols = useGödelSymbols();
  const numbers = useGödelNumbers();
  const value = useGödelValue();

  return (
    <div className='flex flex-col space-y-4 items-center justify-center'>
      <textarea
        className='w-60 h-10 rounded-lg p-2'
        id="expression"
        maxLength={30}
        name="expression"
        readOnly
        rows={1}
        value={symbols}
      />
      <div className="flex flex-col items-center justify-center">
        <span>Gödel numbering:</span>
        <pre><code>{numbers}</code></pre>
        <span>Gödel value:</span>
        <pre><code>{value}</code></pre>
      </div>
    </div>
  )
}