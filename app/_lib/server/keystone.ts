import { getContext } from "@keystone-6/core/context";
import config from "@/keystone";
import { type Context } from ".keystone/types";
import * as PrismaModule from "@prisma/client";
import { ironSessions } from "./session";

const maxAge = process.env.SESSION_MAX_AGE || `${60 * 60 * 24 * 360}`;

const session = ironSessions({
  maxAge: parseInt(maxAge, 10),
  secret: process.env.AUTH_SESSION_SECRET,
});

const keystoneConfig = {
  ...config,
  session,
};

// Making sure multiple prisma clients are not created during hot reloading
export const keystoneContext: Context =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (globalThis as any).keystoneContext ??
  getContext(keystoneConfig, PrismaModule);

if (process.env.NODE_ENV !== "production") {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (globalThis as any).keystoneContext = keystoneContext;
}
