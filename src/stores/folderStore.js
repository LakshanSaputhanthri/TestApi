import create from "zustand";
import { devtools, persist } from "zustand/middleware";

let folderStore = (set, get) => ({
  folderArray: [],
  folderName: `New Folder`,
  checked: true,
  addFolderArray: (fa) => {
    return set(() => ({ folderArray: [...get().folderArray, fa] }));
  },
  removeFolder: (index) => {
    return set(() => ({
      folderArray: get().folderArray.filter((ind) => ind.index !== index),
    }));
  },
  addFolderName: (index, newName) => {
    get().folderArray[index].foldername = newName;
    return set(() => ({
      folderName: get().folderArray.filter((ind) =>
        ind.index === index ? ind.foldername : newName
      ),
    }));
  },
  setCheckBox: (index, val) => {
    console.log(val);
    get().folderArray[index].checked = val;
    return set(() => ({
      checked: get().folderArray.filter((ind) =>
        ind.index === index ? ind.checked : val
      ),
    }));
  },
});

/***********************************/
folderStore = devtools(folderStore);
folderStore = persist(folderStore, { name: "FolderStore" });
const useFolderstore = create(folderStore);
export default useFolderstore;
