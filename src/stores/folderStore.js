import create from "zustand";
import { devtools, persist } from "zustand/middleware";

let folderStore = (set) => ({
  folderArray: [],
  addFolderArray: (folderArray) =>
    set(() => ({ folderArray: [...folderArray, folderArray] })),
});
/***********************************/
folderStore = devtools(folderStore);
folderStore = persist(folderStore);
const useFolderstore = create(folderStore);
export default useFolderstore;
