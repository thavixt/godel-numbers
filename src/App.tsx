import { GödelEncodingTable } from './components/Encoding'
import { GödelClearButton } from './components/Buttons'
import gödel from './assets/kurt-gödel-sign.svg'
import { GödelTextArea } from './components/Textarea'
import { GödelNumberInput } from './components/Input'

function App() {
  return (
    <div className="p-4 flex flex-col container mx-auto space-y-4">

      <div className="flex flex-col items-center justify-center">
        <h1 className='text-5xl p-4 font-serif'>Kurt Gödel's Incompleteness Theorems</h1>
        <p>
          a demonstration of
          <a title='Gödel numbering - Wikipedia' href="https://en.wikipedia.org/wiki/G%C3%B6del_numbering" target='_blank'>
            <img className="inline-block" src={gödel} alt="Kurt Gödel's signature" title="Kurt Gödel's signature" />
            's numbering system
          </a>
        </p>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-4 md:space-x-16">
        <div className="flex flex-col space-y-2 items-center justify-center">
          <p>Gödel's encoding table</p>
          <GödelEncodingTable />
        </div>

        <div className="flex flex-col space-y-4 items-center justify-center max-w-[600px]">
          <div>
            <p>Unfortunately, these Gödel numbers get <b>really</b> big - so, this is just a showcase.</p>
            <p>For a trivial example, try the expression <code><b>0=0</b></code> (zero equals zero), then input the resulting <i>Gödel value</i> at the bottom, then press <i>Clear</i> and <i>Decode</i> to retrieve the original expression.</p>
          </div>
          <div className="flex flex-col space-y-4 items-center justify-center">
            <p>Input a mathematical expression by clicking on the symbols in the list:</p>
            <GödelTextArea />
            <GödelClearButton />
          </div>
          <div className="flex flex-col space-y-4 items-center justify-center">
            <p>Or enter a Gödel number you know to decode the expression:</p>
            <GödelNumberInput />
          </div>
        </div>
      </div>

      <footer className='flex flex-col place-items-center'>
        <div>Made by <a href="https://github.com/thavixt" target='__blank'>thavixt@github</a></div>
        <div><p>Based on <a href="https://www.youtube.com/watch?v=HeQX2HjkcNo" target='__blank'>Math's Fundamental Flaw - Veritasium (YouTube link)</a></p></div>
      </footer>
    </div>
  )
}

export default App
