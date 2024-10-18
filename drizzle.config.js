/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: 'postgresql',  // Use 'postgresql' instead of 'pg'
  dbCredentials: {
    url: 'postgresql://ai-interview-mocker_owner:CQI0UkNiehL8@ep-cold-snow-a5odzvmg.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require',
  }
};
