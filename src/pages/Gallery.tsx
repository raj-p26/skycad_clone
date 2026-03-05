import { memo, useEffect, useState, useCallback, useMemo } from "react";

const GAS_BACKEND_URL = import.meta.env.VITE_GAS_BACKEND_URL;

type ImageType = {
  fileId: string;
  filename: string;
  description: string;
  imageUrl: string;
  createdAt: string;
};

/**
 * Optimized Image Card Component
 * Uses memoization and native lazy loading.
 */
const ImageCard = memo(
  ({
    image,
    onClick,
  }: {
    image: ImageType;
    onClick: (img: ImageType) => void;
  }) => {
    return (
      <div
        className="group relative aspect-square overflow-hidden rounded-3xl bg-slate-100 cursor-pointer border border-slate-200 hover:border-primary/30 transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-1"
        onClick={() => onClick(image)}
      >
        <img
          src={`https://lh3.googleusercontent.com/d/${image.fileId}`}
          alt={image.description || image.filename}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
          <p className="text-white font-medium text-sm line-clamp-2 leading-snug">
            {image.description || "View Details"}
          </p>
        </div>
      </div>
    );
  },
);

/**
 * Loading Skeleton Grid
 */
const GallerySkeleton = memo(() => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="aspect-square rounded-3xl bg-slate-100 animate-pulse border border-slate-200"
        />
      ))}
    </div>
  );
});

/**
 * Image Detail Modal
 */
const ImageModal = memo(
  ({ image, onClose }: { image: ImageType | null; onClose: () => void }) => {
    if (!image) return null;

    return (
      <dialog
        className="modal modal-open bg-slate-900/90 backdrop-blur-md"
        onClick={onClose}
      >
        <div
          className="modal-box max-w-4xl p-0 bg-transparent shadow-none overflow-visible relative mx-4"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="btn btn-circle btn-sm absolute -top-12 right-0 sm:-right-12 bg-white/10 hover:bg-white/20 border-white/20 text-white"
            onClick={onClose}
          >
            ✕
          </button>

          <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            {/* Main Image */}
            <div className="bg-slate-50 flex items-center justify-center overflow-hidden h-[40vh] sm:h-[50vh] lg:h-[65vh] p-4 sm:p-8">
              <img
                src={`https://lh3.googleusercontent.com/d/${image.fileId}`}
                alt={image.filename}
                className="h-full w-full object-contain drop-shadow-md"
              />
            </div>

            {/* Metadata */}
            <div className="p-6 sm:p-10 flex flex-col bg-white border-t border-slate-100 overflow-y-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-10">
                <div className="space-y-4 flex-1">
                  <div className="space-y-2">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary bg-primary/5 px-3 py-1 rounded-full">
                      Project Details
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                      {image.filename}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-2xl">
                    {image.description ||
                      "No description provided for this engineering project."}
                  </p>

                  <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest pt-2">
                    <span>Uploaded</span>
                    <span className="text-slate-900">
                      {new Date(image.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                <div className="md:shrink-0 w-full md:w-auto mt-4 md:mt-0 pt-6 md:pt-0 border-t md:border-0 border-slate-100">
                  <button
                    className="btn btn-primary w-full md:w-auto rounded-2xl shadow-lg shadow-primary/20 font-bold uppercase tracking-widest px-8"
                    onClick={onClose}
                  >
                    Close View
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    );
  },
);

async function apiFetchGallery() {
  try {
    const response = await fetch(`${GAS_BACKEND_URL}?action=getGallery`);
    if (!response.ok) throw new Error("Failed to fetch gallery");
    const data = await response.json();
    return [data, null];
  } catch (error) {
    console.error("Gallery fetch error:", error);
    return [null, "Could not load images. Please check your connection."];
  }
}

function Gallery() {
  const [images, setImages] = useState<ImageType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);

  useEffect(() => {
    let active = true;

    apiFetchGallery().then(([data, err]) => {
      if (!active) return;
      if (data) setImages(data);
      if (err) setError(err);
      setLoading(false);
    });

    return () => {
      active = false;
    };
  }, []);

  const handleOpenModal = useCallback((image: ImageType) => {
    setSelectedImage(image);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const renderedGrid = useMemo(() => {
    if (loading) return <GallerySkeleton />;

    if (images.length === 0) {
      return (
        <div className="text-center py-20 px-4 bg-slate-50 rounded-[3rem] border border-dashed border-slate-200">
          <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            No Projects Found
          </h3>
          <p className="text-slate-500 font-medium">
            We're still uploading our latest engineering masterpieces. Check
            back soon!
          </p>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
        {images.map((img) => (
          <ImageCard key={img.fileId} image={img} onClick={handleOpenModal} />
        ))}
      </div>
    );
  }, [loading, images, handleOpenModal]);

  return (
    <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl lg:text-6xl font-black text-slate-900 uppercase tracking-tight">
            PROJECT <span className="text-primary italic">GALLERY</span>
          </h1>
          <div className="w-24 h-2 bg-primary mx-auto rounded-full shadow-lg shadow-primary/20"></div>
          <p className="mt-6 text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
            Explore our industrial precision prints and high-performance
            engineering designs.
          </p>
        </div>

        {error ? (
          <div className="alert alert-error max-w-2xl mx-auto rounded-2xl shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="font-bold tracking-tight">{error}</span>
          </div>
        ) : (
          renderedGrid
        )}

        <ImageModal image={selectedImage} onClose={handleCloseModal} />
      </div>
    </div>
  );
}

export default memo(Gallery);
