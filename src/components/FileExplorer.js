import { useContext, useState } from "react";
import { FileExplorerContext } from "../context/FileExplorerContext";
import Input from "./input";

export default function FileExplorer({ id = 1 }) {
  const [showChildren, setShowChildren] = useState(false);
  const [showAddInput, setShowAddInput] = useState(false);
  const [showEditInput, setShowEditInput] = useState(false);
  const { nodes, deleteNode, addNode, editNode } =
    useContext(FileExplorerContext);

  const toggleChildren = () => {
    setShowChildren(!showChildren);
  };

  return (
    <div
      style={{
        marginLeft: "20px",
        padding: "5px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "2px 0",
        }}
      >
        {/* Arrow for toggling children */}
        {nodes[id].type === "folder" && (
          <button
            onClick={toggleChildren}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
              color: "#555",
              marginRight: "5px",
            }}
          >
            {showChildren ? "▼" : "▶"}
          </button>
        )}

        {/* Folder/File icon */}
        <span
          style={{
            marginRight: "5px",
          }}
        >
          {nodes[id].type === "folder" ? (showChildren ? "📂" : "📁") : "📄"}
        </span>

        {/* Node name */}
        {showEditInput ? (
          <Input
            name={nodes[id].name}
            cancel={() => setShowEditInput(false)}
            id={id}
            submit={editNode}
          />
        ) : (
          <span
            onClick={toggleChildren}
            style={{
              cursor: "pointer",
              fontSize: "14px",
              color: "#333",
              maxWidth: "200px", // Reduced width
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis", // To avoid text overflow
            }}
          >
            {nodes[id].name}
          </span>
        )}

        {/* Action buttons */}
        <div
          style={{
            display: "flex",
            gap: "5px",
          }}
        >
          {nodes[id].type === "folder" && (
            <button
              onClick={() => setShowAddInput(true)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "14px",
                color: "#555",
              }}
            >
              ➕
            </button>
          )}
          <button
            onClick={() => setShowEditInput(true)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
              color: "#555",
            }}
          >
            🖊️
          </button>
          <button
            onClick={() => deleteNode(id)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
              color: "#555",
            }}
          >
            ❌
          </button>
        </div>
      </div>

      {/* Add Input Field */}
      {showAddInput && (
        <Input
          submit={addNode}
          id={id}
          cancel={() => setShowAddInput(false)}
        />
      )}

      {/* Render children */}
      {showChildren &&
        nodes[id]?.children?.map((childId) => (
          <FileExplorer key={childId} id={childId} />
        ))}
    </div>
  );
}
