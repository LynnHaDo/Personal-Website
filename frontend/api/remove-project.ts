import { sql } from '@vercel/postgres';
import { VercelRequest, VercelResponse } from '@vercel/node';
 
export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  try {
    const id = request.query['id'] as string;
    const title = request.query['title'] as string;
    if (!id || !title) throw new Error('Title and id required');
    await sql`DELETE FROM Projects WHERE id = ${id} AND title = ${title}`;
  } catch (error) {
    return response.status(500).json({ error });
  }
 
  const projects = await sql`SELECT * FROM Projects;`;
  return response.status(200).json({ projects });
}