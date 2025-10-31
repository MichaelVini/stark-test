// sdk.js
import starkbank from "starkbank";
import dotenv from "dotenv";
dotenv.config();

export function configureStarkUser() {
  const env = process.env.STARK_ENV || "sandbox";
  const id = process.env.STARK_PROJECT_ID;
  const privateKey = process.env.STARK_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!id || !privateKey) throw new Error("Faltam STARK_PROJECT_ID/PRIVATE_KEY");

  if (process.env.STARK_WORKSPACE_ID) {
    starkbank.user = new starkbank.Organization({
      environment: env,
      id,
      privateKey,
      workspaceId: process.env.STARK_WORKSPACE_ID,
    });
  } else {
    starkbank.user = new starkbank.Project({
      environment: env,
      id,
      privateKey,
    });
  }

  return starkbank;
}
