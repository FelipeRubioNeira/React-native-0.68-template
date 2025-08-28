// ----------------------------------------------------------------------------------------------------//
// ----------------------- Container for global state management using Zustand ----------------------- //
// ----------------------------------------------------------------------------------------------------//

import { create } from 'zustand';

// ---------- Types ---------- //

type Data = {
  counter: number;
  name: string;
};

type State = {
  data: Data;
};

// ---------- Actions ---------- //
type Actions = {
  incrementCounter: (number: number) => void;
  updateName: (name: string) => void;
};

// ---------- Store ---------- //
export const useStore = create<State & Actions>(set => ({
  // ----------- initial state ----------- //
  data: {
    counter: 0,
    name: '',
  },
  // ----------- actions ----------- //
  incrementCounter: (number: number) => set(state => incrementCounter(state, number)),
  updateName: (name: string) => set(state => updateName(state, name)),
}));

// ---------- Helper Functions ---------- //
const incrementCounter = (state: State, number: number): State => ({
  data: {
    ...state.data,
    counter: state.data.counter + number,
  },
});

const updateName = (state: State, name: string): State => ({
  data: {
    ...state.data,
    name,
  },
});

// ---------- Exported Types ---------- //
export type { Data, State, Actions };
