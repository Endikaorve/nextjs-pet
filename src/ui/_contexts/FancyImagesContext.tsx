import React, { createContext, useReducer } from "react";

export const FancyImagesContext = createContext<any>({});

const initialState = {
  fancyImages: false,
};

const fancyImagesReducer = (state: any, action: any) => {
  switch (action.type) {
    case "DISABLE_FANCY_IMAGES":
      return { fancyImages: false };
    case "ENABLE_FANCY_IMAGES":
      return { fancyImages: true };
    default:
      return state;
  }
};

export function FancyImagesProvider(props: any) {
  const [state, dispatch] = useReducer(fancyImagesReducer, initialState);

  return (
    <FancyImagesContext.Provider value={{ state, dispatch }}>
      {props.children}
    </FancyImagesContext.Provider>
  );
}
