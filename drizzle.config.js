import { defineConfig } from 'drizzle-kit'
export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.js",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_ydw83OJEnUKs@ep-plain-boat-a87t9ynm-pooler.eastus2.azure.neon.tech/MockIt?sslmode=require",
  }
})