const { filterDirMyPromise } = require("./filterdir");

async function testerAsync() {
  try {
    const files1 = await filterDirMyPromise("Folder1", ".js");
    const files2 = await filterDirMyPromise("Folder2", ".js");
    const files3 = await filterDirMyPromise("Folder3", ".js");
    const files4 = await filterDirMyPromise("Folder4", ".js");
    const files5 = await filterDirMyPromise("Folder5", ".js");

    Promise.all([files1, files2, files3, files4, files5]).then((values) => {
      console.log(values);
    });
  } catch {
    console.log(err);
  }
}

async function testerSync() {
  try {
    const files1 = await filterDirMyPromise("Folder1", ".js");
    const files2 = await filterDirMyPromise("Folder2", ".js");
    const files3 = await filterDirMyPromise("Folder3", ".js");
    const files4 = await filterDirMyPromise("Folder4", ".js");
    const files5 = await filterDirMyPromise("Folder5", ".js");

    console.log(files1, files2, files3, files4, files5);
  } catch {
    console.log(err);
  }
}

testerAsync();
testerSync();
