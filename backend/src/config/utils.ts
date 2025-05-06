import 'dotenv/config';

export const env = {
  PORT: Number(process.env.PORT) || 3001,
};

export const serviceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
};

export const DEFAULT_RESPONSE = (code: number, success: boolean, message: string, data?: unknown) => {
  return { code, success, message, data };
};
