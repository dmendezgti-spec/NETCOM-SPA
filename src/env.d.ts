interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL: string;
  readonly PUBLIC_COMPANY_PHONE: string;
  readonly PUBLIC_COMPANY_EMAIL: string;
  readonly PUBLIC_COMPANY_WHATSAPP: string;
  readonly PUBLIC_GA4_ID: string;
  readonly PUBLIC_META_PIXEL_ID: string;
  readonly CONTACT_WEBHOOK_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}