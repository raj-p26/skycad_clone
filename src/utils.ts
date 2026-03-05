export type Pages = "home" | "gallery" | "contact";
export type AlertProps = {
  type: "success" | "error";
  message: string;
};

const GAS_BACKEND_URL = import.meta.env.VITE_GAS_BACKEND_URL;
const ADMIN_TOKEN = import.meta.env.VITE_ADMIN_TOKEN;
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

if (!GAS_BACKEND_URL) {
  throw new Error("GAS_BACKEND_URL is not defined");
}

if (!ADMIN_TOKEN) {
  throw new Error("ADMIN_TOKEN is not defined");
}

if (!ADMIN_PASSWORD) {
  throw new Error("ADMIN_PASSWORD is not defined");
}

export { GAS_BACKEND_URL, ADMIN_PASSWORD, ADMIN_TOKEN };
