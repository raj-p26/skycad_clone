import { memo, useState, useCallback } from "react";
import { useAdmin } from "../contexts/AdminContext";
import type { Pages, AlertProps } from "../utils";
import { GAS_BACKEND_URL, ADMIN_TOKEN } from "../utils";

interface NavbarProps {
  currentPage: Pages;
  setCurrentPage: (page: Pages) => void;
}

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const { logout, authed } = useAdmin();
  const [uploadImageDialogOpen, setUploadImageDialogOpen] =
    useState<boolean>(false);

  const handleCloseDialog = useCallback(() => {
    setUploadImageDialogOpen(false);
  }, []);

  return (
    <>
      <div className="navbar bg-base-100/80 backdrop-blur-md sticky top-0 z-50 border-b border-base-200 px-4 lg:px-8">
        <div className="flex-1">
          <a className="btn btn-ghost text-2xl font-black tracking-tighter text-primary">
            SKY<span className="text-base-content">CAD</span>
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal gap-2 p-0">
            <li>
              <button
                className={`btn btn-sm btn-ghost rounded-lg ${currentPage === "home" ? "btn-active bg-primary/10 text-primary" : ""}`}
                onClick={() => setCurrentPage("home")}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className={`btn btn-sm btn-ghost rounded-lg ${currentPage === "gallery" ? "btn-active bg-primary/10 text-primary" : ""}`}
                onClick={() => setCurrentPage("gallery")}
              >
                Gallery
              </button>
            </li>
            <li>
              <button
                className={`btn btn-sm btn-ghost rounded-lg ${currentPage === "contact" ? "btn-active bg-primary/10 text-primary" : ""}`}
                onClick={() => setCurrentPage("contact")}
              >
                Contact
              </button>
            </li>
            {authed && (
              <>
                <li>
                  <button
                    className="btn btn-sm btn-ghost rounded-lg"
                    onClick={() => setUploadImageDialogOpen(true)}
                  >
                    Upload Image
                  </button>
                </li>
                <li>
                  <button
                    className="btn btn-sm btn-ghost btn-error rounded-lg"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <UploadImageDialog
        open={uploadImageDialogOpen}
        onClose={handleCloseDialog}
      />
    </>
  );
}

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve((reader.result as string).split(",")[1]);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

const UploadImageDialog = memo(
  ({ open, onClose }: { open: boolean; onClose: () => void }) => {
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState<AlertProps | null>(null);

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);

      const formData = new FormData(e.currentTarget);
      const description = formData.get("description") as string;
      const file = formData.get("image") as File;

      if (!file || file.size === 0) {
        setAlert({ type: "error", message: "Please select an image first" });
        setLoading(false);
        return;
      }

      try {
        // Convert to base64
        const base64 = await fileToBase64(file);

        const data = {
          action: "uploadImage",
          token: ADMIN_TOKEN,
          filename: file.name,
          mimeType: file.type,
          base64,
          description,
        };

        const response = await fetch(GAS_BACKEND_URL, {
          method: "POST",
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          setAlert({ type: "error", message: "Failed to upload image" });
          setLoading(false);
          return;
        }

        setAlert({ type: "success", message: "Image uploaded successfully" });
      } catch (err) {
        console.error("Failed to parse image file", err);
        setAlert({
          type: "error",
          message: "Failed to process the image. Please try again.",
        });
      } finally {
        setLoading(false);
        setTimeout(() => setAlert(null), 3000);
      }
    };

    return (
      <>
        <dialog
          id="upload-image"
          className="modal modal-bottom sm:modal-middle"
          open={open}
        >
          <div className="modal-box relative bg-base-100 rounded-4xl shadow-2xl p-0 overflow-hidden">
            {/* Decorative Header Background */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-primary/5 -z-10 pattern-dots pattern-primary pattern-bg-transparent pattern-size-4 pattern-opacity-10"></div>

            <div className="p-8">
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-2">
                Upload Image
              </h3>
              <p className="text-sm font-medium text-slate-500 mb-8">
                Add a new image to your portfolio gallery.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-bold tracking-widest uppercase text-xs text-slate-500">
                      Image File
                    </span>
                  </label>
                  <div className="relative group">
                    <input
                      type="file"
                      name="image"
                      accept="image/*"
                      required
                      className="file-input file-input-bordered file-input-primary w-full bg-base-50 hover:bg-base-100 transition-colors rounded-xl"
                    />
                  </div>
                </div>

                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-bold tracking-widest uppercase text-xs text-slate-500">
                      Description (Optional)
                    </span>
                  </label>
                  <textarea
                    name="description"
                    placeholder="Describe the 3D printed object..."
                    className="textarea textarea-bordered w-full h-24 bg-base-50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all rounded-xl resize-none p-4"
                  ></textarea>
                </div>

                <div className="modal-action pt-4 flex gap-3 m-0">
                  <button
                    type="button"
                    className="btn btn-ghost hover:bg-slate-100 rounded-xl flex-1"
                    onClick={onClose}
                    disabled={loading}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary shadow-lg shadow-primary/30 rounded-xl flex-1 border-none"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="loading loading-spinner"></span>
                    ) : (
                      <span className="font-bold tracking-widest uppercase text-sm">
                        Upload
                      </span>
                    )}
                  </button>
                </div>
              </form>
              {alert && (
                <div className={`alert alert-${alert.type}`}>
                  <span>{alert.message}</span>
                </div>
              )}
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button onClick={onClose}>close</button>
          </form>
        </dialog>
      </>
    );
  },
);
