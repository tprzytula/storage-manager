import type { Config } from "jest";

const config: Config = {
  verbose: true,
  setupFilesAfterEnv: ["./testSetup.ts"],
  testEnvironment: "jsdom",
  preset: "ts-jest",
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
  },
};

export default config;
