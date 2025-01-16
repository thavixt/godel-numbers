import { GödelButton } from "./Buttons";

type GödelEncodingMember = { symbol: string, description?: string };

export const GödelEncoding: Record<string, GödelEncodingMember> = {
  "1": { symbol: "~", description: "not" },
  "2": { symbol: "∨", description: "or" },
  "3": { symbol: "⊃", description: "if ... then ..." },
  "4": { symbol: "∃", description: "there exists ..." },
  "5": { symbol: "=", description: "equals" },
  "6": { symbol: "0", description: "zero" },
  "7": { symbol: "s", description: "immediate successor of ..." },
  "8": { symbol: "(", description: "punctuation" },
  "9": { symbol: ")", description: "punctuation" },
  "10": { symbol: ",", description: "prime (?)" },
  "11": { symbol: "+", description: "plus" },
  "12": { symbol: "*", description: "times" },
  "17": { symbol: "x1", description: "number variables" },
  "19": { symbol: "x2", description: "" },
  "23": { symbol: "x3", description: "" },
  "289": { symbol: "P1", description: "property variables" },
  "361": { symbol: "P2" },
  "529": { symbol: "P3" },
};

export const getGödelSymbol = (number: number) => {
  const validIndex = Object.keys(GödelEncoding).includes(number.toString());
  if (!validIndex) {
    console.error("Invalid Gödel number: " + number);
    return '-';
  }
  return GödelEncoding[number].symbol;
};

export function GödelEncodingTable() {
  return (
    <div className="text-xs overflow-y-auto">
      <table className='table-fixed'>
        <colgroup>
          <col width="20%" />
          <col width="30%" />
          <col width="50%" />
        </colgroup>
        <thead>
          <tr>
            <th>Number</th>
            <th>Symbol</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(GödelEncoding).map(([number, encodes]) => (
            <tr key={number}>
              <td>{number}</td>
              <td><GödelButton number={parseInt(number)} /></td>
              <td className='text-right'>{encodes.description ?? ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}