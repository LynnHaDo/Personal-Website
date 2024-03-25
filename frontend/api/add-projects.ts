import { sql } from '@vercel/postgres';
import { VercelRequest, VercelResponse } from '@vercel/node';
 
export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  try {
    const id = request.query['id'] as string;
    const title = request.query['title'] as string;
    const dateCreated = request.query['dateCreated'] as string;
    const dateFinished = request.query['dateFinished'] as string;
    const description = request.query['description'] as string;
    const frameworks = request.query['frameworks'] as string;
    const githubUrl = request.query['githubUrl'] as string;
    const imageUrl = request.query['imageUrl'] as string;
    const languages = request.query['languages'] as string;
    if (!title || !description) throw new Error('Title and description required');
    await sql`INSERT INTO Projects (id, title, dateCreated, dateFinished, description, frameworks, githubUrl, 
        imageUrl, languages) VALUES (${parseInt(id)}, ${title}, ${dateCreated}, ${dateFinished},
        ${description}, ${frameworks}, ${githubUrl}, ${imageUrl}, ${languages});`;
  } catch (error) {
    return response.status(500).json({ error });
  }
 
  const projects = await sql`SELECT * FROM Projects;`;
  return response.status(200).json({ projects });
}