
import { useState } from "react";
import { cn } from "@/lib/utils";

interface FileUploadProps {
  isCollapsed?: boolean;
}

const FileUpload = ({ isCollapsed = false }: FileUploadProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files) {
      const newFiles = Array.from(e.dataTransfer.files);
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  return (
    <div className={cn(
      "border border-border rounded-lg transition-all duration-300",
      isDragging ? "border-purple bg-purple/10" : "hover:border-white/30",
      isCollapsed ? "p-2" : "p-4"
    )}>
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className="flex flex-col items-center justify-center gap-2"
      >
        <svg className="w-6 h-6 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
        
        {!isCollapsed && (
          <>
            <p className="text-xs text-center text-muted-foreground">
              Arrastra y suelta documentos aquí
            </p>
            <div className="flex space-x-2 mt-2">
              <label className="text-xs bg-dark-lighter px-2 py-1 rounded cursor-pointer hover:bg-white/10 transition-colors">
                Subir
                <input type="file" multiple className="hidden" onChange={handleFileSelect} />
              </label>
              <button className="text-xs bg-dark-lighter px-2 py-1 rounded hover:bg-white/10 transition-colors">
                Drive
              </button>
            </div>
          </>
        )}
        
        {!isCollapsed && files.length > 0 && (
          <div className="w-full mt-2">
            <p className="text-xs text-white mb-1">{files.length} archivos</p>
            <div className="max-h-24 overflow-y-auto scrollbar-thin">
              {files.map((file, index) => (
                <div key={index} className="text-xs text-muted-foreground truncate py-1">
                  {file.name}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
