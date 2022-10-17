import create from "zustand";
import { devtools, persist } from "zustand/middleware";
let bodyStore = (set) => ({
  bodydata: "",
  addbodydata: (bodydata) => set(() => ({ bodydata: bodydata })),
});
bodyStore = devtools(bodyStore);
bodyStore = persist(bodyStore, { name: "BodyStore" });
const useBodyStore = create(bodyStore);
export default useBodyStore;
