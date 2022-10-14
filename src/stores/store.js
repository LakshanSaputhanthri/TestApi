import create from "zustand";
import { devtools, persist } from "zustand/middleware";
let store = (set) => ({
  url: "",
  method: "GET",
  data: "",
  stat: "bad",
  addstat: (stat) => set(() => ({ stat: stat })),
  adddata: (data) => set(() => ({ data: data })),
  addUrl: (url) => set(() => ({ url: url })),
  addMethod: (method) => set(() => ({ method: method })),
});
store = devtools(store);
store = persist(store);
const useUrlStore = create(store);
export default useUrlStore;

//*************************************** *//
