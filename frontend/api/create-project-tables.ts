import { VercelRequest, VercelResponse } from '@vercel/node';
import { sql } from '@vercel/postgres';
 
export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  try {
    const result =
      await sql`CREATE TABLE Projects ( id bigint, title varchar(120), dateCreated date, dateFinished date, description text, frameworks text, githubUrl varchar(200), imageUrl text, languages text );`;
    return response.status(200).json({ result });
  } catch (error) {
    return response.status(500).json({ error });
  }
}