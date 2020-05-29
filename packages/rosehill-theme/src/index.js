import React from "react";
import Root from "./root";


export default {
  name: "rosehill-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: { mode: 'light' }
  },
  actions: {
    theme: {
      afterCSR: ({ actions, state }) => {
        if (window.localStorage.getItem("mode") === "dark") {
          actions.theme.setDarkMode();
        }
      },
      setFocusOnChange: ({ state }) => {
        state.theme.focusOnChange = true;
      },
      setLightMode: ({ state }) => {
        state.theme.mode = "light";
        window.localStorage.setItem("mode", "light");
      },
      setDarkMode: ({ state }) => {
        state.theme.mode = "dark";
        window.localStorage.setItem("mode", "dark");
      }
      // setLightMode: ({state}) => {
      //   state.theme.mode = 'light';
      // },
      // setDarkMode: ({state}) => {
      //   state.theme.mode = 'dark';
      // }
    }
  }
};
