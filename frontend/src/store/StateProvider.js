import React, { createContext, useContext, useReducer } from 'react';

export const StateContext = createContext();

// [ass the reducer, initial state into the children while using the use reducer hook
export const StateProvider = ({ reducer, initalState, children }) => (
	<StateContext.Provider value={useReducer(reducer, initalState)}>
		{children}
	</StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
