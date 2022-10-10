import create from "zustand";
import { devtools, persist } from "zustand/middleware";
let i = 0;
let folderStore = (set) => ({
  fmethod: "",
  furl: "",
  fbody: "",
  foldername: `new folder ${i}`,
  //folder: [this.fmethod, this.furl, this.fbody, this.foldername],
  addfmethod: (fmethod) => set(() => ({ fmethod: fmethod })),
  addfbody: (fbody) => set(() => ({ fbody: fbody })),
  adddata: (data) => set(() => ({ data: data })),
  addfurl: (furl) => set(() => ({ furl: furl })),
  addfoldername: (foldername) => set(() => ({ foldername: foldername })),
  addfolder: (folder) => set(() => [...folder, { folder: folder }]),
});
i++;
folderStore = devtools(folderStore);
folderStore = persist(folderStore);
const useFolderstore = create(folderStore);
export default useFolderstore;
