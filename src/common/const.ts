import dotenv from "dotenv";
dotenv.config();

export const CONST = {
  API_ENV: process.env.API_ENV,
  INTERACTION_URL: process.env.INTERACTION_URL,
  API_URL: process.env.API_URL,
  VERSION: process.env.VERSION,
  DEPLOY_DATETIME: process.env.DEPLOY_DATETIME,
  SERVER_INFO: process.env.SERVER_INFO,
  PROVIDER_URL: process.env.PROVIDER_URL,
  SQS_QUEUE_URL: process.env.SQS_QUEUE_URL,

  DISCORD_API_ID: process.env.DISCORD_API_ID,
  DISCORD_PUB_KEY: process.env.DISCORD_PUB_KEY,
  DISCORD_BOT_KEY: process.env.DISCORD_BOT_KEY,
  DISCORD_GUILD_ID: process.env.DISCORD_GUILD_ID,
  DISCORD_ADMIN_USER_ID: process.env.DISCORD_ADMIN_USER_ID,
  DISCORD_DEFAULT_CHANNEL_ID: process.env.DISCORD_DEFAULT_CHANNEL_ID,
  DISCORD_DEVELOP_CHANNEL_ID: process.env.DISCORD_DEVELOP_CHANNEL_ID,

  DISCORD_HOLDER_ROLL_ID: process.env.DISCORD_HOLDER_ROLL_ID,
  DISCORD_HOLDER_ROLL_NAME: process.env.DISCORD_HOLDER_ROLL_NAME,

  NOTION_API_KEY: process.env.NOTION_API_KEY,
  NOTION_DATABASE_ID: process.env.NOTION_DATABASE_ID,

  DYNAMO_REGION: process.env.DYNAMO_REGION,
  DYNAMO_TABLE_PREFIX: process.env.DYNAMO_TABLE_PREFIX,
  DYNAMO_SOFT_DELETE: process.env.DYNAMO_SOFT_DELETE,
  DYNAMO_WRITE_WAIT_TIME: 200,

  RPC_URL: process.env.RPC_URL,
  MANAGE_CA: process.env.MANAGE_CA,
  DONATE_CA: process.env.DONATE_CA,
  AES_SECRET_KEY: process.env.AES_SECRET_KEY,

  RETRY_WAIT: 500,
  RETRY_LIMIT: 2,
  LOCAL_TEST_EVENT: "localTestEvent",
};
