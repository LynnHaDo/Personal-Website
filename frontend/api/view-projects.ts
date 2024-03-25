import { sql } from '@vercel/postgres';
import { VercelRequest, VercelResponse } from '@vercel/node';
 
export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) { 
  const projects = await sql`SELECT * FROM Projects;`;
  return response.status(200).json({ projects });
}