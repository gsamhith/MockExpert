/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: 'postgresql',  // Use 'postgresql' instead of 'pg'
  dbCredentials: {
    url: process.env.DRIZZLE_DB_URL,
  }
};
