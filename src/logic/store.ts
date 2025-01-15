import { create } from 'zustand'
import { getGödelSymbol } from '../components/Encoding'
import { getGödelNumbers, calculateGödelNumber } from './prime'

type Store = {
  // state
  gödelNumbers: number[],
  gödelInput: number,
  // actions
  add: (number: number) => void,
  clear: () => void,
  decode: () => void,
  input: (number: number) => void,
}

const useStore = create<Store>((set) => ({
  // state
  gödelNumbers: [],
  gödelInput: 0,
  // actions
  add: (number: number) => set((state) => ({ gödelNumbers: [...state.gödelNumbers, number] })),
  clear: () => set({ gödelNumbers: [] }),
  decode: () => set((state) => ({ gödelNumbers: getGödelNumbers(state.gödelInput) })),
  input: (number: number) => set(({ gödelInput: number })),
}))

const useGödelNumbers = () => useStore((state) => state.gödelNumbers.length ? state.gödelNumbers.join(' ') : '-')
const useGödelSymbols = () => useStore((state) => state.gödelNumbers.map(number => getGödelSymbol(number)).join(''))
const useGödelValue = () => useStore((state) => state.gödelNumbers.length ? calculateGödelNumber(state.gödelNumbers) : '-')

export { useGödelNumbers, useGödelSymbols, useGödelValue, useStore }