/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string; // Add your environment variables here
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
