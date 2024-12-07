const fileExplorerData = {
  1: {
    id: 1,
    name: "File Explorer",
    type: "folder",
    parentId: null,
    children: [5,2, 3, 4, 16],
  },
  2: {
    id: 2,
    name: "Desktop",
    type: "folder",
    parentId: 1,
    children: [17,18],
  },
  3: {
    id: 3,
    name: "Documents",
    type: "folder",
    parentId: 1,
    children: [6, 7, 8],
  },
  4: {
    id: 4,
    name: "Downloads",
    type: "folder",
    parentId: 1,
    children: [9],
  },
  5: {
    id: 5,
    name: "Applications",
    type: "folder",
    parentId: 1,
    children: [12,13,14,15],
  },
  6: {
    id: 6,
    name: "Document1.jpg",
    type: "file",
    parentId: 3,
    children: [],
  },
  7: {
    id: 7,
    name: "Document2.jpg",
    type: "file",
    parentId: 3,
    children: [],
  },
  8: {
    id: 8,
    name: "Document3.jpg",
    type: "file",
    parentId: 3,
    children: [],
  },
  9: {
    id: 9,
    name: "Drivers",
    type: "folder",
    parentId: 4,
    children: [10, 11],
  },
  10: {
    id: 10,
    name: "Printerdriver.dmg",
    type: "file",
    parentId: 9,
    children: [],
  },
  11: {
    id: 11,
    name: "cameradriver.dmg",
    type: "file",
    parentId: 9,
    children: [],
  },
  12: {
    id: 12,
    name: "Webstorm.dmg",
    type: "file",
    parentId: 5,
    children: [],
  },
  13: {
    id: 13,
    name: "Pycharm.dmg",
    type: "file",
    parentId: 5,
    children: [],
  },
  14: {
    id: 14,
    name: "FileZila.dmg",
    type: "file",
    parentId: 5,
    children: [],
  },
  15: {
    id: 15,
    name: "Mattermost.dmg",
    type: "file",
    parentId: 5,
    children: [],
  },
  16: {
    id: 16,
    name: "chromedriver.dmg",
    type: "file",
    parentId: 1,
    children: [],
  },
  17: {
    id: 17,
    name: "Screenshot1.jpg",
    type: "file",
    parentId: 2,
    children: [],
  },
  18: {
    id: 18,
    name: "videopal.mp4",
    type: "file",
    parentId: 2,
    children: [],
  },
};

export default fileExplorerData;
