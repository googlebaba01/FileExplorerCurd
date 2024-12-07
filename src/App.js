import FileExplorer from "./components/FileExplorer";
import "./App.css";
import FileExplorerContextWrapper from "./context/FileExplorerContext";

export default function App() {
  return (
    <FileExplorerContextWrapper>
      <FileExplorer />
    </FileExplorerContextWrapper>
  );
}
