// FileUploadPreview.jsx
import React, { useState } from "react";

export default function FileUploadPreview() {
  const [file, setFile] = useState(null);
  return (
    <div style={{ padding: 20 }}>
      <h3>Upload & Preview</h3>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      {file && (
        <div style={{ marginTop: 12 }}>
          <p>{file.name}</p>
          {file.type.startsWith("image/") && <img src={URL.createObjectURL(file)} alt="preview" style={{ maxWidth: 300 }} />}
        </div>
      )}
    </div>
  );
}
