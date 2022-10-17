import create from "zustand";
import { devtools, persist } from "zustand/middleware";
let folderData = (set) => ({
  folderName: "Folder Name",
  saveUrl: "",
  saveMethod: "",
  responceBody: "",
  addfolderName: (folderName) => set(() => ({ folderName: folderName })),
  addSaveUrl: (surl) => set(() => ({ saveUrl: surl })),
  addSaveMethod: (saveMethod) => set(() => ({ saveMethod: saveMethod })),
  addResponceBody: (responceBody) =>
    set(() => ({ responceBody: responceBody })),
});
folderData = devtools(folderData);
folderData = persist(folderData, { name: "FolderDataStore" });
const useFolderData = create(folderData);
export default useFolderData;
